import React, {useContext} from 'react';
import Category from './Category';
import {CContext} from '../Global/CategoriesContext';


export default function Categories () {

    const categoriesList = useContext(CContext).categories;

    return(
        categoriesList? categoriesList.map((c)=>(<Category category={c}/>)) : <div></div>
    )
}