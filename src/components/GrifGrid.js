import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GrifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Loading...</p>}

            <div className="card-grid">
                {images.map((img, key) => (
                    <GifGridItem
                        key={key}
                        {...img}
                    />
                ))}
            </div>
        </>
    )
}
