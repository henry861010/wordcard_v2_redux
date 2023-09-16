import { useSelector, useDispatch } from "react-redux";
import { selectorWords, deleteNewWord, selectorStatus } from "./wordsSlice"
import { selectorType1, selectorType2 } from "../type/typeSlice"
import { Link, useParams, useNavigate } from "react-router-dom"

const WordPage = () => {
    const status = useSelector(selectorStatus);
    const type1 = useSelector(selectorType1);
    const type2 = useSelector(selectorType2);
    const words = useSelector(selectorWords);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { Word } = useParams();

    if( status==="pending" ) return <h2>loading</h2>
    if( status==="error" ) return <h2>error</h2>
    else{
        const word = words.find((item) => (item.name === Word));
        const wordIndex = words.findIndex((item) => (item.name === Word));

        const prviousWordName = words[(words.length+wordIndex-1)%words.length].name;
        const nextWordName = words[(wordIndex+1)%words.length].name;

        return(
            <>
                <article className="WordPage">
                    {/*word name*/}
                    <h2>{word.name}</h2>

                    {/*pronounce*/}
                    <section className="WordPage-pronounce">
                        <h3>pronounce:</h3>
                        <p>{word.pronounce}</p>
                    </section>

                    {/*type*/}
                    <section className="WordPage-type">
                        <h3>type:</h3>
                        <div className="WordPage-type-list">
                            <ul>{
                                word.type1.map((item, index)=>{
                                    if(item) return(
                                        <li key={`wordPage-typ1${index}`} className="type">
                                            {type1[index].type}
                                        </li>
                                    )
                                })
                            }</ul>

                            <ul>{
                                word.type2.map((item, index)=>{
                                    if(item) return(
                                        <li key={`wordPage-typ2${index}`} className="type">
                                            {type2[index].type}
                                        </li>
                                    )
                                })
                            }</ul>
                        </div>
                    </section>

                    {/*descriptions*/}
                    <section className="descriptions">
                        <h3>descriptions:</h3>
                        <ol className="descriptions-list">{
                            word.descriptions.map((description,index)=>(
                                <li className="description" key={`${word.name}-description${index}`} >
                                    <div className="descriptions-description-meaning"><h4>meaning: </h4><span>{description.meaning}</span></div>
                                    <div className="descriptions-description-type"><h4>type: </h4><span className="type">{description.type1}</span></div>
                                    <div className="descriptions-description-example">
                                        <h4>example:</h4>
                                        <ol>{
                                            description.examples.map((example, indexExample)=>(
                                                <li key={`${word.name}-description${index}-example${indexExample}`}>
                                                    {example}
                                                </li>
                                            ))
                                        }</ol>
                                    </div>
                                </li>
                            ))
                        }</ol>
                    </section>
                    
                    <section className="WordPage-button">
                        <Link className="edit-Word" to={`/edit/${word.name}`}>Edit Word</Link>
                        <button className="delete-Word" type="button" onClick={()=>{
                            dispatch(deleteNewWord(word))
                            navigate("/");
                        }}>delete</button>
                    </section>
                </article>

                <Link className="to-left" to={`/${prviousWordName}`}>
                    <img src={require("../../image/left.png")} alt="to-left" width="512" />
                </Link>

                <Link className="to-right" to={`/${nextWordName}`}>
                    <img src={require("../../image/right.png")} alt="to-right" width="512" />
                </Link>
            </>
        );
    }
}
export default WordPage

