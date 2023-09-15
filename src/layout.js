import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";

const Layout = ({ id }) => {

    return(
        <>  <div style={{ border: '2px solid black' }}>
                <Link to={`/`}><h1>WordCard</h1></Link>
                <Link  className="addWord-link" to={`/addWord`}>
                    <img src="./add.png" alt="add" width="512" />
                </Link>
            </div>
            <main className="App">
                <Outlet />
            </main>
        </>
    );
}
export default Layout