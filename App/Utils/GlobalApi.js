import { request, gql } from "graphql-request";

const Master_URL =
  "https://api-ap-south-1.hygraph.com/v2/cluogldmj1efr07tb2uasenk7/master";

const getProductList = async () => {
  const query = gql`
    query getProductLists {
      productLists {
        createdAt
        description
        id
        name
        price
        image {
          url
        }
      }
    }
  `;
  const result = await request(Master_URL, query);
  return result;
};

const createProductList = async (data) => {
  const mutationQuery =
    gql`
    mutation createProductList {
      createProductList(
        data: {
          name: "` +
    data.name +
    `"
          price: "` +
    data.price +
    `"
          description: "` +
    data.description +
    `"
    contact: "` +
    data.contact +
    `"
           } }
          
          emailid: "` +
    data.emailid +
    `"
        }
      ) {
        id
      }
      
    }
  `;
  const result = await request(Master_URL, mutationQuery);
  return result;
};

const createSellerProduct = async (data) => {
  const mutationQuery =
    gql`
    mutation createSellerProduct {
      createSellerProduct(
        data: {
          productName: "` +
    data.name +
    `"
          price: "` +
    data.price +
    `"
          contact: "` +
    data.contact +
    `"
          description: "` +
    data.description +
    `"
          emailid: "` +
    data.emailid +
    `"
        }
      ) {
        id
      }
      publishManySellerProducts(to: PUBLISHED) {
        count
      }
    }
  `;
  const result = await request(Master_URL, mutationQuery);
  return result;
};

export default {
  getProductList,
  createProductList,
  createSellerProduct,
};
