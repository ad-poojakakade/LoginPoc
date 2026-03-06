import dotenv from 'dotenv';

dotenv.config();

const APP_ENV = process.env.APP_ENV || 'QAT';

export const env = {
  appEnv: APP_ENV,

  baseURL:
    APP_ENV === 'QAT'
      ? process.env.QAT_URL
      : process.env.UAT_URL,

  username:
    APP_ENV === 'QAT'
      ? process.env.QAT_USERNAME_1
      : process.env.UAT_USERNAME_1,

  password:
    APP_ENV === 'QAT'
      ? process.env.QAT_PASSWORD_1
      : process.env.UAT_PASSWORD_1
};