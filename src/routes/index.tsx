import routes from 'constants/routes';
import Signin from 'features/common/Signin';
import DefaultLayout from 'layouts/DefaultLayout';
import Signup from 'features/common/Signup';
import { signinApi } from 'services/signin.api';
import { signupApi } from 'services/signup.api';

const Routes = () => {
  return (
    <div>
      <DefaultLayout path={routes.homePage} element={<Signin />} />
      <DefaultLayout path={routes.signup} element={<Signup />} />
    </div>
  );
};

export default Routes;
