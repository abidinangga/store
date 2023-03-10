import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Breadcrumb({list}) {
  return (
    <section className="bg-gray-100 py-4 px-4">
      <div className="container  mx-auto">
        <ul className="breadcrumb inline-flex">
            {
                list?.map?.((item,index)=>{
                    const arias = index === list?.legth ? {"aria-label": "current-page"} : {}
                    return(
                        <li  key={item.url} >
                          <Link to={item.url} {...arias}>{item.name}</Link> 
                        </li>
                    )
                })
            }
        </ul>
      </div>
    </section>
  )
}


Breadcrumb.Prototype ={
    list: PropTypes.array.isRequired,
}