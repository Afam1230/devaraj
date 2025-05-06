
import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

const StarryBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let animationFrameId;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);
    };
    
    window.addEventListener("resize", resizeCanvas);
    
    // Initial setup
    const init = () => {
      resizeCanvas();
      createStars();
      animate();
    };
    
    // Create stars
    const createStars = () => {
      stars = [];
      const starCount = Math.min((canvas.width * canvas.height) / 1000, 300);
      
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 1.5 + 0.5;
        const brightness = Math.random() * 0.8 + 0.2;
        const speed = Math.random() * 0.05 + 0.01;
        const twinkleSpeed = Math.random() * 0.05 + 0.01;
        
        stars.push({
          x,
          y,
          size,
          brightness,
          originalBrightness: brightness,
          speed,
          twinkleSpeed,
          twinkleDirection: Math.random() > 0.5 ? 1 : -1,
          hue: Math.random() > 0.7 ? Math.random() * 60 + 240 : Math.random() * 60 + 180 // Occasional purplish stars
        });
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "rgba(13, 10, 30, 1)");
      gradient.addColorStop(1, "rgba(40, 20, 70, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update stars
      stars.forEach(star => {
        // Twinkle effect
        star.brightness += star.twinkleSpeed * star.twinkleDirection;
        
        if (star.brightness > star.originalBrightness + 0.5) {
          star.twinkleDirection = -1;
        } else if (star.brightness < star.originalBrightness - 0.5) {
          star.twinkleDirection = 1;
        }
        
        // Subtle vertical movement
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
        }
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        
        // Colorize some stars
        ctx.fillStyle = `hsla(${star.hue}, 80%, 70%, ${star.brightness})`;
        ctx.fill();
        
        // Add glow effect
        if (star.size > 1) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${star.hue}, 80%, 70%, ${star.brightness * 0.2})`;
          ctx.fill();
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    init();
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <Box 
      as="canvas" 
      ref={canvasRef} 
      position="fixed" 
      top={0} 
      left={0} 
      width="100%" 
      height="100%" 
      zIndex={0}
    />
  );
};

export default StarryBackground;
