require('dotenv').config();

const requiredEnv = ['DATABASE_URL', 'PORT'];

requiredEnv.forEach(envVar => {
  if (!process.env[envVar]) {
    console.error(`❌ CRITICAL ERROR: Environment variable ${envVar} is missing!`);
    console.error('The server cannot start without these configurations.');
    process.exit(1); 
  }
});

module.exports = {
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: parseInt(process.env.PORT, 10),
  NODE_ENV: process.env.NODE_ENV || 'development'
};
