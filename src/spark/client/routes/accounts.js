import {makeRequest} from '../connection';

export const get = async (id) => {
  if (!id) throw new Error('No account ID provided');

  const result = await makeRequest(`/accounts/${id}`, {});

  try {
    return result.D.Results[0];
  } catch(_) {
    return result || { success: false };
  }
};
