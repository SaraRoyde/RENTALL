import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const IContext = createContext([]);

export default function ItemsContext(props) {
  //משתנה שמכיל את המידע אודות המוצרים ואת הפונקציה לעדכונו
  const [items, setItems] = useState({
    items: [],
    setItems: (item) => {
        setItems({
        items: item,
        setItems: items.setItems,
      })
    }
  });
  
  //בעת טעינת הקובץ תוצא קריאת שרת לקבלת המידע אודות המוצרים 
  useEffect(() => {
    axios.get('/Data/Items.json')
      .then((data) => {
        items.setItems(data.data);
      })
  }, []);

  return (
    <IContext.Provider value={items}>
      {props.children}
    </IContext.Provider>
  );
}