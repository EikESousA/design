import { DragEvent } from "react";

import { useDatas } from "../../hooks/datas";
import { nodesType } from "../../utils";
import { onDragEnd, onDragOver, onDragStart } from "./functions";

import { Container } from "./styles";

export default function Menu() {
  const { selectMouse } = useDatas();

  return (
    <Container>
      <section className="flowchart-menu-title">
        <p>Arraste e solte uma das opcoes</p>
      </section>

      <section className="flowchart-menu-button">
        {nodesType.map((nodeType) => (
          <div
            key={`menu-node-key-${nodeType.id}`}
            id={`menu-node-${nodeType.id}`}
            style={{ backgroundColor: nodeType.color }}
            draggable
            onDragStart={(event: DragEvent<HTMLDivElement>) =>
              onDragStart({ event, nodeType, selectMouse })
            }
            onDragOver={(event: DragEvent<HTMLDivElement>) =>
              onDragOver({ event })
            }
            onDragEnd={() => onDragEnd({ selectMouse })}
          >
            <p>{nodeType.label}</p>
          </div>
        ))}
      </section>
    </Container>
  );
}
