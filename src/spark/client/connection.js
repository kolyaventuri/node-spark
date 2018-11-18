import {API_URL, DEFAULT_HEADERS} from '../constants';
import APIService from '../../api-service';
import TokenGenerator from '../../token-generator';
import SignatureGenerator from '../../signature-generator';

let key, secret;
let apiService;
let tokenGenerator;
let credentials;
let signatureGenerator;

export const assign = (_key, _secret) => {
  key = _key;
  secret = _secret;
  apiService = new APIService(API_URL, DEFAULT_HEADERS);

  credentials = [key, secret];
  tokenGenerator = new TokenGenerator(...credentials);
  signatureGenerator = new SignatureGenerator(...credentials);
};

export const makeRequest = async (url, params) => {
  const token = await tokenGenerator.getToken();
  const signature = signatureGenerator.generate(url, params, token.token);

  params['ApiSig']    = signature;
  params['AuthToken'] = token.token;

  return await apiService.get(url, params);
};
