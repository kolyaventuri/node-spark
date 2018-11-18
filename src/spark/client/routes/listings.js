import {makeRequest} from '../connection';
import transformParams from '../../../utils/transform-params';
import alphabetize from '../../../utils/alphabetize';

const setupParams = params => {
  params = transformParams(params);
  return alphabetize(params);
};

export const search = async (params = {}) => {
  params = setupParams(params);

  const result = await makeRequest('/listings', params);

  try {
    return result.D.Results;
  } catch(_) {
    return result || { success: false };
  }
};
