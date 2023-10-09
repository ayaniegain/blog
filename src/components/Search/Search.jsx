import React, { useState } from 'react'
import SearchResult from './SearchResult';

function Search({data}) {


    let [inputResults,setInputResults]=useState('')
    const [searchResults, setSearchResults] = useState([]);
   
    function filterfunc() {
        const results = data.filter(e =>
            e.title.toLowerCase().includes(inputResults)
           );
           setSearchResults(results);
    }
    React.useEffect(() => {
     if (inputResults)filterfunc()
      }, [inputResults]);

      console.log(searchResults.length);

  return (
    <>
  <form className="max-w-md mx-auto border my-6" >
  <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
    <div className="grid place-items-center h-full w-12 text-gray-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <input value={inputResults} onChange={(e)=>setInputResults(e.target.value)} className="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="text" id="search" placeholder="Search something.." /> 

  </div>
  <hr />
  <section>
{searchResults.map(e=><h2 key={e.id}><span>{e.title}</span></h2>)}
  </section>

</form>

<div>{
    searchResults.length<=0?
    <SearchResult searchResults={data}/> 
    :
    <SearchResult searchResults={searchResults}/> 
    }
</div>
    </>

  )
}

export default Search