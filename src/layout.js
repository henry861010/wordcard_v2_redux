import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";

const Layout = ({ id }) => {

    return(
        <div>  
            <div className="Layout-top">
                <Link to={`/`}><h1>WordCard</h1></Link>
                <Link  className="addWord-link" to={`/addWord`}>
                    <img src={require("./image/add.png")} alt="add" width="512" />
                </Link>
            </div>
            <main className="App">
                <Outlet />
            </main>
        </div>
    );
}
export default Layout