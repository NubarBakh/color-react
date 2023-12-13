import { useState } from "react";

import A from './context api/a'

import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Counter from "./context api/counter";


const router =createBrowserRouter(
    [
        {
            path:'/',
            element: < A/>
        },

        
    ]
)


export default function App (){
return<>
 
 <Counter>
 <RouterProvider router= {router}/>

 </Counter>



</>
}

