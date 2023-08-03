import React from 'react'
import Head from "next/head";
import Header from "../components/Header";

function Search() {
  return (
    <div>
        <Head>
            <title>Search Results</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        {/* Search results */}
    </div>
  )
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  
  return {
    props: {},
  }
}