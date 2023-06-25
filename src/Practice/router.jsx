import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./RoutedApp/layout";
import { Facts } from "./RoutedApp/facts";
import { fetchAllFacts } from "./fetchAllFacts";
// import { fetchFactByIdRouted, fetchFactById } from "./fetchFactById";
// import { fetchFactById} from "./fetchFactById";

import { ROUTES } from "./RoutedApp/routes";
// import { Fact } from "./RoutedApp/fact";

export const myRouter = createBrowserRouter([
  {
    path: ROUTES.facts,
    // element: <>SIMPLE ELEMENT</>,
    element: <Layout />,
    // с лэйаутом требуется дочерние элементы
    children: [
      {
        // будем отображать элемент из предыдущего пути
        index: true,
        element: <Facts />,
        // для загрузки используем спец функцию loader
        loader: fetchAllFacts,
      },
      // {
      //   path: ROUTES.fact(),
      //   element: <Fact />,
      //   loader: fetchFactById(),
      // },
    ],
  },
]);

export const App = () => <RouterProvider router={myRouter}></RouterProvider>;
