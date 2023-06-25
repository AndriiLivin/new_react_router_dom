import { useLoaderData } from "react-router-dom";

export const Fact = () => {
  const fact = useLoaderData();
  console.log(fact);
  return (
    <article>
      <h1>
        {fact.data}:{fact.name}
      </h1>
      <p>{fact.description}</p>
    </article>
  );
};
