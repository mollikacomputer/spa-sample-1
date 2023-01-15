import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../shared/Loading";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading />;
  }
  if (user) {
    console.log(user.user.displayName);
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="text-2xl font-bold">Log In</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">What is your name?</span>
            </label>
            <input 
            type="email" 
            placeholder="Type Email" 
            class="input input-bordered w-full max-w-xs" 
            {
              ...register(
              "email", 
            {required: true },
            {
              pattern: {
                value: /[A-Za-z]{3}/,
                message: 'Please provide a valid email'
              }
            }
            )
          }
            aria-invalid={errors.email ? "true" : "false"}
            />
            <label class="label">
              <span class="label-text-alt">
                {errors.email?.type === "required" && (<p role="alert">Email name is required</p>)}
                {errors.email?.type === "pattern" && (<p role="alert" className="text-red-500"> {errors.email?.message} </p>)}
                </span>
              <span class="label-text-alt">Alt label</span>
            </label>
          </div>





            <input
              
              
            />
            

            <input
              {...register("mail", { required: "Email Address is required" })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && <p role="alert">{errors.mail?.message}</p>}

            <input className="btn btn-block" type="submit" />
          </form>
        </div>
        <div class="divider">OR</div>
        <button class="btn btn-outline" onClick={() => signInWithGoogle()}>
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
