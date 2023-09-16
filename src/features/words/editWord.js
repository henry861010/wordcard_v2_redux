import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorType1, selectorType2 } from "../type/typeSlice";
import { selectorWords, editNewWord } from "./wordsSlice";
import { useParams } from 'react-router-dom';
import AddDescription from "./addDescription";
import { useNavigate } from "react-router-dom";

const EditWord = () => {
    const _type1 = useSelector(selectorType1);
    const _type2 = useSelector(selectorType2);
    const words = useSelector(selectorWords);
    const { Word } = useParams();
    const word = words.find((element) => element.name === Word)

    const [ pronounce, setPronounce ] = useState(word?.pronounce);
    const [ descriptions, setDescriptions ] = useState(word?.descriptions);
    const [ type1, setType1 ] = useState(word?.type1);
    const [ type2, setType2 ] = useState(word?.type2);
    const [ ifVaildType1, setifVaildType1 ] = useState(true);
    const [ ifVaildType2, setifVaildType2 ] = useState(true);

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

    const edit = () => {
        if( ifVaildType1 && ifVaildType2 ) {
            const editedWord = {
                id: word.id,
                name: word.name, 
                pronounce, 
                descriptions, 
                type1, 
                type2
            }
            dispatch(editNewWord(editedWord));
            navigate(`/${Word}`);
        }
    }

    return(
        <article className="WordPage">
            {/*add-name*/}
            <h2>{word.name}</h2>

            {/*add-pronounce*/}
            <section className="AddWord-pronounce">
                <h3>pronounce:</h3>
                <input 
                    type = "text"
                    value = {pronounce}
                    placeholder="what's the pronounce of word?"
                    onChange={(e)=>{setPronounce(e.target.value)}}
                />
            </section>

            <section className="AddWord-types">
                {/*add-type1*/}
                <div className="AddWord-type">
                    <span className="AddWord-type-warning"><h3>type1: </h3><p className="warning">{ifVaildType1?"":"at least one type!"}</p></span>
                    <ul>{
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
                </div>

                {/*add-type2*/}
                <div className="AddWord-type">
                    <span className="AddWord-type-warning"><h3>type2: </h3><p className="warning">{ifVaildType2?"":"at least one type!"}</p></span>
                    <ul>{
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
                </div>
            </section>

            {/*add-descriptions*/}
            <section className="descriptions">
                <h3>description: </h3>
                <ol className="descriptions-list">{
                    descriptions.map((item, index)=>(
                        <li key={`editWord-description-${index}`} style={{ border: '2px solid black' }}>
                            <AddDescription id={index} descriptions={descriptions} setDescriptions={setDescriptions} />
                        </li>
                    ))
                }</ol>
                <button onClick={() => setDescriptions([...descriptions,emptyDescription])}>Add Description</button>
            </section>

            <button 
                className="AddWord-submit"
                onClick={edit}
                disabled={!ifVaildType1||!ifVaildType2?true:false}
            >EDIT WORD!</button>

        </article>
    );
}
export default EditWord