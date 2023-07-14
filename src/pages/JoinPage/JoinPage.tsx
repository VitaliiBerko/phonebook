import { JoinForm } from "../../components/Forms/JoinForm/JoinForm";
import { Title, WrapperPage } from "../../styles/commom.styled";

const JoinPage: React.FC = () => {
  return (
    <WrapperPage>
        <Title>Please, join to us!</Title>
      <JoinForm />
    </WrapperPage>
  );
};

export default JoinPage;
