'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Companion {
  id: number
  name: string
  title: string
  biography: string
  era: 'Meccan' | 'Medinan' | 'Meccan and Medinan'
  keyAchievements: string[]
}

const companions: Companion[] = [
  {
    id: 1,
    name: "Abu Bakr As-Siddiq",
    title: "The Truthful",
    biography: `Abu Bakr As-Siddiq was the closest friend and companion of Prophet Muhammad (PBUH). He was the first adult male to accept Islam and later became the first Caliph after the Prophet's death. Known for his wisdom, generosity, and unwavering faith, Abu Bakr played a crucial role in the early days of Islam.`,
    era: 'Meccan and Medinan',
    keyAchievements: [
      "First adult male to accept Islam",
      "Accompanied the Prophet during the Hijra",
      "First Caliph of Islam",
      "Compiled the first written Quran"
    ]
  },
  {
    id: 2,
    name: "Umar ibn Al-Khattab",
    title: "Al-Farooq (The Distinguisher between Right and Wrong)",
    biography: `Umar ibn Al-Khattab was initially one of the strongest opponents of Islam before his dramatic conversion. He became the second Caliph and was known for his strong sense of justice and administrative skills. Under his leadership, the Islamic empire expanded significantly.`,
    era: 'Meccan and Medinan',
    keyAchievements: [
      "Conversion to Islam strengthened the Muslim community",
      "Second Caliph of Islam",
      "Established the Islamic calendar",
      "Introduced the office of public treasury"
    ]
  },
  {
    id: 3,
    name: "Uthman ibn Affan",
    title: "Dhun-Nurayn (The Possessor of Two Lights)",
    biography: `Uthman ibn Affan was one of the earliest converts to Islam and the third Caliph. He was known for his modesty, generosity, and piety. Uthman played a crucial role in the standardization of the Quran's text.`,
    era: 'Meccan and Medinan',
    keyAchievements: [
      "Third Caliph of Islam",
      "Standardized the Quranic text",
      "Expanded the Prophet's Mosque in Medina",
      "Equipped the Muslim army at his own expense"
    ]
  },
  {
    id: 4,
    name: "Ali ibn Abi Talib",
    title: "The Gate of Knowledge",
    biography: `Ali ibn Abi Talib was the cousin and son-in-law of Prophet Muhammad (PBUH). He was one of the first to accept Islam and was raised in the Prophet's household. Known for his deep knowledge, wisdom, and bravery, Ali played significant roles in many key events in early Islamic history.`,
    era: 'Meccan and Medinan',
    keyAchievements: [
      "Fourth Caliph of Islam",
      "Known for his eloquence and wisdom",
      "One of the scribes of the Quran",
      "Renowned for his bravery in battles"
    ]
  },
  {
    id: 5,
    name: "Khadijah bint Khuwaylid",
    title: "Mother of the Believers",
    biography: `Khadijah was the first wife of Prophet Muhammad (PBUH) and the first person to accept Islam. A successful businesswoman, she provided unwavering support to the Prophet during the early days of his mission. Her faith, loyalty, and love were crucial in the early spread of Islam.`,
    era: 'Meccan',
    keyAchievements: [
      "First person to accept Islam",
      "Supported the Prophet emotionally and financially",
      "Mother of Fatima, the Prophet's daughter",
      "Known for her wisdom and business acumen"
    ]
  },
  {
    id: 6,
    name: "Aisha bint Abu Bakr",
    title: "The Truthful",
    biography: `Aisha was one of the wives of Prophet Muhammad (PBUH) and daughter of Abu Bakr. She was known for her intelligence, memory, and contribution to Islamic jurisprudence. Aisha narrated numerous hadiths and was a key source of Islamic teachings after the Prophet's passing.`,
    era: 'Medinan',
    keyAchievements: [
      "Narrated over 2,000 hadiths",
      "Major source of information about the Prophet's private life",
      "Contributed significantly to Islamic jurisprudence",
      "Played a role in early Islamic politics"
    ]
  },
  {
    id: 7,
    name: "Bilal ibn Rabah",
    title: "The First Muezzin",
    biography: `Bilal was an Abyssinian slave who became one of the most trusted and loyal companions of Prophet Muhammad (PBUH). Known for his beautiful voice, Bilal was chosen as the first muezzin in Islam. His unwavering faith despite persecution is an inspiring example of steadfastness.`,
    era: 'Meccan and Medinan',
    keyAchievements: [
      "First muezzin in Islam",
      "Endured severe persecution for his faith",
      "Participated in major battles alongside the Prophet",
      "Symbol of racial equality in Islam"
    ]
  },
  {
    id: 8,
    name: "Salman Al-Farsi",
    title: "The Seeker of Truth",
    biography: `Salman was a Persian companion who had an extraordinary journey to Islam, having been a Zoroastrian and then a Christian before accepting Islam. He was known for his wisdom and played a crucial role in the Battle of the Trench.`,
    era: 'Medinan',
    keyAchievements: [
      "Suggested the digging of a trench to defend Medina",
      "Known for his knowledge of both Persian and Byzantine empires",
      "Appointed as the governor of Ctesiphon after its conquest",
      "Translated parts of the Quran into Persian"
    ]
  },
  {
    id: 9,
    name: "Hamza ibn Abdul-Muttalib",
    title: "The Lion of Allah",
    biography: `Hamza was the uncle of Prophet Muhammad (PBUH) and one of the greatest warriors of early Islam. His conversion was a significant boost to the early Muslim community. Hamza was martyred in the Battle of Uhud.`,
    era: 'Meccan and Medinan',
    keyAchievements: [
      "One of the early protectors of Muslims in Mecca",
      "Known for his bravery and fighting skills",
      "His conversion strengthened the Muslim community",
      "Martyred in the Battle of Uhud"
    ]
  },
  {
    id: 10,
    name: "Fatima bint Muhammad",
    title: "Az-Zahra (The Resplendent One)",
    biography: `Fatima was the youngest daughter of Prophet Muhammad (PBUH) and Khadijah. She was known for her piety, compassion, and closeness to her father. Fatima was married to Ali ibn Abi Talib and is the mother of Hasan and Husayn.`,
    era: 'Meccan and Medinan',
    keyAchievements: [
      "Known for her deep spirituality and devotion",
      "A role model for Muslim women",
      "Mother of Hasan and Husayn",
      "Narrated several hadiths"
    ]
  },
  {
    id: 11,
    name: "Abdullah ibn Masud",
    title: "The Scholar of the Quran",
    biography: `Abdullah ibn Masud was one of the earliest converts to Islam and a close companion of the Prophet. He was known for his knowledge of the Quran and was one of the few companions who could recite the entire Quran during the Prophet's lifetime.`,
    era: 'Meccan and Medinan',
    keyAchievements: [
      "One of the most knowledgeable companions in Quranic sciences",
      "Appointed as a teacher of Quran in Kufa",
      "Narrated numerous hadiths",
      "Contributed significantly to Islamic jurisprudence"
    ]
  },
  {
    id: 12,
    name: "Zaid ibn Thabit",
    title: "The Scribe of the Quran",
    biography: `Zaid ibn Thabit was one of the chief scribes of the Quranic revelations. He played a crucial role in the compilation of the Quran during the caliphates of Abu Bakr and Uthman. Zaid was known for his intelligence and trustworthiness.`,
    era: 'Medinan',
    keyAchievements: [
      "Chief scribe of the Quranic revelations",
      "Led the compilation of the Quran",
      "Learned multiple languages at the Prophet's request",
      "Contributed to the preservation of hadiths"
    ]
  },
  // Add more companions as needed...
]

const CompanionDetail = ({ companion }: { companion: Companion }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <h2 className="text-3xl font-bold mb-2">{companion.name}</h2>
    <p className="text-xl text-emerald-600 mb-4">{companion.title}</p>
    <p className="mb-4 text-lg">{companion.biography}</p>
    <div className="mb-4">
      <span className="font-semibold">Era: </span>{companion.era}
    </div>
    <div>
      <h3 className="font-semibold mb-2 text-xl">Key Achievements:</h3>
      <ul className="list-disc pl-5">
        {companion.keyAchievements.map((achievement, index) => (
          <li key={index} className="mb-1">{achievement}</li>
        ))}
      </ul>
    </div>
  </motion.div>
)

const CompanionTile = ({ companion, onClick }: { companion: Companion; onClick: () => void }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white p-6 rounded-lg shadow-md cursor-pointer border-2 border-emerald-600 relative overflow-hidden"
    onClick={onClick}
  >
    <div className="absolute top-0 left-0 w-full h-full bg-emerald-100 opacity-20 z-0"></div>
    <div className="relative z-10">
      <h3 className="text-xl font-semibold mb-2 text-emerald-800">{companion.name}</h3>
      <p className="text-emerald-600 mb-2 font-arabic">{companion.title}</p>
      <p className="text-sm text-emerald-700">{companion.era}</p>
    </div>
  </motion.div>
)

const CompanionJourney = () => {
  const [selectedCompanion, setSelectedCompanion] = useState<Companion | null>(null)

  return (
    <div className="bg-mint-100 p-6 rounded-lg">
      <h1 className="text-4xl font-bold text-emerald-800 mb-6 text-center font-arabic">Journey Through the Companions</h1>
      
      {selectedCompanion ? (
        <div>
          <CompanionDetail companion={selectedCompanion} />
          <button
            onClick={() => setSelectedCompanion(null)}
            className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded"
          >
            Back to All Companions
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {companions.map((companion) => (
            <CompanionTile
              key={companion.id}
              companion={companion}
              onClick={() => setSelectedCompanion(companion)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CompanionJourney