/ tests/config/env.ts
export const ENV = {
  QAT: 'https://portal.qat.anddone.com/#/login',
  UAT: 'https://portal.uat.anddone.com/#/login'
};
export const CURRENT_ENV = process.env.TEST_ENV || ENV.QAT;