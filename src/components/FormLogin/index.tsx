import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function FormLogin() {
<<<<<<< HEAD
const navigate = useNavigate();

    return (
        <Container>
            <h2>Faça seu login</h2>

            <form>
                <section>
                    <label>
                        Email :
                        <input type="email" placeholder="exemplo@email.com"/>
                    </label>
                </section>

                <section>
                    <label>
                        Senha :
                        <input type="password" placeholder="mínimo de 7 caracteres"/>
                    </label>
                </section>
            </form>

            <span className="messageChangePage">Não tem uma conta? </span>
            <button className="buttonChangePage" onClick={() => navigate("/signup")}>Registre-se</button>
        </Container>
    )
}
=======
  const navigate = useNavigate();

  return (
    <Container>
      <h2>Faça seu login</h2>

      <form>
        <section>
          <label>
            Email:
            <input type="email" placeholder="exemplo@email.com" />
          </label>
        </section>

        <section>
          <label>
            Senha:
            <input type="password" placeholder="mínimo de 7 caracteres" />
          </label>
        </section>
      </form>

      <span className="messageChangePage">Não tem uma conta? </span>

      <button className="buttonChangePage" onClick={() => navigate("/signup")}>
        Registre-se
      </button>
    </Container>
  );
}
>>>>>>> 93964a39d37457b7e3c58a6bcc2baa9de02e22d2
