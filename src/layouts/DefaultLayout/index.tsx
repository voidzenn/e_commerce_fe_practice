import { BaseQueryFn, QueryDefinition } from '@reduxjs/toolkit/dist/query';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { ReactElement } from 'react';
import { Routes as Router, Route } from 'react-router-dom';

interface IProps {
  path: string;
  element: ReactElement;
}

// const ElementWithApi = (element: any, api: any) => {
//   return <ApiProvider api={api}>{element}</ApiProvider>;
// };

// const DefaultLayout = ({ path, element, api }: IProps) => {
//   return (
//     <Router>
//       <Route
//         path={path}
//         element={<ElementWithApi element={element} api={api} />}
//       />
//     </Router>
//   );
// };

const DefaultLayout = ({ path, element }: IProps) => {
  return (
    <Router>
      <Route path={path} element={element} />
    </Router>
  );
};

export default DefaultLayout;
