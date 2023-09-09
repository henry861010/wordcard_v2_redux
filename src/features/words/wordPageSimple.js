import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectorWordByID } from "./wordsSlice.js"

const WordPageSimple = ({ word }) => {
    return(
        <>
            <article>
                {/*word name*/}
                <h2>{word.name}</h2>
            </article>
            <Link to={`/${word.name}`}>view more</Link>
            <Link to={`/edit/${word.name}`}>Edit Word</Link>
        </>
    );
}
export default WordPageSimple