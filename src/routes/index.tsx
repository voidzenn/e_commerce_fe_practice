import routes from 'constants/routes';
import Signin from 'features/Common/Signin';
import DefaultLayout from 'layouts/DefaultLayout';
import Signup from 'features/Common/Signup';
import { apiSigninSlice } from 'features/Common/Signin/ApiSlice';

const Routes = () => {
  return (
    <div>
      <DefaultLayout
        path={routes.homePage}
        element={<Signin />}
        api={apiSigninSlice}
      />
      <DefaultLayout path={routes.signup} element={<Signup />} />
    </div>
  );
};

export default Routes;
