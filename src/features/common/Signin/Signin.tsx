import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useGetTodosQuery } from 'services/signup.api';

import Button from 'common/components/Button';
import Card from 'common/components/Card';
import FormInput from 'common/components/FormInput/FormInput';

import routes from 'constants/routes';

const Sigin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const labelStyle = 'w-full';
  const inputStyle =
    'border-2 border-blue-200 focus:border-blue-500 focus:outline-none rounded-sm w-full text-lg px-2 mt-2';

  // const users: [] = useSelector((state: any) => state.auth.users);

  // const {
  //   data: todos,
  //   error,
  //   isLoading,
  //   isSuccess,
  //   isError,
  // } = useGetTodosQuery('');

  const handleNavigation = () => {
    navigate(routes.signup);
  };

  // useEffect(() => {
  //   console.log(todos);
  // }, [todos]);

  useEffect(() => {
    console.log(process.env.REACT_APP_BASE_URL_ALT);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center flext-auto h-screen mx-auto content-center bg-[#F3F7F9]">
      <div className="w-full">
        <div className="flex flex-row items-center justify-center">
          <Card
            width="w-3/12"
            height="h-96"
            otherProps="min-w-[500px]"
            children={
              <form>
                <div className="mx-10 my-5">
                  <div className="flex justify-center">
                    <div className="w-full">
                      {/* <FormInput
                        label="Email"
                        name="email"
                        labelClass={labelStyle}
                        inputClass={inputStyle}
                        isRequired={true}
                        hasAsterisk={false}
                      /> */}
                    </div>
                  </div>
                  <div className="flex justify-center mt-5">
                    <div className="w-full">
                      {/* <FormInput
                        label="Password"
                        name="password"
                        labelClass={labelStyle}
                        inputClass={inputStyle}
                        isRequired={true}
                        hasAsterisk={false}
                      /> */}
                    </div>
                  </div>
                  <div className="flex justify-center mt-14">
                    <Button
                      width="w-96"
                      height="h-10"
                      type="submit"
                      bgColor="bg-blue-400"
                      otherProps="hover:bg-blue-500 rounded-sm"
                      children={
                        <p className="text-white font-semibold">Sign In</p>
                      }
                    />
                  </div>
                  <div className="flex justify-center mt-3">
                    <p className="text-blue-300">
                      No account ?{' '}
                      <span
                        className="text-blue-400 font-bold hover:cursor-pointer"
                        onClick={handleNavigation}
                      >
                        Signup
                      </span>
                    </p>
                  </div>
                </div>
              </form>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Sigin;
