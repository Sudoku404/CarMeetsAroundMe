import React from "react";
import { useState } from 'react';
import { galleryList } from "../galleryData";

const Gallery = () => {

    const [currentPage, setPage] = useState(0); 
    let gallery = galleryList[currentPage]
    function handlePreviousClick() {
        if(currentPage == 0){
            galleryIsFlipped(false); 
            setPage(galleryList.length-1);
        }
        else{
            setPage(currentPage - 1);
        }
    }
    
    function handleNextClick() {
        galleryIsFlipped(false); 
        if(currentPage == galleryList.length-1){
            setPage(0);
        }
        else{
            setPage(currentPage +1);
        }
    }
    
    const [isFlipped, galleryIsFlipped] = useState(false);
    
    function handleGalleryClick() {
        galleryIsFlipped(!isFlipped);
    }

    return(
        <div className = 'Gallery'>
            <div className={`gallery-card ${isFlipped ? 'flipped' : ''}`} onClick={handleGalleryClick}>
                <div className="gallery-card-inner">
                    <div className="gallery-card-front">
                        <img src={gallery.url} alt={gallery.name} />
                    </div>
                    <div className="gallery-card-back">
                        <h4>Article Name: {gallery.name}</h4>
                        <h3>Artist Name: {gallery.artist}</h3>
                        <h3>{gallery.description}</h3>
                    </div>
                   
                </div>
            </div>
            <div className = 'GalleryNavButtons'>
                <button onClick={handlePreviousClick}>Back</button>
                <h4>{currentPage+1}/{galleryList.length}</h4>
                <button onClick={handleNextClick}>Next</button>
            </div>
        </div>
        
       
    )
}

export default Gallery;