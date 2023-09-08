import { useState } from "react";
import { useSelector } from "redux";
import searchBar from "./searchBar";
import showWords from "./showWords";

import { selectorStatus } from "./wordsSlice";

const wordslist = ( ) => {
    const [ selectedWords , setSelectedWords ] = useState();
    const status = useSelector(selectorStatus);

    if(status==="pending") return(
        <main>
            <h2 id="loading">loading</h2>
        </main>
    )
    else if(status==="fullfilled") return(
        <main>
            <searchBar setSelectedWords={setSelectedWords}/>
            <showWords selectedWords={selectedWords}/>
        </main>
    )
    else if(status==="error") return(
        <main>
            <h2 id="loading">error!</h2>
        </main>
    )
}
export default wordslist