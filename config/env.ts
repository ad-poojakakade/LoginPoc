import dotenv from 'dotenv';
dotenv.config();

const APP_ENV = (process.env.APP_ENV || 'QAT').trim().toUpperCase();

console.log("Current APP_ENV:", APP_ENV);

let baseURL: string | undefined;
let username: string | undefined;
let password: string | undefined;

if (APP_ENV === 'QAT') {
  baseURL = process.env.QAT_URL;
  username = process.env.QAT_USERNAME_1;
  password = process.env.QAT_PASSWORD_1;

  console.log("QAT URL:", baseURL);
}

else if (APP_ENV === 'UAT') {
  baseURL = process.env.UAT_URL;
  username = process.env.UAT_USERNAME_1;
  password = process.env.UAT_PASSWORD_1;

  console.log("UAT URL:", baseURL);
}

else if (APP_ENV === 'QAT_ADMIN') {
  baseURL = process.env.QAT_ADMIN_URL;
  username = process.env.QAT_ADMIN_USERNAME;
  password = process.env.QAT_ADMIN_PASSWORD;
}

else if (APP_ENV === 'UAT_ADMIN') {
  baseURL = process.env.UAT_ADMIN_URL;
  username = process.env.UAT_ADMIN_USERNAME;
  password = process.env.UAT_ADMIN_PASSWORD;
}

else {
  throw new Error(`Invalid APP_ENV value: ${APP_ENV}`);
}

export const env = {
  baseURL,
  username,
  password
};