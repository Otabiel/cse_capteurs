import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Header from "../components/Header"
import Layout from "../components/Layout";
import { Container } from 'reactstrap';

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      router.push('/login');
    } catch (e) {
      console.log(e);
    }
  };

  // Show the user. No loading state is required
  return (

    <Layout pageTitle="Sign up">
      <Header/>
        <Container>
        <section className="section position-relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>S&#39;enregistrer</h1>
            <input {...register("name")} placeholder="ex. Jean De Florette" />
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
            <input type="submit" />
          </form>
        </section>
      </Container>

    </Layout>
  );
};

export default Signup;
