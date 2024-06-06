import fintech from "../assets/fintech.svg";
import resumo from "../assets/icons/resumo.svg";
import vendas from "../assets/icons/vendas.svg";
import webHooks from "../assets/icons/webhooks.svg";
import configuracoes from "../assets/icons/configuracoes.svg";
import contato from "../assets/icons/contato.svg";
import sair from "../assets/icons/sair.svg";

function Sidenav() {
  return (
    <nav>
      <img src={fintech} alt="" />
      <ul>
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <a href="">Resumo</a>
        </li>
        <li>
          <span>
            <img src={vendas} alt="" />
          </span>
          <a href="">Vendas</a>
        </li>
        <li>
          <span>
            <img src={webHooks} alt="" />
          </span>
          <a href="">webHooks</a>
        </li>
        <li>
          <span>
            <img src={configuracoes} alt="" />
          </span>
          <a href="">configurações</a>
        </li>
        <li>
          <span>
            <img src={contato} alt="" />
          </span>
          <a href="">contato</a>
        </li>
        <li>
          <span>
            <img src={sair} alt="" />
          </span>
          <a href="">sair</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidenav;
