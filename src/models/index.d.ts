import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type VendorsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Vendors {
  readonly id: string;
  readonly name: string;
  readonly phone?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Vendors, VendorsMetaData>);
  static copyOf(source: Vendors, mutator: (draft: MutableModel<Vendors, VendorsMetaData>) => MutableModel<Vendors, VendorsMetaData> | void): Vendors;
}