import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorType1, selectorType2 } from "../type/typeSlice";
import { selectorWords, editWord } from "./wordsSlice";
import { useParams } from 'react-router-dom';
import AddDescription from "./addDescription";
import { useNavigate } from "react-router-dom";

const EditWord = () => {
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

    const navigate = useNavigate();

    const emptyDescription = {
        meaning: "",
        type1: "",
        examples: []
    };

    const changeType1 = (e) => {
        const newType1 = type1.map((item, index) => (
            e.target.value===String(index)?e.target.checked:item
        ));
        setType1(newType1);
    }

    const changeType2 = (e) => {
        const newType2 = type2.map((item, index) => (
            e.target.value===String(index)?e.target.checked:item
        ));
        setType2(newType2);
    }

    const edit = () => {
        const id = words.length;
        /* can add the check procedure!!! */
        dispatch(editWord(word.id, name, pronounce, descriptions, type1, type2));
        navigate(`/${Word}`);
    }

    return(
        <main>
            {/*add-name*/}
            <label htmlFor="editWord-name">name:</label>
            <input 
                id = "editWord-name"
                type = "text"
                value = {name}
                placeholder="what's the word?"
                onChange={(e)=>{setName(e.target.value)}}
            />

            {/*add-pronounce*/}
            <label htmlFor="editWord-pronounce">pronounce:</label>
            <input 
                id = "editWord-pronounce"
                type = "text"
                value = {pronounce}
                placeholder="what's the pronounce of word?"
                onChange={(e)=>{setPronounce(e.target.value)}}
            />

            {/*add-descriptions*/}
            <section id = "editWord-descriptions">
                <ul>{
                    descriptions.map((item, index)=>(
                        <li key={`editWord-description-${index}`} style={{ border: '2px solid black' }}>
                            <AddDescription id={index} descriptions={descriptions} setDescriptions={setDescriptions} />
                        </li>
                    ))
                }</ul>
                <button onClick={() => setDescriptions([...descriptions,emptyDescription])}>Add Description</button>
            </section>

            {/*add-type1*/}
            <p>type1:</p><br/>
            <ul id="editWord-type1">{
                _type1.map((item, index)=>(
                    <li key={`editWord-type1${index}`}>
                        <label htmlFor={`editWord-type1${item.type}`}>{item.type}</label>
                        <input
                            id={`editWord-type1${item.type}`}
                            type="checkbox"
                            value={index}
                            checked={type1[index]}
                            onClick={changeType1}
                            onChange={e => {}}
                        />
                    </li>
                ))
            }</ul>

            {/*add-type2*/}
            <p>type2:</p><br/>
            <ul id="editWord-type2">{
                _type2.map((item, index)=>(
                    <li key={`editWord-type2${index}`}>
                        <label htmlFor={`editWord-type2${item.type}`}>{item.type}</label>
                        <input
                            id={`editWord-type2${item.type}`}
                            type="checkbox"
                            value={index}
                            checked={type2[index]}
                            onClick={changeType2}
                            onChange={e => {}}
                        />
                    </li>
                ))
            }</ul>

            <button 
                id="editWord-button"
                onClick={edit}
            >EDIT WORD!</button>

        </main>
    );
}
export default EditWord