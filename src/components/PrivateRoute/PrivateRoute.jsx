import css from './PrivateRoute.module.css'
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import Loader from '../Loader/Loader';
export default function PrivateRoute({component: Component, redirectTo = "/login"}) {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);

    return (
        isRefreshing ?
            <div className={css.loaderWrapper}><Loader /></div> :
            (isLoggedIn ? Component : <Navigate to={redirectTo} />)

        
    )
}