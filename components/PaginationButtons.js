import React from 'react';
import { useRouter} from "next/router";
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

function PaginationButtons() {
    const router = useRouter();

    const startIndex = Number(router.query.start) || 0;
  return (
    <div className='flex justify-between max-w-lg text-blue-700 mb-10'>
        {startIndex >= 10 && 
        <Link  href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
        <div className='flex flex-grow flex-col items-center cursor pointer hover:underline'>
            <ChevronLeftIcon className='h-5'/>
            <p tabIndex="0">Previous</p>
        </div>
        </Link>}

        <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className='flex flex-grow flex-col items-center cursor pointer hover:underline'>
        <ChevronRightIcon tabIndex="0" className='h-5'/>
        <p tabIndex="0">Next</p>
            </div>
        </Link>

    </div>
  )
}

export default PaginationButtons