"use client";
import React, { useEffect, useState } from "react";
import { Layout } from "../Layout/page";
import Input from "../components/Input";
import { styled } from "styled-components";
import Button from "../components/Button";
import { useForm } from "react-hook-form";

function Dashboard() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    resetField,
    setError,
    clearErrors,
    formState: { isDirty ,errors},
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const watchFields=watch()
  const handleOnSubmit = (data: ContactDetailProps) => {
    console.table(data);
    if(!data.firstName)
    {
      setError('firstName',{
        types:{
        required:"This is required"
        }
    })
    }
    if(!data.email.includes('@'))
    {
        setError('email',{
          type:"manual",
          message:"Invalid email format"

        })
    }
      
  
    
  };

  const handleReset = () => {
    // reset()//reset all the field values
    clearErrors()
    
    // resetField("message",{defaultValue:"ex:enjoyed the order"});//reset the field value
  };
  useEffect(() => {
    console.log(isDirty);
  }, []);
  return (
    <Layout>
      <MainContainer>
      <ContactTitle>Contact</ContactTitle>
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <Input
          name={"firstName"}
          placeholder="First Name"
          register={register}
        />
       {errors.firstName && errors.firstName.types && (
        <p>{errors.firstName.types.required}</p>
      )}
        <Input name={"lastName"} placeholder="Last Name" register={register} />

        <Input name={"email"} placeholder="Work Email" register={register} />
        {errors.email && <span>{errors.email.message}</span>}
        <Input
          fieldType={"textarea"}
          name={"message"}
          placeholder="Message"
          register={register}
        />

        <Button type="submit" name={"CONTACT"} isDirty={isDirty} />
        <Button type="button" name={"RESET"} isDirty={isDirty} handleClick={handleReset} />
      </Form>
      </MainContainer>
    </Layout>
  );
}

export default Dashboard;
const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-rows: 100px;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  line-height: 5rem;
  text-align: center;
`;

const MainContainer = styled.div`
  height: 100vh;
  height: 700px;
`;