import { useSelector, useDispatch } from "react-redux";
import { selectorWords, deleteNewWord } from "./wordsSlice"
import { selectorType1, selectorType2 } from "../type/typeSlice"
import { Link, useParams } from "react-router-dom"

const WordPage = () => {
    const dispatch = useDispatch();
    const { Word } = useParams();
    const type1 = useSelector(selectorType1);
    const type2 = useSelector(selectorType2);
    const words = useSelector(selectorWords);
    const word = words.find((item) => (item.name === Word));

    return(
        <>
            <article>
                {/*word name*/}
                <h2>{word.name}</h2>

                {/*pronounce*/}
                <h3>pronounce:</h3>
                <p>{word.pronounce}</p>

                {/*type1*/}
                <ul>{
                    word.type1.map((item, index)=>{
                        if(item) return(
                            <li key={`wordPage-typ1${index}`}>
                                <p>{type1[index].type}</p>
                            </li>
                        )
                    })
                }</ul>

                {/*type2*/}
                <ul>{
                    word.type2.map((item, index)=>{
                        if(item) return(
                            <li key={`wordPage-typ2${index}`}>
                                <p>{type2[index].type}</p>
                            </li>
                        )
                    })
                }</ul>

                {/*description*/}
                <h3>descriptions</h3>
                <ol>{
                    word.descriptions.map((description,index)=>(
                        <li key={`${word.name}-description${index}`} style={{ border: '2px solid black' }}>
                            <h4>meaning:{description.meaning}</h4>
                            <p className="type">type: {description.type1}</p>
                            <p>example:</p>
                            <ol>{
                                description.examples.map((example, indexExample)=>(
                                    <li key={`${word.name}-description${index}-example${indexExample}`}>
                                        <p>{example}</p>
                                    </li>
                                ))
                            }</ol>
                        </li>
                    ))
                }</ol>
            </article>
            <Link to={`/edit/${word.name}`}>Edit Word</Link>
            <button type="button" onClick={()=>dispatch(deleteNewWord(word))}>delete</button>
        </>
    );
}
export default WordPage