import styled from "styled-components";
import { styles } from "./styles";

export const ButtonBack = styled.button`
  position: absolute;

  right: 2rem;
  bottom: 2rem;
  padding: .5rem;
  margin: 1rem;

  font-size: 0.7rem;

  background-color: ${styles.colors.secudery[300]};

  border: none;
  border-radius: .4rem;

  cursor: pointer;

  a{
    color: ${styles.colors.primary[100]}
  }

  transition: 0.5s;

  &:hover{
    background-color: ${styles.colors.secudery[200]};
    transform: scale(1.2);
    a{color: ${styles.colors.secudery[300]}};
  }
`