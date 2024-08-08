import React, {useEffect, useState} from 'react';

const AnimBackground = () => {
    const [particles, setParticles] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = width;
        canvas.height = height;

        const particleCount = 100;
        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            const size = Math.random() * 10 + 1;
            const color = 'rgba(255, 255, 255, 0.5)';
            const opacity = Math.random() * 0.5 + 0.5;

            particles.push({ x, y, size, color, opacity });
        }

        function animate() {
            ctx.fillStyle = 'black';
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                const particle = particles[i];

                particle.opacity = Math.random() * 0.5 + 0.5;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
                ctx.filter = 'blur(2px)';
                ctx.fill();
            }

            requestAnimationFrame(animate);
        }

        animate();
    }, [width, height]);

    return (
        <canvas id="canvas" />
    );
};

export default AnimBackground;