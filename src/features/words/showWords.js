import WordPageSimple from "./wordPageSimple.js";

const ShowWords = ({ selectedWords }) => {
    return(
        <div className="ShowWords">{
            <ul>{
                selectedWords?.map((word,index) => (
                    <li key={`selectedWords${index}`}>
                        <WordPageSimple word={word} />
                    </li>
                ))
            }</ul>
        }</div>
    );
}
export default ShowWords