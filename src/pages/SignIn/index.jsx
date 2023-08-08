import styled from "styled-components";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { postSignIn } from "../../services/api";
import useAuth from "../../hooks/useAuth";

export default function SignIn() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [trySignIn, setTrySignIn] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  function signInSend(e) {
    e.preventDefault();
    setTrySignIn(true);
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    function loginSuccess(token) {
      signIn(token);
      navigate("/");
    }

    function loginFailure() {
      setTrySignIn(false);
    }

    postSignIn(data, loginSuccess, loginFailure);
  }

  return (
    <SingInContainer>
      <form onSubmit={signInSend}>
        <input
          data-test="email"
          disabled={trySignIn}
          // type="email"
          id="email"
          placeholder="E-mail"
          ref={emailRef}
          required
        />
        <input
          data-test="password"
          disabled={trySignIn}
          type="password"
          id="password"
          placeholder="Senha"
          ref={passwordRef}
          required
        />
        <button data-test="sign-in-submit" disabled={trySignIn} type="submit">
          {trySignIn ? (
            <ThreeDots
              height="20"
              width="60"
              radius="11"
              color=" #FFF"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Entrar"
          )}
        </button>
      </form>

      <Link to={"/cadastro"}>Primeira vez? Cadastre-se!</Link>
    </SingInContainer>
  );
}

const SingInContainer = styled.section`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
