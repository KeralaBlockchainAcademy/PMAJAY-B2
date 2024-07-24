import { useState } from "react";
import "./Card.css";
const Card = ({ h2Style }) => {
  
  const [likes, setLikes] = useState(0);

  const buttonStyle = {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "purple",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div className="card">
      <h2 className="card-title">Card Title</h2>
      <p className="card-content">This is some text inside the card.</p>
      <h2 style={h2Style}>Now Hapenning</h2>

      <h3>
        <button style={buttonStyle} onClick={() => setLikes(likes + 1)}>
          Likes: {likes}
        </button>
      </h3>
    </div>
  );
};

export default Card;
