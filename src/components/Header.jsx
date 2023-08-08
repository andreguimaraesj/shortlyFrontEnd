import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import logo from "../assets/logo.svg";
import useAuth from "../hooks/useAuth";
export default function Header() {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const name = "temp";
  return (
    <HeaderStyled>
      <nav>
        {auth && <p>Seja Bem-vindo(a) {name}</p>}
        {!auth ? (
          <div>
            <ButtonStyled
              txcolor={true}
              onClick={() => {
                navigate("/login");
              }}
            >
              Entrar
            </ButtonStyled>
            <ButtonStyled
              onClick={() => {
                navigate("/cadastro");
              }}
            >
              Cadastrar-se
            </ButtonStyled>
          </div>
        ) : (
          <div>
            <ButtonStyled
              onClick={() => {
                navigate("/home");
              }}
            >
              Entrar
            </ButtonStyled>
            <ButtonStyled
              onClick={() => {
                navigate("/ranking");
              }}
            >
              Cadastrar-se
            </ButtonStyled>
            <ButtonStyled>Sair</ButtonStyled>
          </div>
        )}
      </nav>
      <div>
        <p>Shortly</p>
        <img src={logo} alt="Shortly" />
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  width: 80%;
  margin: 60px auto;
  nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    p {
      color: #5d9040;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      position: absolute;
      left: 0px;
      top: 0px;
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: #000;
      font-size: 64px;
      font-style: normal;
      font-weight: 200;
      line-height: normal;
    }
    img {
      width: 102px;
      height: 102px;
    }
  }
`;

const ButtonStyled = styled.button`
  background: none;
  border: none;
  color: ${({ txcolor }) => (txcolor ? "#5D9040" : "#9C9C9C")};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
