import { useRouteError } from "react-router";
import { Link } from "react-router";
const Error = ()=>{
    const err= useRouteError();
    console.log(err);
return(
<h2>{err.error.message} <Link to="/">Click here</Link> to goto Home page</h2>);
}

export default Error;