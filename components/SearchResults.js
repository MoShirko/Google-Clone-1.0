import React from "react";
import PaginationButtons from "./PaginationButtons";
import { useRef, useState, useEffect } from "react";

function SearchResults({ results, theme }) {

  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52"
    id={theme === true ? "dark" : "light"}
    >
      <p tabIndex="0" className="text-gray-600 text-md mb-5 mt-3" >
        About {results.searchInformation?.formattedTotalResults}
        results ({results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <a href={result.link} className="text-sml">
              {result.formattedUrl}
            </a>
            <a href={result.link}>
              <h2
                tabIndex="0"
                className="truncate text-xl text-blue-800 font-medium group-hover:underline"
              >
                {result.title}
              </h2>
            </a>
          </div>
          <p tabIndex="0" className="line-clamp-2">
            {result.snippet}
          </p>
        </div>
      ))}

      <PaginationButtons/>
    </div>
  );
}

export default SearchResults;
