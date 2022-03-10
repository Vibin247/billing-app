/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVendors = /* GraphQL */ `
  mutation CreateVendors(
    $input: CreateVendorsInput!
    $condition: ModelVendorsConditionInput
  ) {
    createVendors(input: $input, condition: $condition) {
      id
      name
      phone
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateVendors = /* GraphQL */ `
  mutation UpdateVendors(
    $input: UpdateVendorsInput!
    $condition: ModelVendorsConditionInput
  ) {
    updateVendors(input: $input, condition: $condition) {
      id
      name
      phone
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteVendors = /* GraphQL */ `
  mutation DeleteVendors(
    $input: DeleteVendorsInput!
    $condition: ModelVendorsConditionInput
  ) {
    deleteVendors(input: $input, condition: $condition) {
      id
      name
      phone
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
