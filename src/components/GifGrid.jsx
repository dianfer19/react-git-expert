import React from 'react';
import {GridItem} from "./GridItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";
export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs( category );
    return (
        <>
            <h3>{category}</h3>
            {
                // isLoading?(<h1>Cargando</h1>):null
                isLoading&&(<h1>Cargando</h1>)
            }
            <div className='card-grid'>
                {
                    images.map((item) => (
                            <GridItem
                                key={item.id}
                                {...item}
                            />
                        )
                    )
                }
            </div>
        </>
    )
};

