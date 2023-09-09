import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";

const Layout = ({ id }) => {

    return(
        <>
            <h1>WordCard</h1>
            <Link to={`/`}>Home</Link>
            <Link to={`/addWord`}>Add Word</Link>
            <main className="App">
                <Outlet />
            </main>
        </>
    );
}
export default Layout