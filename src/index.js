import { InstantiationError } from './errors';

export default class SparkPlatform {
  constructor() {
    throw new InstantiationError('You cannot instantiate the SparkPlatform directly. Please use `new SparkPlatform.client()` instead.');
  }
}
