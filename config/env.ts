import dotenv from 'dotenv';
dotenv.config();

const APP_ENV = (process.env.APP_ENV || 'QAT').trim().toUpperCase();

console.log("Current APP_ENV:", APP_ENV);

let baseURL: string | undefined;

let user1: any;
let user2: any;
let user3: any;

if (APP_ENV === 'QAT') {

  baseURL = process.env.QAT_URL;

  user1 = {
    username: process.env.QAT_USERNAME_1,
    password: process.env.QAT_PASSWORD_1
  };

  user2 = {
    username: process.env.QAT_USERNAME_2,
    password: process.env.QAT_PASSWORD_2
  };

  user3 = {
    username: process.env.QAT_USERNAME_3,
    password: process.env.QAT_PASSWORD_3
  };

}

else if (APP_ENV === 'UAT') {

  baseURL = process.env.UAT_URL;

  user1 = {
    username: process.env.UAT_USERNAME_1,
    password: process.env.UAT_PASSWORD_1
  };

  user2 = {
    username: process.env.UAT_USERNAME_2,
    password: process.env.UAT_PASSWORD_2
  };

  user3 = {
    username: process.env.UAT_USERNAME_3,
    password: process.env.UAT_PASSWORD_3
  };

}

else if (APP_ENV === 'QAT_ADMIN') {
  baseURL = process.env.QAT_ADMIN_URL;

  user1 = {
    username: process.env.QAT_ADMIN_USERNAME,
    password: process.env.QAT_ADMIN_PASSWORD
  };
}

else if (APP_ENV === 'UAT_ADMIN') {
  baseURL = process.env.UAT_ADMIN_URL;

  user1 = {
    username: process.env.UAT_ADMIN_USERNAME,
    password: process.env.UAT_ADMIN_PASSWORD
  };
}

else {
  throw new Error(`Invalid APP_ENV value: ${APP_ENV}`);
}

export const env = {
  baseURL,
  user1,
  user2,
  user3
};