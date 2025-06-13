import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import './uiploshadka.css';
import Preloader from '../../components/Preloader/Preloader'; // Импортируй свой компонент Preloader

export default function Uiploshadka() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadScene = async () => {
      const response = await fetch("https://prod.spline.design/q1UWbLW6CaAWNCse/scene.splinecode");
      if (response.ok) {
        setIsLoaded(true);
      }
    };
    loadScene();
  }, []);
  
  return (
    <div className="uiploshadka__wrapper">
      {/* Пока сцена не загрузится, показываем прелоадер */}
      {isLoaded ? (
        <Spline scene="https://prod.spline.design/q1UWbLW6CaAWNCse/scene.splinecode" />
      ) : (
        <Preloader /> // Показать твой preloader, пока сцена не загрузится
      )}
    <div className="uiploshadka__text"></div>
    </div>
  );
}

