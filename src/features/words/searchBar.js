import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectorType1, selectorType2 } from "../type/typeSlice";
import { selectorWords } from "./wordsSlice";


const SearchBar = ({ setSelectedWords }) => {
    const type1 = useSelector(selectorType1);
    const type2 = useSelector(selectorType2);
    const words = useSelector(selectorWords);

    const [ selectedType1 , setSelectedType1 ] = useState(type1.map(item=>true));
    const [ selectedType2 , setSelectedType2 ] = useState(type2.map(item=>true));
    const [ selectedsection , setSelectedsection ] = useState("");

    useEffect(() => {
        const newSelectedWords = words.map((item, index)=>{
            let ifSection = true;
            let ifType1 = false;
            let ifType2 = false;
            //section
            ifSection = item.name.includes(selectedsection);
            //type1
            selectedType1.map((ifType, index) => {
                if( ifType && item.type1[index] ) ifType1 = true;
            });
            //type2
            selectedType2.map((ifType, index) => {
                if( ifType && item.type2[index] ) ifType2 = true;
            });
            if( ifType1 && ifType2 &&  ifSection) return item;
            else return null
        }).filter(Boolean);
        setSelectedWords(newSelectedWords);
    },[selectedType1, selectedType2, selectedsection, words])

    const changeSelectedType1 = (e) => {
        const id = e.target.value;
        const checked = e.target.checked;
        const newSelectedType1 = selectedType1.map((item, index)=>(String(index)===id?checked:item));
        setSelectedType1(newSelectedType1);
    }

    const changeSelectedType2 = (e) => {
        const id = e.target.value;
        const checked = e.target.checked;
        const newSelectedType2 = selectedType2.map((item, index)=>(String(index)===id?checked:item));
        setSelectedType2(newSelectedType2);
    }

    const changeselectedsection = (e) => {
        const section = e.target.value;
        setSelectedsection(section);
    }

    return(
        <>
            <label htmlFor="searchWord">search word:</label>
            <input
                id='searchWord'
                type='text'
                role='searchbox'
                placeholder='Search Items'
                value={selectedsection}
                onChange={changeselectedsection}
            /><br/>

            <p>search type1:</p>
            <ul id="searchType1">{
                type1.map((item,index) => (
                    <li key={`type1${item.type}`}>
                        <label htmlFor={`searchBar${item.type}`}>{item.type}</label>
                        <input
                            id={`searchBar${item.type}`}
                            type="checkbox"
                            value={index}
                            checked={selectedType1[index]}
                            onClick={changeSelectedType1}
                            onChange={e => {}}
                        /> {/*can avoid onChange={e => {}}? https://www.google.com/search?q=The+label%27s+for+attribute+doesn%27t+match+any+element+id.+This+might+prevent+the+browser+from+correctly+autofilling+the+form+and+accessibility+tools+from+working+correctly.+To+fix+this+issue%2C+make+sure+the+label%27s+for+attribute+references+the+correct+id+of+a+form+field.&oq=The+label%27s+for+attribute+doesn%27t+match+any+element+id.+This+might+prevent+the+browser+from+correctly+autofilling+the+form+and+accessibility+tools+from+working+correctly.+To+fix+this+issue%2C+make+sure+the+label%27s+for+attribute+references+the+correct+id+of+a+form+field.&aqs=chrome..69i57.661j0j7&sourceid=chrome&ie=UTF-8 */}
                    </li>
                ))
            }</ul>

            <p>search type2:</p>
            <ul id="searchType2">{
                type2.map((item,index) => (
                    <li key={`type2${item.type}`}>
                        <label htmlFor={`searchBar${item.type}`}>{item.type}</label>
                        <input
                            id={`searchBar${item.type}`}
                            type="checkbox"
                            value={index}
                            checked={selectedType2[index]}
                            onClick={changeSelectedType2}
                            onChange={e => {}}
                        /> {/*can avoid onChange={e => {}}? https://www.google.com/search?q=The+label%27s+for+attribute+doesn%27t+match+any+element+id.+This+might+prevent+the+browser+from+correctly+autofilling+the+form+and+accessibility+tools+from+working+correctly.+To+fix+this+issue%2C+make+sure+the+label%27s+for+attribute+references+the+correct+id+of+a+form+field.&oq=The+label%27s+for+attribute+doesn%27t+match+any+element+id.+This+might+prevent+the+browser+from+correctly+autofilling+the+form+and+accessibility+tools+from+working+correctly.+To+fix+this+issue%2C+make+sure+the+label%27s+for+attribute+references+the+correct+id+of+a+form+field.&aqs=chrome..69i57.661j0j7&sourceid=chrome&ie=UTF-8 */}
                    </li>
                ))
            }</ul>
        </>
    ); 
}
export default SearchBar;