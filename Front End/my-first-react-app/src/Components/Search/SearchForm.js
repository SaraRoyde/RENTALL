import { TextField, Button } from '@mui/material';
import React, { useEffect, useState, useContext } from 'react';
import '../../Style/Search/btns.css';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import './Tst';
import PopChooseCategory from './Popups/PopChooseCategory';
import {CContext} from '../Global/CategoriesContext';
import PopChooseSubCategory from './Popups/PopChooseSubCategory';
import PopChooseDistance from './Popups/PopChooseDistance';
import PopChoosePrice from './Popups/PopChoosePrice';

export default function SearchForm(){
    const categories = useContext(CContext).categories;

    const [freeTextSearch, setFreeTextSearch] = useState('');
    const [categoryToSearch, setCategoryToSearch] = useState(0);//{
        // categoryToSearch: {},
        // setCategoryToSearch: (categoryKey) => {
        //     setCategoryToSearch({
        //         categoryToSearch: categories.filter(cat => cat.key == categoryKey)[0],
        //         setCategoryToSearch: categoryToSearch.setCategoryToSearch,
        //     });
        // }
    //}
    //);
    useEffect(()=>{
        //alert(categoryToSearch + "😎")
        setSubCategoryToSearch(0);
    },[categoryToSearch])    
    


    // const getCategoryKey = (categoryKey) => {
    //     alert('hello world');
    //     console.log(categories.filter(cat => cat.key == categoryKey)[0]);
    //     return categories.filter(cat => cat.key == 3)[0];
    // }

    const getCategoryByKey = (key) => {
        return categories.filter(cat => cat.key == key)[0]
    }

    const getSubCategoryByKey = (categoryKey, subCategoryKey) => {
        //console.log(categories?.filter(cat => cat.key == categoryKey)[0]?.subCategories?.filter(cat2 => cat2.key == subCategoryKey))
        return getCategoryByKey(categoryKey)?.subCategories?.filter(cat => cat.key == subCategoryKey)[0];
    }

    const [subCategoryToSearch, setSubCategoryToSearch] = useState(0);
    const [distanceToSearch, setDistanceToSearch] = useState({distance:-1, way:''});
    // const [wayToSearch, setWayToSearch] = useState(0);

    useEffect(()=>{
        alert(distanceToSearch + "😎")
        console.log(distanceToSearch);
    },[distanceToSearch])

    const [priceToSearch, setPriceToSearch] = useState({time:"",price:""});

    //should popups be in new component??
    const populateCategories = () => {
        
    }
    
    return (
        <div>        
            <div>
                <TextField id="freeTextSearchInput" variant="filled" color="warning" name="freeTextSearchInput" label="ספר לנו מה אתה מחפש" type="text"  className="button-no-values" />
                {/* <input type="text"  label="ספר לנו מה אתה מחפש" className="button-no-values" /> */}
                {/* <Button variant="contained" id="categorySearchInput" name="categorySearchInput" className="button-no-values">קטגוריה</Button> */}
                {/* <Button variant="contained" id="subCategorySearchInput" name="subCategorySearchInput" className="button-no-values">תחום</Button> */}
                {/* <Button variant="contained" id="distanceSearchInput" name="distanceSearchInput" className="button-no-values">מרחק</Button> */}
                <Button variant="contained" id="priceSearchInput" name="priceSearchInput" className="button-no-values">מחיר</Button>
                <Button onClick={populateCategories}>שמור</Button>
                <PopChooseCategory setCategoryToSearch={setCategoryToSearch}/>
                <PopChooseSubCategory setSubCategoryToSearch={setSubCategoryToSearch} categoryKey={categoryToSearch}/>
                <PopChooseDistance setDistanceToSearch={setDistanceToSearch}/>
                <PopChoosePrice setPriceToSearch={setPriceToSearch}/>
            </div>
            <div dir="rtl">{categoryToSearch != 0? getCategoryByKey(categoryToSearch)?.category + " " : ''} 
             {subCategoryToSearch !=0 && getSubCategoryByKey(categoryToSearch, subCategoryToSearch) ? getSubCategoryByKey(categoryToSearch, subCategoryToSearch)?.name +" " : '' } 
             {distanceToSearch && distanceToSearch.distance >0 ?" מרחק " + distanceToSearch.distance + " דקות " + (distanceToSearch.way == 1? 'הליכה' : 'נסיעה') + " " : '--'} </div>
        </div>
    )
}