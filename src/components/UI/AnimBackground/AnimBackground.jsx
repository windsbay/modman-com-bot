import React, {useEffect, useState, useRef} from 'react';
import './AnimBackground.scss';
import { TweenLite } from 'gsap';


const AnimBackground = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [animateHeader, setAnimateHeader] = useState(true);
    const [points, setPoints] = useState([]);
    const [target, setTarget] = useState({ x: width / 2, y: height / 2 });
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);

    useEffect(() => {
        initCanvas();
        initAnimation();
        addListeners();
    }, []);

    const initCanvas = () => {
        const canvas = canvasRef.current;
        canvas.width = width;
        canvas.height = height;
        ctxRef.current = canvas.getContext('2d');

        createPoints();
    };

    const createPoints = () => {
        const newPoints = [];
        for (let x = 0; x < width; x = x + width / 20) {
            for (let y = 0; y < height; y = y + height / 20) {
                const px = x + Math.random() * width / 20;
                const py = y + Math.random() * height / 20;
                const p = { x: px, originX: px, y: py, originY: py, closest: [], circle: null };
                newPoints.push(p);
            }
        }
        setPoints(newPoints);

        points.forEach((p) => {
            p.circle = new Circle(p, 2 + Math.random() * 2, 'rgba(156,217,249,0.3)');
        });

        points.forEach((p) => {
            for (let i = 0; i < points.length; i++) {
                if (points[i]!== p) {
                    const distance = getDistance(p, points[i]);
                    if (distance < 200) {
                        p.closest.push(points[i]);
                    }
                }
            }
        });
    };

    const addListeners = () => {
        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    };

    const mouseMove = (e) => {
        const posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        const posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        setTarget({ x: posx, y: posy });
    };

    const scrollCheck = () => {
        if (document.body.scrollTop > height) setAnimateHeader(false);
        else setAnimateHeader(true);
    };

    const resize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        const canvas = canvasRef.current;
        canvas.width = width;
        canvas.height = height;
    };

    const initAnimation = () => {
        animate();
        points.forEach((p) => shiftPoint(p));
    };

    const animate = () => {
        if (animateHeader) {
            ctxRef.current.clearRect(0, 0, width, height);
            points.forEach((p) => {
                detectPointsInRange(p);
                drawLines(p);
                p.circle.draw();
            });
        }
        requestAnimationFrame(animate);
    };

    const shiftPoint = (p) => {
        TweenLite.to(p, 1 + 1 * Math.random(), {
            x: p.originX - 50 + Math.random() * 100,
            y: p.originY - 50 + Math.random() * 100,
            ease: 'Circ.easeInOut',
            onComplete: () => shiftPoint(p),
        });
    };

    const detectPointsInRange = (p) => {
        const distance = getDistance(target, p);
        if (distance < 4000) {
            p.active = 0.3;
            p.circle.active = 0.6;
        } else if (distance < 20000) {
            p.active = 0.1;
            p.circle.active = 0.3;
        } else if (distance < 40000) {
            p.active = 0.02;
            p.circle.active = 0.1;
        } else {
            p.active = 0;
            p.circle.active = 0;
        }
    };

    const drawLines = (p) => {
        if (!p.active) return;
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(p.x, p.y);
        p.closest.forEach((c) => {
            ctxRef.current.lineTo(c.x, c.y);
        });
        ctxRef.current.strokeStyle = `rgba(156, 217, 249, ${p.active})`;
        ctxRef.current.stroke();
    };

    const Circle = (pos, rad, color) => {
        const circle = {
            pos,
            radius: rad,
            color,
            active: 0,
            draw: () => {
                if (!circle.active) return;
                ctxRef.current.beginPath();
                ctxRef.current.arc(circle.pos.x, circle.pos.y, circle.radius, 0, 2 * Math.PI, false);
                ctxRef.current.fillStyle = `rgba(156, 217, 249, ${circle.active})`;
                ctxRef.current.fill();
            },
        };
        return circle;
    };

    const getDistance = (p1, p2) => Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: -1,
                backgroundColor: 'transparent',
            }}
        />
    );
};

export default AnimBackground;