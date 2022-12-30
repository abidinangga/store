import React from "react";
import Header from "parts/headers";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import PageErrorMessage from "parts/PageErrorMessage";
import Document from "parts/Document";
export default function Congratulation() {
  return (
    <Document>
      <Header theme="black"></Header>
      <PageErrorMessage></PageErrorMessage>
      <Sitemap></Sitemap>
      <Footer></Footer>
    </Document>
  );
}
