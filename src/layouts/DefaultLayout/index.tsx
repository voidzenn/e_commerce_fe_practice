import { Routes as Router, Route } from 'react-router-dom';

const DefaultLayout = ({ ...otherProps }) => {
  return (
    <Router>
      <Route {...otherProps} />
    </Router>
  );
};

export default DefaultLayout;
