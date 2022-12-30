import React from "react";
import Header from "parts/headers";
import Breadcrumb from "components/Breadcrumb";
import ShoppingCart from "parts/Cart/ShoppingCart";
import ShippingDetails from "parts/Cart/ShippingDetails";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import Document from "parts/Document";

export default function Cart() {
  return (
    <Document>
      <Header theme="black"></Header>
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      ></Breadcrumb>
      <section className="">
        <div className="container mx-auto px-2">
          <div className="flex -mx-4 flex-wrap"></div>
        </div>
      </section>
      <ShoppingCart></ShoppingCart>
      <ShippingDetails></ShippingDetails>
      <Sitemap></Sitemap>
      <Footer></Footer>
    </Document>
  );
}
