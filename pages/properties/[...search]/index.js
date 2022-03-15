import React from 'react'
import axios from 'axios'

const PropertySearchPage = ({ date }) => {
  return <div>PropertySearchPage {date}</div>
}

export default PropertySearchPage

export async function getServerSideProps(context) {
  console.log(context)
  const { params } = context

  const filterData = params.search

  return {
    props: {
      date: filterData,
    },
  }
}
