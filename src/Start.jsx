import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../src/Start.css';

const Start = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const animateLogo = () => {
      const logoSpans = document.querySelectorAll('.logo');

      logoSpans.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add('active');
        }, (idx + 1) * 400);
      });

      setTimeout(() => {
        logoSpans.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx + 1) * 50);
        });
      }, 2000);

      setTimeout(() => {
        const intro = document.querySelector('.intro');
        if (intro) {
          intro.classList.add('fade-out'); // Trigger fade-out effect
        }

        // Navigate to home after the fade-out is complete
        setTimeout(() => {
          navigate('/home');
        }, 1000); // Wait for the fade-out to finish (1s)
      }, 2300);
    };

    animateLogo();
  }, [navigate]);

  return (
    <div className="wrapping">
      <div className="intro">
        <h1 className="logo-header">
          <span className="logo">[ Hack</span> <span className="logo">Knight ]</span>
        </h1>
      </div>
    </div>
  );
};

export default Start;
