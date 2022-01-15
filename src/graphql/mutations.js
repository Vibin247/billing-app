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
      products {
        items {
          id
          productModel
          createdAt
          updatedAt
          vendorsProductsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
      products {
        items {
          id
          productModel
          createdAt
          updatedAt
          vendorsProductsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
      products {
        items {
          id
          productModel
          createdAt
          updatedAt
          vendorsProductsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createProducts = /* GraphQL */ `
  mutation CreateProducts(
    $input: CreateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    createProducts(input: $input, condition: $condition) {
      id
      productModel
      vendor {
        id
        name
        phone
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      vendorsProductsId
    }
  }
`;
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts(
    $input: UpdateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    updateProducts(input: $input, condition: $condition) {
      id
      productModel
      vendor {
        id
        name
        phone
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      vendorsProductsId
    }
  }
`;
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts(
    $input: DeleteProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    deleteProducts(input: $input, condition: $condition) {
      id
      productModel
      vendor {
        id
        name
        phone
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      vendorsProductsId
    }
  }
`;
