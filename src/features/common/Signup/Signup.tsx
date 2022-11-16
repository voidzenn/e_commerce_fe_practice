import { useNavigate } from 'react-router-dom';
import { useForm, useController } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z, { number, string } from 'zod';

import Button from 'common/components/Button';
import Card from 'common/components/Card';
import FormInput from 'common/components/FormInput/FormInput';
import FormSelect from 'common/components/FormSelect/FormSelect';

import routes from 'constants/routes';
import { useSignupMutation } from 'services/signup.api';

const schema = z
  .object({
    fname: string(),
    lname: string(),
    address: string(),
    age: string() || number().nullable(),
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
  const navigate = useNavigate();
  const [signup, { isLoading }] = useSignupMutation();
  const { register, control, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });
  const { field } = useController({ name: 'gender', control });

  const { errors } = formState;
  /* Initialization End */

  /* Styles Start */
  const labelStyle = 'text-lg w-full';
  const inputStyle =
    'border-2 border-blue-200 focus:border-blue-500 focus:outline-none rounded-sm w-full text-lg px-2';
  const selectStyle =
    'border-2 border-blue-200 focus:border-blue-500 focus:outline-none rounded-sm w-full h-8 text-lg px-2 bg-white';
  /* Styles End */

  /* Functions Start */
  const handleSignup = async (formValues: any) => {
    // e.preventDefault();
    // const data = new FormData(e.target);
    await signup(formValues);
    // console.log(Object.fromEntries(data.entries()));
    console.log(errors);
  };

  const handleNavigation = () => {
    navigate(routes.homePage);
  };

  const handleChange = (option: any) => {
    field.onChange(option.value);
  };
  /* Functions End */

  return (
    <div className="flex flex-col items-center justify-center flext-auto h-screen mx-auto content-center bg-[#F3F7F9]">
      <div className="w-full">
        <div className="flex flex-row items-center justify-center">
          <Card
            width="w-6/12"
            height="h-5/12"
            otherProps="min-w-[500px]"
            children={
              <form onSubmit={handleSubmit(handleSignup)}>
                <div className="mx-5 my-10">
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
                            name: 'Male',
                            value: 'M',
                          },
                          {
                            name: 'Female',
                            value: 'M',
                          },
                          {
                            name: 'They / Them',
                            value: 'M',
                          },
                        ]}
                        value={field.value}
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
                        errors={errors.email?.message}
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
                        isRequired={true}
                        register={register}
                        errors={errors.confirm_password?.message}
                      />
                    </div>
                  </div>

                  <div className="flex justify-center mt-20">
                    <Button
                      width="w-96"
                      height="h-10"
                      type="submit"
                      bgColor="bg-blue-400"
                      otherProps="hover:bg-blue-500 rounded-sm"
                      children={
                        <p className="text-white font-semibold">Signup</p>
                      }
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
