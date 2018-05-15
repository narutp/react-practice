import React from 'react'
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import Home from '../Pages/Home'

const app = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
        </BrowserRouter>
    )
}

export default app