import React, { useState } from "react";
import { Container } from 'reactstrap';
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import Header from "../components/Header"
import Layout from "../components/Layout";


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
      router.push('/profile');
    } catch (e) {
      console.log(e);
    }
  };

  // Show the user. No loading state is required
  return (
    <Layout pageTitle="Welcome">
      <Header/>

      <section className="section position-relative">
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>

            <h1 className="mb-4 font-weight-normal line-height-1_4">S&#39;identifier</h1>
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
        </Container>
      </section>
    </Layout>
  );
};

export default Login;
