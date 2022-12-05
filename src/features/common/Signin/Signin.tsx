import { ReactNode, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useGetTodosQuery } from 'services/signup.api';

import Button from 'common/components/Button';
import Card from 'common/components/Card';
import FormInput from 'common/components/FormInput/FormInput';

import routes from 'constants/routes';
import { useForm } from 'react-hook-form';
import { IconEyeOpen, IconSpinner } from 'common/components/Icons/Icons';
import { useSigninMutation } from 'services/signin.api';
import {
  getAuthTokenCookie,
  getAuthUserCookie,
  setAuthTokenCookie,
  setAuthUserCookie,
} from 'utils/cookies';
import { boolean } from 'zod';
import FullPageSpinner from 'common/components/FullPageSpinner';
import { SigninModel } from './types';

const Sigin = () => {
  /* Initialization Start */
  const [message, setMessage] = useState<ReactNode | string>('');
  const [spinnerState, setSpinnerState] = useState<boolean>(true);
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const [signin, { isLoading, isSuccess, isError }] = useSigninMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  // const users: [] = useSelector((state: any) => state.auth.users);
  /* Initialization End */

  /* Styles Start */
  const labelStyle = 'w-full';
  const inputStyle =
    'border-2 border-blue-200 focus:border-blue-500 focus:outline-none rounded-sm h-10 w-full text-lg px-2 mt-2';
  /* Styles End */

  /* useEffect Start */

  /* useEffect End */

  // const {
  //   data: todos,
  //   error,
  //   isLoading,
  //   isSuccess,
  //   isError,
  // } = useGetTodosQuery('');

  /* Functions Start */
  const handleSignin = async (formData: SigninModel) => {
    const response: any = await signin(formData);
    if (response) {
      if (response.data.status === 'success') {
        setAuthTokenCookie(response.data.auth);
        setAuthUserCookie(response.data.user);
        message && setMessage('');
        setSpinnerState(false);
        const timeout = setTimeout(() => {
          if (response.data.user.user_type === 2) {
            navigate(routes.seller.home);
          }
          if (response.data.user.user_type === 3) {
            navigate(routes.customer.home);
          }
        }, 2500);

        return () => {
          clearTimeout(timeout);
        };
      }
      if (response.data.status === 'failed') {
        setMessage(
          <div className="text-md text-red-500">{response.data.error}</div>
        );
      }
    } else {
      setMessage(
        <div className="text-md text-red-500">"Error, Please try again."</div>
      );
    }
  };

  const handleNavigation = () => {
    navigate(routes.signup);
  };
  /* Functions End */
  return (
    <div className="flex flex-col items-center justify-center flext-auto h-screen mx-auto content-center bg-[#F3F7F9]">
      <FullPageSpinner isHidden={spinnerState} />
      <div className="w-full">
        <div className="flex flex-row items-center justify-center">
          <Card
            width="w-3/12"
            height="h-96"
            otherClass="min-w-[500px]"
            children={
              <form onSubmit={handleSubmit(handleSignin)}>
                <div className="mx-10 my-5">
                  <div className="flex justify-center w-full my-5">
                    <p className="text-xl font-medium font-sans text-blue-500">
                      E-Commerce
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-full">
                      <FormInput
                        placeHolder="Email"
                        name="email"
                        inputClass={inputStyle}
                        isRequired={true}
                        hasAsterisk={false}
                        register={register}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mt-5">
                    <div className="w-full">
                      <FormInput
                        placeHolder="Password"
                        name="password"
                        type="password"
                        inputClass={inputStyle}
                        isRequired={true}
                        hasAsterisk={false}
                        register={register}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center h-8 my-3">
                    <div>{message}</div>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      width="w-96"
                      height="h-10"
                      type="submit"
                      bgColor="bg-blue-400"
                      className="hover:bg-blue-500 rounded-sm"
                      children={
                        !isLoading ? (
                          <p className="text-white font-semibold">Signup</p>
                        ) : (
                          <div className="w-full text-center flex justify-center">
                            <IconSpinner />
                          </div>
                        )
                      }
                      isDisabled={isSubmitting}
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
