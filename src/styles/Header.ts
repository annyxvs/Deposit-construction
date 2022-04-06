import styled from 'styled-components'
import { styles } from './styles'


export const Header  = styled.header`
  height: auto;
  width: 100vw;
 

  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;

  margin-top: 1rem;

  align-items: center;
  text-transform: uppercase;

  h1{
    font-family: Roboto Mono, monospace;
  }

  button{
    margin-right: 3rem;

    background-color: transparent;

    border: none;
    cursor: pointer;
    font-size: 1.5rem;

    transition: 0.5s;

    &:hover{
     transform: scale(1.2);
    }
  }

  .logo{
    display: flex;
    align-items: center;
    margin-left: 2rem;
    span{
      margin-right: 2rem;
      font-size: 1.7rem;
    }
  }
`
export const Navbar = styled.div`
  background-color: ${styles.colors.primary[300]};
  text-transform: uppercase;

  margin: 0.2rem;

  width: 20rem;
  height: auto;

  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;

  align-items: center;

  position: absolute;
  right: 1rem;

  button{
    display: block;
    margin: 1.5rem;
    margin-bottom: 4rem;
  }

  li{
    list-style: none;
    display: flex;

    margin: 3rem;

    a{
      color: ${styles.colors.secudery[600]};
      font-family: Oswald, sans-serif;
    }
  }

  ul{
    display: flex;
    flex-direction: column;
  }

`

export const Button = styled.button`
  border: none;
  border-radius: .2rem;

  padding: .3rem;

  text-transform: uppercase;
  font-weight: 700;

  background-color: ${styles.colors.secudery[400]};
  color: ${styles.colors.primary[100]};

  font-family: Oswald, sans-serif;

    transition: 0.5s;

    &:hover{
      transform: scale(1.2);
      cursor: pointer;
      color: ${styles.colors.secudery[700]};
    }
  a{
    color: ${styles.colors.primary[100]};

    &:hover{
      color: ${styles.colors.secudery[700]};
    }
  }
`