import { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./searchBar";
import ShowWords from "./showWords";

import { selectorStatus, selectorError } from "./wordsSlice";

const Wordslist = () => {
    const [ selectedWords , setSelectedWords ] = useState([]);
    const status = useSelector(selectorStatus);
    const error = useSelector(selectorError);

    let content;
    if(status==="pending"){
        content =<h2 id="loading">loading</h2>
    }
    else if(status==="fulfilled"){
        content =
        <>
            <h2 id="show">show</h2>
            <SearchBar setSelectedWords={setSelectedWords}/>
            <ShowWords selectedWords={selectedWords}/>
        </>
    }
    else if(status==="ferror"){
        content = <h2 id="error">error!  {error}</h2>
    }
    return content
}
export default Wordslist