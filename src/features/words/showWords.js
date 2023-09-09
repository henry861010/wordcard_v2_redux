import WordPageSimple from "./wordPageSimple.js";

const ShowWords = ({ selectedWords }) => {
    return(
        <>{
            <ul>{
                selectedWords?.map((word,index) => (
                    <li key={`selectedWords${index}`}>
                        <WordPageSimple word={word} />
                    </li>
                ))
            }</ul>
        }</>
    );
}
export default ShowWords