import React from 'react'
import Head from "next/head";
import Header from "../components/Header";
import Response from "../Response"
import {useRouter} from "next/router";
import SearchResults from '@/components/SearchResults';

function Search({results}) {
  const router = useRouter();
  return (
    <div>
        <Head>
            <title>{router.query.term} - Google Search</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        {/* Search results */}
      <SearchResults results={results}/>
    </div>
  )
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData 
  ? Response
  : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
  .then((response)=> response.json());
  console.log(data);

  return {
    props: {
      results: data,
    },
  }
}