import { Navigate } from "react-router-dom";

function PrivateRoute(props){
    if(!props.token){
        return <Navigate to='/login' />
    }

    return props.children
}

export default PrivateRoute