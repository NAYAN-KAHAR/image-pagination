
import React, { Suspense } from "react";
import './style.css';


const Paggination = React.lazy(() => import ('./components/Paggination/paggination'))
const App = () => {
  return(
    <>
    <Suspense fallback={<h2 style={{textAlign:'center'}}>Data Loading...</h2>}>
     <Paggination/>
    </Suspense>
    </>
  )
};

export default App;