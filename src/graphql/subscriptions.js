/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVendors = /* GraphQL */ `
  subscription OnCreateVendors {
    onCreateVendors {
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
export const onUpdateVendors = /* GraphQL */ `
  subscription OnUpdateVendors {
    onUpdateVendors {
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
export const onDeleteVendors = /* GraphQL */ `
  subscription OnDeleteVendors {
    onDeleteVendors {
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
export const onCreateProducts = /* GraphQL */ `
  subscription OnCreateProducts {
    onCreateProducts {
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
export const onUpdateProducts = /* GraphQL */ `
  subscription OnUpdateProducts {
    onUpdateProducts {
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
export const onDeleteProducts = /* GraphQL */ `
  subscription OnDeleteProducts {
    onDeleteProducts {
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
