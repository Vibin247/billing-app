/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVendors = /* GraphQL */ `
  query GetVendors($id: ID!) {
    getVendors(id: $id) {
      id
      name
      phone
      createdAt
      updatedAt
    }
  }
`;
export const listVendors = /* GraphQL */ `
  query ListVendors(
    $filter: ModelVendorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
      id
      productModel
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productModel
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
