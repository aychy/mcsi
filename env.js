const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '.env.local') });

console.log('HADITH_API_KEY in env.js:', process.env.HADITH_API_KEY);