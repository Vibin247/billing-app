// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Vendors } = initSchema(schema);

export {
  Vendors
};