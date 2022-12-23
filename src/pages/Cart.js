import React from 'react'
import Header from 'parts/headers'
import Breadcrumb from "components/Breadcrumb"
import ShoppingCart from "parts/Cart/ShoppingCart"
import ShippingDetails from "parts/Cart/ShippingDetails"
import Sitemap from "parts/Sitemap"
import Footer from'parts/Footer'

export default function Cart() {
  return (
      <>
      <Header theme="black" ></Header>
    <Breadcrumb list={[
        {url:"/", name:"Home"},
        {url:"/cart", name:"Shopping Cart"}]}>
    </Breadcrumb>
    <section class="md:py-16">
      <div class="container mx-auto px-4">
        <div class="flex -mx-4 flex-wrap">

        </div>
        </div>
        </section>
    <ShoppingCart></ShoppingCart>
    <ShippingDetails></ShippingDetails>
      <Sitemap></Sitemap>
      <Footer></Footer>
      </>
  )
}
