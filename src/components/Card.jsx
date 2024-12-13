import Tilt from "react-parallax-tilt";
import "../styles/Card.css";

export default function Card({ imageUrl, text, id, handleClick }) {
  return (
    <Tilt
      scale={1.2}
      glareEnable={false}
      style={{ maxHeight: "250px", maxWidth: "250px" }}
      perspective={400}
      
    >
      <div className="card-container" id={id} onClick={handleClick}>
        <img src={imageUrl}></img>

        <span id="card-text">
          <strong> {text}</strong>
        </span>
      </div>
    </Tilt>
  );
}
