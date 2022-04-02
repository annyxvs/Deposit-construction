import styled from "styled-components";
import { styles  } from "./styles";

export const Input = styled.input`
  border: none;

  background-color: transparent;
  display: block;

  font-family: ${styles.fonts.text_input};
  font-size: 1rem;

  margin: 3rem;
  margin-top: 2rem;
  padding: 2rem;
  padding-bottom: 0.2rem;
  padding-left: 0.5rem;

  width: 40vw;

  border-bottom: .2rem rgba(228, 179, 99, 0.3) solid;
  transition: .5s;

  &:focus{
    border-bottom: .2rem rgba(228, 179, 99, 0.8) solid;
  }
`

export const Inpunt_Login = styled.input`
  background-color: ${styles.colors.primary[200]};
  color: ${styles.colors.primary[100]};

  letter-spacing: .15rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;

  border: none;
  border-radius: .2rem;

  padding: 0.5rem;
  margin-top: 1rem;
  margin-left: 3.5rem;

  width: 15vw;

  transition: 0.5s;

  cursor: pointer;

  &:hover{
    background-color: ${styles.colors.secudery[700]};
    color: ${styles.colors.primary[300]};
  }

  @media (max-width:700px) {
    width: 40vw;
    margin-bottom: 1rem;
    margin-left: 3rem;
  }
`