import {API_URL, DEFAULT_HEADERS} from '../constants';
import APIService from '../../api-service';
import TokenGenerator from '../../token-generator';
import SignatureGenerator from '../../signature-generator';

let key, secret;
let apiService;

export const assign = (_key, _secret) => {
  key = _key;
  secret = _secret;
  apiService = new APIService(API_URL, DEFAULT_HEADERS);
};

export const makeRequest = async (url, params) => {
  const credentials = [key, secret];
  const tokenGenerator = new TokenGenerator(...credentials);
  const signatureGenerator = new SignatureGenerator(...credentials);

  const token = await tokenGenerator.getToken();
  const signature = signatureGenerator.generate(url, params, token.token);

  params['ApiSig']    = signature;
  params['AuthToken'] = token.token;

  return await apiService.get(url, params);
};
