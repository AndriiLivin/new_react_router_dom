import data from "./russian-fails.json";

export const fetchFactById = (id) => {
  const fact = data.find((f) => f.id === id);
  console.log(data, fact, id);
  return new Promise((res) => {
    setTimeout(() => res(fact), 1000);
  });
  
};

// создаем оболочку

export const fetchFactByIdRouted = ({ params: { factId } }) => {

  fetchFactById(factId);
};
