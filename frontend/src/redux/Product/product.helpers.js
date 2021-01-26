import { gql } from "@apollo/client";
import { apolloClient } from "../../services/apolloClient";

export const handleFetchProducts = () => {
  return new Promise((resolve, reject) => {
    apolloClient
      .query({
        query: gql`
          query fetchProducts {
            products {
              id
              name
              details
              imgUrl
              price
              qtty
            }
          }
        `,
      })
      .then((result) => {
        resolve(result.data.products);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleFetchProduct = ({ productID }) => {
  return new Promise((resolve, reject) => {
    apolloClient
      .query({
        query: gql`
          query FetchProduct($id: String!) {
            product(id: $id) {
              id
              name
              details
              imgUrl
              price
              qtty
            }
          }
        `,
        variables: {
          id: productID,
        },
      })
      .then((result) => {
        resolve(result.data.product);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
