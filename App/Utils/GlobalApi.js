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

export default {
  getProductList,
};
