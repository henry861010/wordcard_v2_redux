import { useSelector } from "redux";
import { selectorWordByID } from "./wordsSlice.js"
import { Link } from "react-router-dom"

const wordPage = ({ id }) => {
    const word = useSelector(selectorWordByID(id));

    return(
        <>
            <article>
                {/*word name*/}
                <h2>{word.name}</h2>

                {/*pronounce*/}
                <h3>pronounce:</h3>
                <p>{word.pronounce}</p>

                {/*description*/}
                <h3>descriptions</h3>
                <ol>{
                    word.descriptions.map((description)=>(
                        <li key={`${word.name}-${description.meaning}`}>
                            <h4>{description.meaning}</h4>
                            <p className="type">{description.type1}</p>
                            <ul>{
                                description.examples.map((example)=>(
                                    <li>
                                        <p>{example}</p>
                                    </li>
                                ))
                            }</ul>
                        </li>
                    ))
                }</ol>
            </article>
            <link to={`/edit/${word.name}`}>Edit Word</link>
        </>
    );
}
export default wordPage