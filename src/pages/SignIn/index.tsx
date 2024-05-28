import { Link } from "react-router-dom";
import { Container } from "./styles";
import logo from "../../assets/logo-reprograma-jucas.png";
import { FormLogin } from "../../components/FormLogin";

export function SignIn() {
  return (
    <Container>
      <div className="signInPart1">
        <div>
          <h1>Task Manager</h1>
          <Link
            to={"https://emanuelquintino.github.io/Page-WDC"}
            target="_blank">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>

<<<<<<< HEAD
        <div className="signInPart2">
          <FormLogin />
        </div>
=======
      <div className="signInPart2">
        <FormLogin />
      </div>
>>>>>>> 93964a39d37457b7e3c58a6bcc2baa9de02e22d2
    </Container>
  );
}
