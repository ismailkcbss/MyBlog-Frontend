import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import * as storage from './storage.helper';
import { useSelector } from 'react-redux';


// Giriş yapmamış kullanıcıların tespiti için : Orneğin admin kontrolleri için olabilir.
const ProtectedPageRoute = ({ component: Component, ...rest }) => {
    const user = storage.GetCookie('userdt');
    return (
        <Route {...rest}
            render={(props) => user ? (
                <Component />
            ) : (
                <Redirect to='/Login' />
            )}
        />
    )
}


// Giriş Yapılı kullanıcı tespiti için : Orneğin login sayfasına dönmemeli
const ProtectedReturnPage = ({ component: Component, ...rest }) => {
    const userData = useSelector((state) => state.user);
    return (
        <Route
            {...rest}
            render={(props) => userData.isAuth ? (
                <Redirect to='/' />
            ) : (
                <Component />
            )}
        />
    )
}


export { ProtectedPageRoute, ProtectedReturnPage }