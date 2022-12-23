import React from 'react'
import Header from 'parts/headers'
import Breadcrumb from "components/Breadcrumb"
// import ProductDetails from "parts/Details/ProductDetails"
// import Suggestion from "parts/Details/Suggestion"
import Sitemap from "parts/Sitemap"
import Footer from'parts/Footer'

export default function Details() {
  return (
      <>
      <Header theme="black" ></Header>
    <Breadcrumb list={[
        {url:"/", name:"Home"},
        {url:"/cart", name:"Shopping Cart"}]}>
    </Breadcrumb>
    {/* <ProductDetails></ProductDetails>
    <Suggestion></Suggestion> */}
      <Sitemap></Sitemap>
      <Footer></Footer>
      </>
  )
}
