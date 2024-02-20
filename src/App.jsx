import {Suspense} from "react";
import {Cryptocurrencies,Homepage,CryptoDetails,News,Navbar} from "./components";
import {Route, Switch,Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import { fetchData} from "./services/crypto-api";
import loader from "./assets/loader.gif";
import './App.css'
function App() {
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchData());
    },[dispatch]);

    return (
        <Suspense fallback={
            <div className="load"><img src={loader} alt='loader'/></div>}>
            <div className="flex">
                <nav>
                    <div>
                        <Navbar/>
                    </div>
                </nav>
                <main>
                    <Switch>
                        <Route path='/' exact>
                            <Redirect to='/homepage'/>
                        </Route>
                        <Route path='/homepage' exact>
                            <Homepage/>
                        </Route>
                        <Route path='/cryptocurrencies' exact>
                            <Cryptocurrencies/>
                        </Route>
                        <Route path='/cryptocurrencies/:coinId' exact>
                            <CryptoDetails/>
                        </Route>
                        <Route path='/news' exact>
                            <News/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Suspense>
    );
}
export default App;
