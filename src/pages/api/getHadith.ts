import type { NextApiRequest, NextApiResponse } from 'next'

interface Hadith {
  id: number;
  hadithEnglish: string;
  englishNarrator: string | null;
  book: string;
  chapter: string;
  reference: string;
  sunnahLink: string;
}

const books = [
  'bukhari',
  'muslim',
  'abudawud',
  'ibnmajah',
  'tirmidhi'
];

async function fetchHadith(book: string) {
  const url = `https://random-hadith-generator.vercel.app/${book}/`

  console.log(`Attempting to fetch hadith from ${book}...`)
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Hadith API responded with status: ${response.status} for book ${book}`)
  }

  const data = await response.json()

  if (data && data.data) {
    const sunnahLink = getSunnahLink(book, data.data.id);

    return {
      id: data.data.id,
      hadithEnglish: data.data.hadith_english,
      englishNarrator: data.data.header || null,
      book: data.data.bookName.trim(),
      chapter: data.data.chapterName.replace(/^Chapter:\s*/, ''),
      reference: data.data.refno,
      sunnahLink: sunnahLink
    }
  }

  throw new Error(`No valid hadith found in the response for book ${book}`)
}

function getSunnahLink(book: string, id: number): string {
  switch (book) {
    case 'bukhari':
      return `https://sunnah.com/bukhari:${id}`;
    case 'muslim':
      return `https://sunnah.com/muslim:${id}a`;
    case 'abudawud':
      return `https://sunnah.com/abudawud:${id}`;
    case 'ibnmajah':
      return `https://sunnah.com/ibnmajah:${id}`;
    case 'tirmidhi':
      return `https://sunnah.com/tirmidhi:${id}`;
    default:
      return `https://sunnah.com/${book}:${id}`;
  }
}

function getDateSeed() {
  const now = new Date()
  return now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate()
}

const dailyHadithCache: { [key: number]: Hadith } = {}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { type } = req.query
  const dateSeed = getDateSeed()

  if (type === 'daily') {
    if (dailyHadithCache[dateSeed]) {
      console.log('Returning cached daily hadith')
      return res.status(200).json({ ...dailyHadithCache[dateSeed], isDaily: true })
    }

    const bookIndex = dateSeed % books.length
    const book = books[bookIndex]

    try {
      const hadith = await fetchHadith(book)
      dailyHadithCache[dateSeed] = hadith
      console.log(`Returning daily hadith from ${hadith.book}`)
      return res.status(200).json({ ...hadith, isDaily: true })
    } catch (error) {
      console.error(`Error fetching daily hadith:`, error instanceof Error ? error.message : 'Unknown error')
      return res.status(500).json({ error: 'Failed to fetch daily hadith' })
    }
  } else {
    const shuffledBooks = [...books].sort(() => 0.5 - Math.random())

    for (const book of shuffledBooks) {
      try {
        const hadith = await fetchHadith(book)
        console.log(`Returning random hadith from ${hadith.book}`)
        return res.status(200).json({ ...hadith, isDaily: false })
      } catch (error) {
        console.error(`Error fetching from ${book}:`, error instanceof Error ? error.message : 'Unknown error')
      }
    }

    console.error('Failed to fetch hadith from all available books')
    return res.status(500).json({ 
      error: 'Failed to fetch hadith', 
      details: 'All attempts to fetch a hadith were unsuccessful'
    })
  }
}
