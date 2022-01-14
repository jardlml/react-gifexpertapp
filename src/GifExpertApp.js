import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['Berserk','Slam Dunk','Shingeki'];
    const [categories, setCategories] = useState(['Dark Souls']);

    // const handleAdd = () =>{
    //     // setCategories( [...categories, 'Full Metal'] );
    //     setCategories( cats => [...cats, 'Full Metal'] );
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>

        </>
    );

}



