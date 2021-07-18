import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/style.css";
import Navs from "./components/Navs";
import routes from "./utils/routes/index";
import firebase from "./config/firebase"
import AppContext from "./stores/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import Loading from "./components/Loading";
import PageNotFound from "./page/PageNotFound";




function App(){
    const [isLoagedIn, setisLoagedIn] = useState(false)
    const [isLoading, setisLoading] = useState(true)
    const [user, setuser] = useState({})

    useEffect(() => {
        setisLoading(true)
        firebase.auth().onAuthStateChanged(user => {
            if (user){
             setisLoagedIn(true)
             setuser(user)
             setisLoading(false)
            }else{
                setisLoagedIn(false)
                setuser({})
                setisLoading(false)

            }
 
        })
        
     }, [])

     if(isLoading) return <Loading />

    return(  
        <Router>
            <AppContext.Provider value={[isLoagedIn, user]}>

            <Navs />

            <Switch>
            
                {routes.map((route, index) =>
                
                
                {
                    if(route.protected === "guest"){
                        return(
                            <GuestRoute key={index} path={route.path} exact={route.exact} component={route.routeComponent}
                                 
                        />) 
                        

                    }
                    if(route.protected === "auth"){
                        return(
                            <AuthRoute key={index} path={route.path} exact={route.exact} component={route.routeComponent}
                                 
                        />) 

                    }

                    
                    return(
                    <Route key={index} path={route.path} exact={route.exact} component={route.routeComponent}
                         
                />)}
                
                
                  )}
            
            <Route 
             
            path="*"           
             >
                 <PageNotFound />
            </Route>
            </Switch>
            </AppContext.Provider>
        </Router> 
      
    )
}
export default App;


       
      
        