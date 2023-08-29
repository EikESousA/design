/* eslint-disable no-alert */
import { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";

import { Backdrop, Icon } from "@/components";
import { useLayout } from "@/hooks/layout";

import allModules from "../utils/modules";
import { companyLogo, userLogo } from "./assets";
import { IModuleDTO } from "./dtos/ModuleDTO";

import { Container } from "./styles";

export default function Sidebar() {
  const { fold, open, toogleFold, toogleOpen } = useLayout();
  const navigate = useNavigate();

  const [modules, setModules] = useState<IModuleDTO[]>([]);

  function handleModule(module: IModuleDTO) {
    navigate(module.url);
    toogleOpen(false);
  }

  useEffect(() => {
    setModules(allModules);
  }, []);

  return (
    <>
      <Container
        className={`${fold ? "menu-fold" : "menu-unfold"} ${
          open ? "open" : "closed"
        }`}
      >
        <header>
          <img src={companyLogo} alt="Logo da empresa" loading="lazy" />
        </header>

        <button type="button" className="fold" onClick={() => toogleFold()}>
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
          <button
            className="user"
            type="button"
            onClick={() => alert("Botao apertado")}
          >
            <section>
              <img src={userLogo} alt="Imagem do usuario" />
              <div>
                <p>Thiago Reis</p>
                <span>Administrador</span>
              </div>
            </section>
          </button>
          <section className="buttons">
            <button
              className="logout"
              type="button"
              onClick={() => alert("Botao apertado")}
            >
              <Icon.Root icon="logout" />
            </button>
            <button
              className="bug"
              type="button"
              onClick={() => alert("Botao apertado")}
              disabled
            >
              <Icon.Root icon="bug" />
            </button>
            <button
              className="suport"
              type="button"
              onClick={() => alert("Botao apertado")}
              disabled
            >
              <Icon.Root icon="suport" />
            </button>
          </section>
        </footer>
      </Container>

      {open ? <Backdrop.Root onClick={() => toogleOpen()} /> : null}
    </>
  );
}
