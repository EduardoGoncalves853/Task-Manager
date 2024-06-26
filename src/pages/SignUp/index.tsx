import { Link } from "react-router-dom";
import { Container } from "./styles";
import logo from "../../assets/logo-rj.png";
import { FormSignUp } from "../../components/FormSignUp";

export function SignUp() {
  return (
    <Container>
      <div className="signInPart2">
        <FormSignUp />
      </div>

      <div className="signInPart1">
        <div>
          <Link to={"https://emanuelquintino.github.io/Page-WDC"} target="_blank">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
    </Container>
  );
}
