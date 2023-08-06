import { useState, Fragment } from "react";

import logoImg from "../../assets/logo.png";
import userImg from "../../assets/img.png";

import { Icon } from "@/components";
import { useLayout } from "@/hooks/layout";

import allModules from "./utils/modules";
import { IModuleDTO } from "./dtos/ModuleDTO";

import { Container } from "./styles";

export default function Sidebar() {
  const { fold, toogleFold } = useLayout();

  const [modules, setModules] = useState<IModuleDTO[]>(allModules);

  function handleModule(module: IModuleDTO) {
    console.log(module, setModules);
  }

  return (
    <Container className={fold ? "fold" : "unfold"}>
      <header>
        <img src={logoImg} alt="Logo da empresa" />
      </header>

      <button className="fold" onClick={() => toogleFold()}>
        <Icon.Root icon={fold ? "menufold" : "menuunfold"} />
      </button>

      <main>
        {modules.map((module) => (
          <Fragment key={`sidebar-module-${module.id}`}>
            <button
              className="module"
              type="button"
              onClick={() => handleModule(module)}
            >
              <div>
                <section className="info">
                  <Icon.Root icon={module.icon} />
                  <p>{module.name}</p>
                </section>

                {module.badge > 0 ? (
                  <section className="badge">
                    <span>{module.badge > 9 ? "+9" : module.badge}</span>
                  </section>
                ) : null}
              </div>
            </button>
          </Fragment>
        ))}
      </main>

      <footer>
        <button className="user" type="button" onClick={() => {}}>
          <section>
            <img src={userImg} alt="Imagem do usuario" />
            <div>
              <p>Thiago Reis</p>
              <span>Administrador</span>
            </div>
          </section>
        </button>
        <section className="buttons">
          <button className="logout" type="button" onClick={() => {}}>
            <Icon.Root icon="logout" />
          </button>
          <button className="bug" type="button" onClick={() => {}} disabled>
            <Icon.Root icon="bug" />
          </button>
          <button className="suport" type="button" onClick={() => {}} disabled>
            <Icon.Root icon="suport" />
          </button>
        </section>
      </footer>
    </Container>
  );
}
