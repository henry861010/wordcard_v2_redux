import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteNewWord } from "./wordsSlice"

const WordPageSimple = ({ word }) => {
    const dispatch = useDispatch();
    return(
        <>
            <article>
                {/*word name*/}
                <h2>{word.name}</h2>
            </article>
            <Link to={`/${word.name}`}>view more</Link>
            <Link to={`/edit/${word.name}`}>Edit Word</Link>
            <button type="button" onClick={()=>dispatch(deleteNewWord(word))}>delete</button>
        </>
    );
}
export default WordPageSimple