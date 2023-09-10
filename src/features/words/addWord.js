import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorType1, selectorType2 } from "../type/typeSlice";
import { selectorWords, addNewWord } from "./wordsSlice";
import AddDescription from "./addDescription";
import { useNavigate } from "react-router-dom";

const AddWord = () => {
    const _type1 = useSelector(selectorType1);
    const _type2 = useSelector(selectorType2);
    const words = useSelector(selectorWords);

    const [ name, setName ] = useState("");
    const [ pronounce, setPronounce ] = useState("");
    const [ descriptions, setDescriptions ] = useState([]);
    const [ type1, setType1 ] = useState(_type1.map(item=>false));
    const [ type2, setType2 ] = useState(_type2.map(item=>false));
    const [ ifVaildName, setifVaildName ] = useState(true);
    const [ ifVaildType1, setifVaildType1 ] = useState(false);
    const [ ifVaildType2, setifVaildType2 ] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const emptyDescription = {
        meaning: "",
        type1: "",
        examples: []
    };
    const changeName = (e) => {
        setName(e.target.value)

        if( words.filter( item => item.name===e.target.value ).length ) setifVaildName(false);
        else setifVaildName(true);
    }

    const changeType1 = (e) => {
        const newType1 = type1.map((item, index) => (
            e.target.value===String(index)?e.target.checked:item
        ));
        setType1(newType1);

        if( !newType1.filter( item => item ).length ) setifVaildType1(false);
        else setifVaildType1(true);
    }

    const changeType2 = (e) => {
        const newType2 = type2.map((item, index) => (
            e.target.value===String(index)?e.target.checked:item
        ));
        setType2(newType2);

        if( !newType2.filter( item => item ).length ) setifVaildType2(false);
        else setifVaildType2(true);
    }

    const add = () => {
        if( ifVaildName && ifVaildType1 && ifVaildType2 ) {
            const editedWord = {
                name, 
                pronounce, 
                descriptions, 
                type1, 
                type2
            }
            dispatch(addNewWord(editedWord));
            navigate(`/`);
        }
    }

    return(
        <main>
            {/*add-name*/}
            <label htmlFor="addWord-name">name: </label>
            <input 
                id = "addWord-name"
                type = "text"
                value = {name}
                placeholder="what's the word?"
                onChange={changeName}
            /><p className="warning">{ifVaildName?"":"same word already!"}</p><br/>

            {/*add-pronounce*/}
            <label htmlFor="addWord-pronounce">pronounce:</label>
            <input 
                id = "addWord-pronounce"
                type = "text"
                value = {pronounce}
                placeholder="what's the pronounce of word?"
                onChange={(e)=>{setPronounce(e.target.value)}}
            /><br/>

            {/*add-descriptions*/}
            <section id = "addWord-descriptions" >
                <ul>{
                    descriptions.map((item, index)=>(
                        <li key={`addWord-description-${index}`} style={{ border: '2px solid black' }}>
                            <AddDescription id={index} descriptions={descriptions} setDescriptions={setDescriptions} />
                        </li>
                    ))
                }</ul>
                <button onClick={() => setDescriptions([...descriptions,emptyDescription])}>Add Description</button>
            </section>

            {/*add-type1*/}
            <p>type1: </p><p className="warning">{ifVaildType1?"":"at least one type!"}</p><br/>
            <ul id="addWord-type1">{
                _type1.map((item, index)=>(
                    <li key={`addWord-type1${index}`}>
                        <label htmlFor={`addWord-type1${item.type}`}>{item.type}</label>
                        <input
                            id={`addWord-type1${item.type}`}
                            type="checkbox"
                            value={index}
                            checked={type1[index]}
                            onClick={changeType1}
                            onChange={e => {}}
                        /> {/*can avoid onChange={e => {}}? https://www.google.com/search?q=The+label%27s+for+attribute+doesn%27t+match+any+element+id.+This+might+prevent+the+browser+from+correctly+autofilling+the+form+and+accessibility+tools+from+working+correctly.+To+fix+this+issue%2C+make+sure+the+label%27s+for+attribute+references+the+correct+id+of+a+form+field.&oq=The+label%27s+for+attribute+doesn%27t+match+any+element+id.+This+might+prevent+the+browser+from+correctly+autofilling+the+form+and+accessibility+tools+from+working+correctly.+To+fix+this+issue%2C+make+sure+the+label%27s+for+attribute+references+the+correct+id+of+a+form+field.&aqs=chrome..69i57.661j0j7&sourceid=chrome&ie=UTF-8 */}
                    </li>
                ))
            }</ul>

            {/*add-type2*/}
            <p>type2: </p><p className="warning">{ifVaildType2?"":"at least one type!"}</p><br/>
            <ul id="addWord-type2">{
                _type2.map((item, index)=>(
                    <li key={`addWord-type2${index}`}>
                        <label htmlFor={`addWord-type2${item.type}`}>{item.type}</label>
                        <input
                            id={`addWord-type2${item.type}`}
                            type="checkbox"
                            value={index}
                            checked={type2[index]}
                            onClick={changeType2}
                            onChange={e => {}}
                        /> {/*can avoid onChange={e => {}}? https://www.google.com/search?q=The+label%27s+for+attribute+doesn%27t+match+any+element+id.+This+might+prevent+the+browser+from+correctly+autofilling+the+form+and+accessibility+tools+from+working+correctly.+To+fix+this+issue%2C+make+sure+the+label%27s+for+attribute+references+the+correct+id+of+a+form+field.&oq=The+label%27s+for+attribute+doesn%27t+match+any+element+id.+This+might+prevent+the+browser+from+correctly+autofilling+the+form+and+accessibility+tools+from+working+correctly.+To+fix+this+issue%2C+make+sure+the+label%27s+for+attribute+references+the+correct+id+of+a+form+field.&aqs=chrome..69i57.661j0j7&sourceid=chrome&ie=UTF-8 */}
                    </li>
                ))
            }</ul>

            <button 
                id="addWord-button"
                onClick={add}
            >ADD WORD!</button>

        </main>
    );
}
export default AddWord