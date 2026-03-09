const userKeyMap = {};

const keys = [
  process.env.GEMINI_KEY_1, process.env.GEMINI_KEY_2, process.env.GEMINI_KEY_3,
  process.env.GEMINI_KEY_4, process.env.GEMINI_KEY_5, process.env.GEMINI_KEY_6,
  process.env.GEMINI_KEY_7, process.env.GEMINI_KEY_8, process.env.GEMINI_KEY_9, process.env.GEMINI_KEY_10
];

function getKeyForUser(userId) {
  if (!userKeyMap[userId]) {
    const index = Math.floor(Math.random() * keys.length);
    userKeyMap[userId] = index;
  }
  return keys[userKeyMap[userId]];
}

module.exports = { getKeyForUser };