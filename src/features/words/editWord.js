import { useState } from "react";
import { useSelector, useDispatch } from "redux";
import { selectorType1, selectorType2 } from "../type/typeSlice";
import { selectorWords, addWord } from "./wordsSlice";
import { useParams } from 'react-router-dom';
import addDescription from "./addDescription";

const editWord = () => {
    const _type1 = useSelector(selectorType1);
    const _type2 = useSelector(selectorType2);
    const words = useSelector(selectorWords);
    const { Word } = useParams();
    const word = words.find((element) => element.name === Word)

    const [ name, setName ] = useState(word?.name);
    const [ pronounce, setPronounce ] = useState(word?.pronounce);
    const [ descriptions, setDescriptions ] = useState(word?.descriptions);
    const [ type1, setType1 ] = useState(word?.type1);
    const [ type2, setType2 ] = useState(word?.type2);

    const dispatch = useDispatch();

    const emptyDescription = {
        meaning: "",
        type1: "",
        examples: []
    };

    const changeType1 = (e) => {
        const newType1 = type1.map((item, index) => (
            e.target.value===index?e.target.checked:item
        ));
        setType1(newType1);
    }

    const changeType2 = (e) => {
        const newType2 = type2.map((item, index) => (
            e.target.value===index?e.target.checked:item
        ));
        setType2(newType2);
    }

    const edit = () => {
        const id = words.length;
        /* can add the check procedure!!! */
        dispatch(addWord(name, pronounce, descriptions, type1, type2));
    }

    return(
        <main>
            {/*add-name*/}
            <label htmlFor="addWord-name">name:</label>
            <input 
                id = "addWord-name"
                type = "text"
                value = {name}
                placeholder="what's the word?"
                onChange={(e)=>{setName(e.target.value)}}
            />

            {/*add-pronounce*/}
            <label htmlFor="addWord-pronounce">name:</label>
            <input 
                id = "addWord-pronounce"
                type = "text"
                value = {pronounce}
                placeholder="what's the pronounce of word?"
                onChange={(e)=>{setPronounce(e.target.value)}}
            />

            {/*add-descriptions*/}
            <section id = "addWord-descriptions">
                <ul>{
                    descriptions.map(()=>(
                        <li>
                            <addDescription id={index} descriptions={descriptions} setDescriptions={setDescriptions} />
                        </li>
                    ))
                }</ul>
                <button onClick={() => setDescriptions([...descriptions,emptyDescription])}>Add Description</button>
            </section>

            {/*add-type1*/}
            <label htmlFor="addWord-type1">type1:</label>
            <lu id="addWord-type1">{
                _type1.map((item, index)=>(
                    <li key={`addWord-type1${index}`}>
                        <label htmlFor={`addWord-type1${item.type}`}>{item.type}</label>
                        <input
                            id={`addWord-type1${item.type}`}
                            type="checkbox"
                            value={index}
                            checked={type1[index]}
                            onClick={changeType1}
                        />
                    </li>
                ))
            }</lu>

            {/*add-type2*/}
            <label htmlFor="addWord-type2">type2:</label>
            <lu id="addWord-type2">{
                _type2.map((item, index)=>(
                    <li key={`addWord-type2${index}`}>
                        <label htmlFor={`addWord-type2${item.type}`}>{item.type}</label>
                        <input
                            id={`addWord-type2${item.type}`}
                            type="checkbox"
                            value={item}
                            checked={type1[index]}
                            onClick={changeType2}
                        />
                    </li>
                ))
            }</lu>

            <button 
                id="editWord-button"
                onClick={edit}
            >EDIT WORD!</button>

        </main>
    );
}
export default editWord