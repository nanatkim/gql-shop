import { gql } from "@apollo/client";
import { apolloClient } from "../../services/apolloClient";

export const handleFetchOrders = () => {
  return new Promise((resolve, reject) => {
    apolloClient
      .query({
        query: gql`
          query fetchOrders {
            orders {
              id
              customer
              total
              products {
                id
                product {
                  name
                }
                price
                qtty
              }
            }
          }
        `,
      })
      .then((result) => {
        resolve(result.data.orders);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleCreateOrder = (order) => {
  return new Promise((resolve, reject) => {
    const products = [];
    order.cartItems.map((cartItem) => {
      return products.push({
        productID: cartItem.id,
        qtty: cartItem.cartQtty,
      });
    });

    apolloClient
      .mutate({
        mutation: gql`
          mutation($data: CreateOrderInput!) {
            createOrder(data: $data) {
              id
              customer
              products {
                id
                price
                qtty
              }
              total
            }
          }
        `,
        variables: {
          data: {
            customer: order.customer,
            creditCard: order.creditCard,
            products,
          },
        },
      })
      .then((result) => {
        resolve(result);
      });
  });
};
