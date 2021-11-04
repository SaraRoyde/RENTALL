import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Categories from '../Search/Categories';
import Item from '../Search/Item';
import SearchForm from '../Search/SearchForm';
import CategoriesContext from './CategoriesContext';
export default function Nav() {

    return(
        <Router>
            {/* <Link to={'/'}>בית</Link> */}
            <Switch>
                <Route path={'/'} exact>
                    <CategoriesContext>
                        <SearchForm/>
                    {/* </CategoriesContext>
                    
                    <CategoriesContext> */}
                        <Categories/>
                    </CategoriesContext>
                    <Item/>
                    {/* <categories */}
                </Route>
                <Route path='/'>

                </Route>
            </Switch>
        </Router>
    )
}