import styled from "styled-components";
import { styles } from "./styles";

export const Login = styled.div`
  background-color: ${styles.colors.primary[200]};

  height: 100vh;
  width: 100vw;

  filter: blur(4);
  overflow-x: hidden;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;

  background-color:${styles.colors.primary[100]};
  margin: 2rem;

  height:90vh;

  border-radius: 0.4rem;
`

export const Aside = styled.aside`
  background-color: ${styles.colors.secudery[500]};

  margin: 2rem;
  border-radius: 0.15rem;

  display: flex;
  align-items: center;

  img{
    margin: 0 auto;
  }
`