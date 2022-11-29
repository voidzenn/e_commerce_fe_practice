import { BaseQueryFn, QueryDefinition } from '@reduxjs/toolkit/dist/query';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { ReactElement } from 'react';
import { Routes as Router, Route } from 'react-router-dom';

interface IProps {
  path: string;
  element: ReactElement;
}
const DefaultLayout = ({ path, element }: IProps) => {
  return (
    <Router>
      <Route path={path} element={element} />
    </Router>
  );
};

export default DefaultLayout;
~