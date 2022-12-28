import React from 'react'
import Header from 'parts/headers'
import Breadcrumb from "components/Breadcrumb"
import ProductDetails from "parts/Details/ProductDetails"
import Suggestion from "parts/Details/Suggestion"
import Sitemap from'parts/Sitemap'
import Footer from'parts/Footer'

export default function Details() {
  return (
      <>
      <Header theme="black" ></Header>
    <Breadcrumb list={[
        {url:"/", name:"Home"},
        {url:"/categories/91231", name:"Office Room"},
        {url:"/categories/91231/products/7888", name:"Details"}]}>
    </Breadcrumb>
    <ProductDetails></ProductDetails>
    <Suggestion></Suggestion>
    <Sitemap></Sitemap>
    <Footer></Footer>
    </>
  )
}
