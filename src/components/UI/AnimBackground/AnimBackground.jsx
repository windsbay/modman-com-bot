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
            const vx = Math.random() * 2 - 1;
            const vy = Math.random() * 2 - 1;
            const size = Math.random() * 5 + 1;
            const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;

            particles.push({ x, y, vx, vy, size, color });
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                const particle = particles[i];

                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > width) {
                    particle.vx *= -1;
                }
                if (particle.y < 0 || particle.y > height) {
                    particle.vy *= -1;
                }

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
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