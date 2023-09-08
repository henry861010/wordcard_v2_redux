const addDescription = ({ id, descriptions, setDescriptions }) => {
    const meaning = descriptions[id].meaning;
    const type1 = descriptions[id].type1;
    const examples = descriptions[id].examples;

    return(
        <>
            {/*add meaning*/}
            <label htmlFor="addDescription-meaning">name:</label>
            <textarea
                id = "addDescription-meaning"
                placeholder="what's the meaning of word?"
                value={meaning}
                onChange={(e) => setDescriptions(descriptions.map((item, index)=>(
                    index===id?{...item,meaning: e.target.value}:item
                )))}
            />

            {/*add type1*/}
            <label htmlFor="addDescription-type1">name:</label>
            <select 
                id="addDescription-type1" 
                value={type1} 
                onChange={(e) => setDescriptions(descriptions.map((item, index)=>(
                    index===id?{...item,type1: e.target.value}:item
                )))}
            >
                <option value="n.">n.</option>
                <option value="v.">v.</option>
                <option value="adj.">adj.</option>
                <option value="adv.">adv.</option>
            </select>
            {/*[select+option]: https://react.dev/reference/react-dom/components/select */}

            {/*add example*/}
            <ul>{
                examples.map((item, index)=>(
                    <li>
                        <label htmlFor={`addDescription-example${index}`}>example{index}:</label>
                        <textarea
                            id = {`addDescription-example${index}`}
                            placeholder="what's the example of word?"
                            value={item}
                            onChange={(e) => {
                                const newExamples = examples.map((example, exampleIndex)=>(
                                    index===exampleIndex?e.target.value:example
                                ))
                                const newDescriptionOfID = {...descriptions[id], examples: newExamples}
                                setDescriptions(descriptions.map((description, descriptionIndex)=>(
                                    descriptionIndex===id?newDescriptionOfID:description
                                )))
                            }}
                        />
                    </li>
                ))
            }</ul>
            <button onClick={() => {
                const newExamples = [...examples,""]
                const newDescriptionOfID = {...descriptions[id], examples: newExamples}
                setDescriptions(descriptions.map((item, index)=>(
                    index===id?newDescriptionOfID:item
                )))
            }}>Add example</button>
        </>
    );
}
export default addDescription;