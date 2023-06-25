// import { NavLink, useLoaderData } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import "./facts.css";
// import { ROUTES } from "./routes";

export const Facts = () => {
  // для получения данных нужно использовать специальный хук useLoaderData
  const facts = useLoaderData();
  console.log(facts);
  return (
    <article>
      <h1> Широко известные провалы русни в 2022 году.</h1>

      <ul className="fact-list">
        {facts.map((f) => (
          <li key={f.id} className="fact-item">
            <time>{f.data || "Cкоро будет."}</time>
            <h3>{f.name}</h3>
  
            <button
              className="read-more"
              type="button"
              // onClick={() => nav(f.id)}
            >
              .?.
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
};
