import Spline from "@splinetool/react-spline";
import './uiploshadka.css';

export default function Uiploshadka() {
  return (
    <div className="uiploshadka__wrapper">
      <Spline scene="https://prod.spline.design/q1UWbLW6CaAWNCse/scene.splinecode" />
      <div className="uiploshadka__text"></div>
    </div>
  );
}
