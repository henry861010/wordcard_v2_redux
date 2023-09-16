import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteNewWord } from "./wordsSlice"

const WordPageSimple = ({ word }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return(
        <div className="WordPageSimple">
            {/*word name*/}
            <h2>{word.name}</h2>
            <section>
                <Link className="WordPageSimple-button" to={`/${word.name}`}>view more</Link>
                <Link className="WordPageSimple-button" to={`/edit/${word.name}`}>Edit Word</Link>
                <button className="WordPageSimple-button" type="button" onClick={()=>{
                    dispatch(deleteNewWord(word))
                    navigate("/")
                }}>delete</button>
            </section>
        </div>
    );
}
export default WordPageSimple