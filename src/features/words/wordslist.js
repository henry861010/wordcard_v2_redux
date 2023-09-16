import { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./searchBar";
import ShowWords from "./showWords";
import WordsInfo from "./wordsInfo";

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
        <div className="Wordslist">
            <ShowWords selectedWords={selectedWords}/>
            <div className="Wordslist-right">
                <SearchBar setSelectedWords={setSelectedWords}/>
                <WordsInfo selectedWords={selectedWords}/>
            </div>
        </div>
    }
    else if(status==="ferror"){
        content = <h2 id="error">error!  {error}</h2>
    }
    return content
}
export default Wordslist