// import "./facts.css";

export const Facts = ({ facts, nav }) => {
  return (
    <article>
      <h1> Широко известные провалы русни в 2022 году.</h1>

      <ul className="fact-list">
        {facts.map((f) => (
          <li key={f.id} className="fact-item">
            <time>{f.data ?? "Cкоро будет."}</time>
            <h4>{f.name}</h4>
            <button
              className="read-more"
              type="button"
              onClick={() => nav(f.id)}
            >
              .?.
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
};
