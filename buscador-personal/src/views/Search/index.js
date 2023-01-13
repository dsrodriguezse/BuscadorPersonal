import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import axios from "axios";

import "./style.css"
import SearchResults from "./components/SearchResults";

export default function Search(){
    
    const [isAtTop, setIsAtTop] = useState(false)
    const [results, setResults] = useState([])
    const [data, setData] = useState([])

    useEffect(()=>{
      const getUsers = async () =>{
        try{
        /*const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()*/
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        setData(data)
        //setData(data)
        }catch(err){
            console.error(err)
        }
        
      }  
      
      getUsers().catch(null)
    },[])

    const handleCloseSearch=()=>{
        setIsAtTop(false)
        setResults([])
    }

    const handleSearchClick = (searchText) => {
        setIsAtTop(true)
        if(data?.length){            
            const searchTextMminus = searchText.toLowerCase()
            const filterData = data.filter((value)=>(
                    value.name.toLowerCase().includes(searchTextMminus)||
                    value.phone.toLowerCase().includes(searchTextMminus)||
                    value.email.toLowerCase().includes(searchTextMminus)||
                    value.username.toLowerCase().includes(searchTextMminus)
                )
            )
            setResults(filterData)
        }
    }

    console.log(results)
    return(
        <div className={`search ${isAtTop ? "search--top":"search--center"}`}>
            <SearchBox
            onSearch={handleSearchClick}
            onClose={handleCloseSearch}
            isSearching={isAtTop}
            />
            <SearchResults results={results} isSearching={isAtTop}></SearchResults>
        </div>
    )
}