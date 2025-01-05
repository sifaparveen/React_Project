const dynamicWord = ["Fundamentals", "Core", "Main"];

import CoreImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

function random(Max) {
  return Math.floor(Math.random() * (Max + 1));
}

function Header() {
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

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Core Concept</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept
              image={CORE_CONCEPTS[3].image}
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
