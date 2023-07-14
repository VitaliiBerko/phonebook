import { LoginForm } from "../../components/Forms/LoginForm/LoginForm";
import { Title, WrapperPage } from "../../styles/commom.styled";

const LoginPage: React.FC = () => {
  return (
    <WrapperPage>
        <Title>Please, login!</Title>
      <LoginForm />
    </WrapperPage>
  );
};

export default LoginPage;
