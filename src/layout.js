import { Link } from "react-router-dom";

const layout = ({ id }) => {

    return(
        <>
            <h1>WordCard</h1>
            <Link to={`/`}>Home</Link>
            <Link to={`/addWord`}>Add Word</Link>
        </>
    );
}
export default layout