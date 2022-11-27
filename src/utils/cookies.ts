import Cookies from 'universal-cookie';
import AES from 'crypto-js/aes';
import encUtf8 from 'crypto-js/enc-utf8';
import { AUTH_TOKEN, AUTH_EXP } from 'constants/cookies';

const CRYPTO_KEY = 'THIS SHOULD BE IN AN ENV FILE';
const encrypData = (str: string) => AES.encrypt(str, CRYPTO_KEY).toString();
const decryptData = (str: string) =>
  str && AES.decrypt(str, CRYPTO_KEY).toString(encUtf8);

const cookies = new Cookies();

const setCookie = (key: string, value: string) => {
  cookies.set(key, encrypData(value), { path: '/' });
};
const getCookie = (key: string) => {
  return decryptData(cookies.get(key));
};
const removeCookie = (key: string) => {
  cookies.remove(key);
};

const customCookie = {
  set: setCookie,
  get: getCookie,
  remove: removeCookie,
};

const setAuthTokenCookie = (value: string) => {
  customCookie.set(AUTH_TOKEN, value);
};
const getAuthTokenCookie = () => {
  return customCookie.get(AUTH_TOKEN);
};
const removeAuthTokenCookie = () => {
  customCookie.remove(AUTH_TOKEN);
};

const setAuthExpCookie = (value: string) => {
  customCookie.set(AUTH_EXP, value);
};
const getAuthExpCookie = () => {
  return customCookie.get(AUTH_EXP);
};
const removeAuthExpCookie = () => {
  customCookie.remove(AUTH_EXP);
};

export {
  setAuthTokenCookie,
  getAuthTokenCookie,
  removeAuthTokenCookie,
  setAuthExpCookie,
  getAuthExpCookie,
  removeAuthExpCookie,
};
