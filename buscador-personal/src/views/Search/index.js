import { useState } from "react";
import SearchBox from "./components/SearchBox";

import data from "../../data/users.json"
import "./style.css"

export default function Search(){
    
    const [isAtTop, setIsAtTop] = useState(false)
    const [results, setResults] = useState([])

    const handleCloseSearch=()=>{
        setIsAtTop(false)
        setResults([])
    }

    const handleSearchClick = (searchText) => {
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
            <SearchBox onSearch={handleSearchClick} onClose={handleCloseSearch}/>
        </div>
    )
}