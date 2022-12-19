import React, {useEffect, useState, createContext } from "react";
import axios from "axios";

const Data = () => {
  const contextData = createContext();
  
  const [categories, setCategories] = useState([]);


useEffect(()=>{
  axios.get('https://dummyjson.com/products/categories')
  .then(res => {
    setCategories(res.data);
    console.log(res.data);
  })
  .catch((error)=> console.log(error));
  
},[])

  

  
  return <div className="flex">
    <contextData.Provider value={categories}>
    
    </contextData.Provider>
  </div>
};

export default Data;
