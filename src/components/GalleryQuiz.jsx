import React from "react";
import { useState } from "react";
import { galleryList } from "../galleryData";

function GalleryQuiz({ currentPage }) { // Destructure currentPage from props
    const [makeAndModel, setMakeAndModel] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const userAnswer = makeAndModel.toLowerCase();
        const correctAnswer = galleryList[currentPage].quizAnswer.toLowerCase();
        
        if (userAnswer == correctAnswer) {
            alert("Correct answer!");
            updateStreak(true)
            
        } else {
            alert("Wrong answer. Try again!");
            updateStreak(false)
        }
    };
    
    const [streak, setStreak] = useState(0)

    const updateStreak = (correct) => {
        if (correct===true){
            setStreak(streak+1);
            updateHighestStreak(streak+1);
        }
        else{
            setStreak(0);
        }
    }

    const [highestStreak, setHighestStreak] = useState(0);

    const updateHighestStreak = (streak) => {
        if (streak > highestStreak){
            setHighestStreak(streak);
        }
    }

    return (
    <div className="quiz-container">
        <h2>MiniQuiz: Name the Car in the Image</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={makeAndModel}
                onChange={(e) => setMakeAndModel(e.target.value)}
                placeholder="Enter make and model"
            />
            <button type="submit">Submit</button>
            <div className="streak-display">
                <p>Current Streak: <span className="streak-count">{streak}</span></p>
                <p>Highest Streak: <span className="highest-streak">{highestStreak}</span></p>
            </div>
        </form>
    </div>
);
}

export default GalleryQuiz;