import { useSelector } from "react-redux";
import { selectorWords } from "./wordsSlice"

const WordsInfo = ({selectedWords}) => {
    const words = useSelector( selectorWords );
    return(
        <div className="WordsInfo">
            <p>Total Words: {words.length}</p>
            <p>Selected Words: {selectedWords.length}</p>
        </div>
    );
}
export default WordsInfo