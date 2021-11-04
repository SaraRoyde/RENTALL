import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CContext = createContext([]);

export default function CategoriesContext(props) {
  //משתנה שמכיל את המידע אודות המוצרים ואת הפונקציה לעדכונו
  const [categories, setCategories] = useState({
    categories: [],
    setCategories: (category) => {
        setCategories({
        categories: category,
        setCategories: categories.setCategories,
      })
    }
  });
  
  //בעת טעינת הקובץ תוצא קריאת שרת לקבלת המידע אודות המוצרים 
  useEffect(() => {
    axios.get('/Data/Categories.json')
      .then((data) => {
        categories.setCategories(data.data);
      })
  }, []);

  return (
    <CContext.Provider value={categories}>
      {props.children}
    </CContext.Provider>
  );
}