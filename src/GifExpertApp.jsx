import React, {useState} from 'react';
import {AddCategory, GifGrid} from "./components/";

export const GifExpertApp = (props) => {
    const [categories, setCategories] = useState([]);
    const onAddCategory = (newCategory) => {
        // console.log(newCategory)
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={(valor) => onAddCategory(valor)}/>
            {
                categories.map(item => (
                        <GifGrid key={item} category={item}/>
                    )
                )
            }
        </>
    )
};