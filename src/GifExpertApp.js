import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GrifGrid } from './components/GrifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2 className="animate__animated animate__shakeY">GifExpertApp</h2>
            
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map((category, key) => {
                        return <GrifGrid
                            key={category + key}
                            category={category}
                        />;
                    })
                }
            </ol>


        </>
    )
}
