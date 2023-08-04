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
    if (module.subModules.length > 0) {
      const updatedModules = [...modules];

      const findModule = updatedModules.find((item) => item.id === module.id);

      if (findModule) {
        findModule.open = !findModule.open;
      }

      setModules(updatedModules);
    }
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
                <section>
                  <Icon.Root icon={module.icon} />
                  <p>{module.name}</p>
                </section>
                {module.badge > 0 ? (
                  <span>{module.badge > 9 ? "+9" : module.badge}</span>
                ) : null}
              </div>

              {module.subModules.length > 0 ? (
                <Icon.Root icon={module.open ? "arrowright" : "arrowdown"} />
              ) : (
                <section></section>
              )}
            </button>
            {module.open ? (
              <>
                {module.subModules.map((submodule) => (
                  <button
                    key={`sidebar-module-${module.id}-module-${submodule.id}`}
                    className="submodule"
                    type="button"
                    onClick={() => handleModule(module)}
                  >
                    <div>
                      <section>
                        <Icon.Root icon={submodule.icon} />
                        <p>{submodule.name}</p>
                      </section>
                      {submodule.badge > 0 ? (
                        <span>
                          {submodule.badge > 9 ? "+9" : submodule.badge}
                        </span>
                      ) : null}
                    </div>
                  </button>
                ))}
              </>
            ) : null}
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
          <button className="bug" type="button" onClick={() => {}}>
            <Icon.Root icon="bug" />
          </button>
          <button className="suport" type="button" onClick={() => {}}>
            <Icon.Root icon="suport" />
          </button>
        </section>
      </footer>
    </Container>
  );
}
