import * as React from "react";
import { Admin, Resource, fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { listProduct } from "./ListProductAdmin";
import { listOrders } from "./listOrdersAdmin";
// import restDataProvider from "ra-data-rest-client";

// const httpClient = (url, options = {}) => {
//     if (!options.headers) {
//         options.headers = new Headers({ Accept: 'application/json' });
//     }
//     const { token } = JSON.parse(localStorage.getItem('auth'));
//     options.headers.set('Authorization', `Bearer ${token}`);
//     return fetchUtils.fetchJson(url, options);
// };
// const dataProvider = simpleRestProvider('http://localhost:3000', httpClient);
export default function AdminPage() {
  return (
    <>
      <Admin
        basename="/admin"
        dataProvider={simpleRestProvider("http://localhost:5000/admin")}
      >
        <Resource name="products" list={listProduct} />
        <Resource name="orders" list={listOrders} />
      </Admin>
    </>
  );
}
