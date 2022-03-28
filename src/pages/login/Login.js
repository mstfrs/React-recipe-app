import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyle";
import mealSvg from "../../assets/meal.svg";

const login = () => {
  const handleSubmit = (e) => {
    e.prevetnDefault();
    window.location.href = "/";
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>{"<Clarusway/>"}Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="username" />
          <StyledInput type="password" placeholder="Password" />
          <StyledButton type="submit"> Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default login;
