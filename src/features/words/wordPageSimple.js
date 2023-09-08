import { Link } from "react-router-dom";
import { useSelector } from "redux";
import { selectorWordByID } from "./wordsSlice.js"

const wordPageSimple = ({ id }) => {
    const word = useSelector(selectorWordByID(id));

    return(
        <>
            <article>
                {/*word name*/}
                <h2>{word.name}</h2>
            </article>
            <Link to={`/${word.name}`}>view more</Link>
            <link to={`/edit/${word.name}`}>Edit Word</link>
        </>
    );
}
export default wordPageSimple