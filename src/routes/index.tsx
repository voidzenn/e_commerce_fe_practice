import routes from 'constants/routes';
import Home from 'pages/Home';
import DefaultLayout from 'layouts/DefaultLayout';

const Routes = () => {
  return <DefaultLayout path={routes.homePage} element={<Home />} />;
};

export default Routes;
