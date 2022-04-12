import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      setData(JSON.stringify(data));
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      localStorage.setItem("token", json.token);
      // router.push('/sensors');
    } catch (e) {
      console.log(e);
    }
  };

  // Show the user. No loading state is required
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", {
          required: "Veuillez entrer votre adresse mail",
        })}
        type="email"
        placeholder="ex. jean.deflo@bluewin.ch"
      />
      <input
        {...register("password", { required: "Il vous faut un mot de passe" })}
        type="password"
        placeholder="mot de passe"
      />
      <p>{data}</p>
      <input type="submit" />
    </form>
  );
};

export default Login;
