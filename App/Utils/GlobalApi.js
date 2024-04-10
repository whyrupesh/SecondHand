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
    `"productImage: {create: {uploadUrl: "` +
    data.productImage.uploadUrl +
    `"}}}
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

const getSellerProducts = async () => {
  const query = gql`
    query getSellerProducts {
      sellerProduct {
        productName
        price
        contact
        emailid
        description
        productImage {
          url
        }
      }
    }
  `;
  const result = await request(Master_URL, query);
  return result;
};

export default {
  getProductList,
  createSellerProduct,
  getSellerProducts,
};
