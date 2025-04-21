//DISCLAIMER: This entire thing might as well be chatgpt'd but the comments are me making an honest effort to understand it lmao

import React, { useEffect, useRef } from 'react';

function drawSineWave(c, width, height, phase) {
    c.clearRect(0, 0, width, height); // Clear canvas

    c.beginPath();
    c.strokeStyle = 'white';       //set line color
    c.lineWidth = 5;               //set line thickness
    c.moveTo(0, height / 20);

    const amplitude = 50;
    const frequency = 0.05;

    for (let x = 0; x < width; x++) {
        const y = height / 2 + Math.sin(x * frequency + phase) * amplitude;
        c.lineTo(x, y);
    }

    //draw
    c.stroke();
}


function SineWave() { 

    //refrences used to update values upon each frame (?)
    const canvasRef = useRef(null);         
    const animationRef = useRef(null);
    const phaseRef = useRef(0);


    useEffect(() => {                           //allows "side effects" to be performed on components. in this case updating the sin wave
        const canvas = canvasRef.current;       //holds canvas DOM 
        const c = canvas.getContext('2d');      //set up enviorment for 2d drawing instead of 3d

        canvas.width = window.innerWidth-230;
        canvas.height = window.innerHeight-900;

        const animate = () => {

            canvas.width = window.innerWidth-230;
            phaseRef.current += 0.05; // Adjust for speed
            drawSineWave(c, canvas.width, canvas.height, phaseRef.current);
            animationRef.current = requestAnimationFrame(animate);
        };

        animate(); // Start animation

        // Cleanup on unmount
        return () => cancelAnimationFrame(animationRef.current);
    }, []);

    return (
        <div className='sinWave'>
            {/*return a refrence to the canvas element- this actually displays the goods*/}
            <canvas ref={canvasRef} /> 
        </div>
    );
}

export default SineWave;
