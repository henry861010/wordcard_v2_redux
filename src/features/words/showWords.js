import wordPageSimple from "./wordPageSimple.js";

const showWords = ({ selectedWords }) => {
    return(
        <>{
            <ul>{
                selectedWords.map((word) => (
                    <li>
                        <wordPageSimple id={word.id} />
                    </li>
                ))
            }</ul>
        }</>
    );
}
export default showWords