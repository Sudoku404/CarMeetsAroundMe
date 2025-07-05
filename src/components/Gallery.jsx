import React from "react";
import { useState } from 'react';
import { galleryList } from "../galleryData";
import GalleryQuiz from "./GalleryQuiz"

const Gallery = () => {

    const [currentPage, setPage] = useState(0); 
   
    let gallery = galleryList[currentPage]

    const isLastPage = currentPage === galleryList.length-1;
    
    const isFirstPage = currentPage === 0;

    function handlePreviousClick() {
            galleryIsFlipped(false);
            setPage(currentPage - 1);
    }

    function handleNextClick() {
        galleryIsFlipped(false); 
        setPage(currentPage +1);
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
                <button className='previousButton' onClick={handlePreviousClick} disabled={isFirstPage} style={{opacity:isFirstPage ? 0.5 : 1 }}>Back</button>
                <h4>{currentPage+1}/{galleryList.length}</h4>
                <button className='nextButton' onClick={handleNextClick} disabled={isLastPage} style={{opacity:isLastPage ? 0.5 : 1 }}>Next</button>
            </div>
            <GalleryQuiz currentPage={currentPage}/>
        </div>        
    )
}

export default Gallery;