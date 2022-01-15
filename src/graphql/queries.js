/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVendors = /* GraphQL */ `
  query GetVendors($id: ID!) {
    getVendors(id: $id) {
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
        products {
          nextToken
        }
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
        vendor {
          id
          name
          phone
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        vendorsProductsId
      }
      nextToken
    }
  }
`;
