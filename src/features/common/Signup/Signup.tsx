import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, useController } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z, { number, string, ZodError } from 'zod';

import Button from 'common/components/Button';
import Card from 'common/components/Card';
import FormInput from 'common/components/FormInput/FormInput';
import FormSelect from 'common/components/FormSelect/FormSelect';

import routes from 'constants/routes';
import { useSignupMutation } from 'services/signup.api';
import { IconSpinner } from 'common/components/Icons/Icons';

interface ErrorModel {
  fname?: string;
  lname?: string;
  email?: string;
  password?: string;
}

interface ApiValuesModel {
  error: ErrorModel;
  status: string;
}

interface ApiModel {
  data: ApiValuesModel;
}

const schema = z
  .object({
    role_id: string(),
    fname: string(),
    lname: string(),
    address: string(),
    age: string().max(3, { message: '' }).nullable(),
    gender: string().nullable(),
    email: string().email(),
    confirm_email: string().email(),
    password: string().min(8, { message: 'Minimum of 8 characters' }),
    confirm_password: string(),
  })
  .refine((data) => data.email === data.confirm_email, {
    message: 'Email does not match',
    path: ['confirm_email'],
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Password does not match',
    path: ['confirm_password'],
  });

const Signup = () => {
  /* Initialization Start */
  const [message, setMessages] = useState<ReactNode | string>('');
  const [errorMessage, setErrorMessage] = useState<ErrorModel>();
  const navigate = useNavigate();
  const [signup, { isLoading, isError, isSuccess }] = useSignupMutation();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const { field } = useController({ name: 'gender', control });
  /* Initialization End */

  /* useEffects Start */
  useEffect(() => {
    // console.log(isError);
  }, [isError]);
  /* useEffects End */

  /* Styles Start */
  const labelStyle = 'text-lg w-full';
  const inputStyle =
    'border-2 border-blue-200 focus:border-blue-500 focus:outline-none rounded-sm w-full text-lg px-2';
  const selectStyle =
    'border-2 border-blue-200 focus:border-blue-500 focus:outline-none rounded-sm w-full h-8 text-lg px-2 bg-white';
  /* Styles End */

  /* Functions Start */
  const handleSignup = async (formValues: any) => {
    const response: any = await signup(formValues);

    if (response) {
      const data = response.data;
      if (data.status === 'success') {
        reset();
        setMessages(<div className="text-green-600">{data.message}</div>);
      }
      if (data.status === 'failed') {
        setMessages('');
        setErrorMessage({ email: data.error.email });
      }
    }
  };

  const handleNavigation = () => {
    navigate(routes.signin);
  };

  const handleChange = (option: any) => {
    field.onChange(option.value);
  };

  const handleChangeEmail = (e: any) => {
    errorMessage && setErrorMessage({});
  };
  /* Functions End */

  return (
    <div className="flex flex-col items-center justify-center flext-auto h-screen mx-auto content-center bg-[#F3F7F9]">
      <div className="w-full">
        <div className="flex flex-row items-center justify-center">
          <Card
            width="w-6/12"
            height="h-5/12"
            otherClass="min-w-[500px]"
            children={
              <form onSubmit={handleSubmit(handleSignup)}>
                <div className="mx-5 my-10">
                  <div className="flex gap-4 mb-4">
                    <div className="w-1/2">
                      <FormSelect
                        name="role_id"
                        labelClass={labelStyle}
                        selectClass={selectStyle}
                        label="Signup As"
                        options={[
                          {
                            value: '3',
                            label: 'Customer',
                          },
                          {
                            value: '2',
                            label: 'Seller',
                          },
                        ]}
                        onChange={handleChange}
                        register={register}
                        errors={errors.gender?.message}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 mb-4">
                    <div className="w-1/2">
                      <FormInput
                        register={register}
                        labelClass={labelStyle}
                        inputClass={inputStyle}
                        label="First Name"
                        name="fname"
                        isRequired={true}
                        errors={errors.fname?.message}
                      />
                    </div>
                    <div className="w-1/2">
                      <FormInput
                        labelClass={labelStyle}
                        inputClass={inputStyle}
                        label="Last Name"
                        name="lname"
                        isRequired={true}
                        register={register}
                        errors={errors.lname?.message}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 mb-4">
                    <div className="w-full">
                      <FormInput
                        labelClass={labelStyle}
                        inputClass={inputStyle}
                        label="Address"
                        name="address"
                        isRequired={true}
                        register={register}
                        errors={errors.address?.message}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 mb-4">
                    <div className="w-1/2">
                      <FormInput
                        labelClass={labelStyle}
                        inputClass={inputStyle}
                        label="Age"
                        name="age"
                        type="number"
                        register={register}
                        errors={errors.age?.message}
                      />
                    </div>
                    <div className="w-1/2">
                      <FormSelect
                        name="gender"
                        labelClass={labelStyle}
                        selectClass={selectStyle}
                        label="Gender"
                        options={[
                          {
                            value: 'M',
                            label: 'Male',
                          },
                          {
                            value: 'F',
                            label: 'Femail',
                          },
                          {
                            value: 'X',
                            label: 'They / Them',
                          },
                        ]}
                        onChange={handleChange}
                        register={register}
                        errors={errors.gender?.message}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 mb-4">
                    <div className="w-1/2">
                      <FormInput
                        labelClass={labelStyle}
                        inputClass={inputStyle}
                        label="Email"
                        name="email"
                        isRequired={true}
                        register={register}
                        errors={errors.email?.message || errorMessage?.email}
                        onKeyDown={handleChangeEmail}
                      />
                    </div>
                    <div className="w-1/2">
                      <FormInput
                        labelClass={labelStyle}
                        inputClass={inputStyle}
                        label="Confirm Email"
                        name="confirm_email"
                        isRequired={true}
                        register={register}
                        errors={errors.confirm_email?.message}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <FormInput
                        labelClass={labelStyle}
                        inputClass={inputStyle}
                        label="Password"
                        name="password"
                        type="password"
                        isRequired={true}
                        register={register}
                        errors={errors.password?.message}
                      />
                    </div>
                    <div className="w-1/2">
                      <FormInput
                        labelClass={labelStyle}
                        inputClass={inputStyle}
                        label="Confirm Password"
                        name="confirm_password"
                        type="password"
                        isRequired={true}
                        register={register}
                        errors={errors.confirm_password?.message}
                      />
                    </div>
                  </div>
                  <div className="my-5 h-5 w-full flex justify-center">
                    {message}
                  </div>
                  <div className="flex justify-center mt-5">
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
                    <p className="text-blue-300" onClick={handleNavigation}>
                      Already have an account ?{' '}
                      <span className="text-blue-400 font-bold hover:cursor-pointer">
                        Sign in
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

export default Signup;
