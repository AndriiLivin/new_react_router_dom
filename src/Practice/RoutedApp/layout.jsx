import { Outlet } from "react-router-dom";

//  точно понадобится
export const  Layout = () => (
  <main>
    {/* Здесь будут рендерится дочерние компоненты */}
    <Outlet></Outlet>
  </main>
)