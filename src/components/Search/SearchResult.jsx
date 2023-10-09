import React from 'react'

function SearchResult({searchResults}) {

    console.log(searchResults);
  return (
    <div className='flex justify-center'>
    {
        searchResults.map(e=><h2 key={e.id}>{e.title}</h2>)
    }
    </div>
  )
}

export default SearchResult