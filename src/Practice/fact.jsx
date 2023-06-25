export const Fact1 = ({ fact }) => {
  return (
    <article>
      <h1>
        {fact.data}:{fact.name}
      </h1>
      <p>{fact.description}</p>
    </article>
  );
};
