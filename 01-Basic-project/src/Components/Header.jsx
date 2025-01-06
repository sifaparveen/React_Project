import CoreImg from "../assets/react-core-concepts.png";

const dynamicWord = ["Fundamentals", "Core", "Main"];

function random(Max) {
  return Math.floor(Math.random() * (Max + 1));
}

export default function Header() {
  return (
    <header>
      <img src={CoreImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {dynamicWord[random(2)]} React concepts you will need for almost any app
        you are going to build!
      </p>
    </header>
  );
}
