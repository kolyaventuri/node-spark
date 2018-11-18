import {makeRequest} from '../connection';
import transformParams from '../../../utils/transform-params';

const setupParams = params => {
  params = transformParams(params);
  return alphabetize(params);
};

export const search = async (params) => {
  params = setupParams(params);

  const result = await makeRequest('/listings');

  try {
    return result.D.Results;
  } catch(_) {
    return result || { success: false };
  }
};
