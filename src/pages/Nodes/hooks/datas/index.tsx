import {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
  useEffect,
} from "react";

import { v4 as uuidV4 } from "uuid";

import { ILinkDTO } from "../../dtos/ILink";
import { INodeDTO } from "../../dtos/INode";
import {
  ICreateNodeProps,
  IHandleLinkProps,
  ILinkSelectedDTO,
  IMouseDTO,
  IUpdateNodeLinkProps,
  IUpdateNodePositionProps,
} from "./dtos/IDatasDTO";

interface IDatasContextData {
  nodes: INodeDTO[];
  links: ILinkDTO[];
  mouse: IMouseDTO;
  linkSelected: ILinkSelectedDTO;
  createNode: ({ pos }: ICreateNodeProps) => void;
  removeNode: (id: string) => void;
  updateNodePosition: ({ id, pos }: IUpdateNodePositionProps) => void;
  updateNodeLink: ({
    input_node_id,
    output_node_id,
  }: IUpdateNodeLinkProps) => void;
  updateLinks: () => void;
  handleLink: ({
    active,
    input_node_id,
    output_node_id,
  }: IHandleLinkProps) => void;
  selectMouse: ({ x, y }: IMouseDTO) => void;
}

const DatasContext = createContext<IDatasContextData>({} as IDatasContextData);

interface IDatasProps {
  children: JSX.Element;
}

interface IDataDTO {
  nodes: INodeDTO[];
}

export function DatasProvider({ children }: IDatasProps) {
  const [data, setData] = useState<IDataDTO>(() => {
    const nodes = localStorage.getItem("@flowchart:nodes");

    let parsedNodes: INodeDTO[] = [];

    if (nodes) {
      parsedNodes = JSON.parse(nodes);
    }

    return { nodes: parsedNodes };
  });

  const [links, setLinks] = useState<ILinkDTO[]>([]);

  const [mouse, setMouse] = useState<IMouseDTO>({
    x: 0,
    y: 0,
  });

  const [linkSelected, setLinkSelected] = useState<ILinkSelectedDTO>({
    active: false,
    input_node_id: null,
    output_node_id: null,
  });

  const createNode = useCallback(
    ({ pos, type, title }: ICreateNodeProps) => {
      const newNode = {
        id: uuidV4(),
        title,
        pos,
        type,
        sons: [],
        fathers: [],
      } as INodeDTO;

      const updatedNodes = [...data.nodes, newNode];

      setData({
        ...data,
        nodes: updatedNodes,
      });

      localStorage.setItem("@flowchart:nodes", JSON.stringify(updatedNodes));
    },
    [data],
  );

  const removeNode = useCallback(
    (id: string) => {
      const updatedNodes = [...data.nodes];

      const findIndex = updatedNodes.findIndex((item) => item.id === id);

      if (findIndex >= 0) {
        updatedNodes.splice(findIndex, 1);
      }

      setData({
        ...data,
        nodes: updatedNodes,
      });

      localStorage.setItem("@flowchart:nodes", JSON.stringify(updatedNodes));
    },
    [data],
  );

  const updateNodeLink = useCallback(
    ({ input_node_id, output_node_id }: IUpdateNodeLinkProps) => {
      const updatedNodes = [...data.nodes];

      const findInput = updatedNodes.find((item) => item.id === input_node_id);
      const findOutput = updatedNodes.find(
        (item) => item.id === output_node_id,
      );

      if (findInput && findOutput) {
        findInput.fathers.push({
          id: output_node_id,
          label: null,
          subnode_id: null,
        });
        findOutput.sons.push({
          id: input_node_id,
          label: null,
          subnode_id: null,
        });
      }

      setData({
        ...data,
        nodes: updatedNodes,
      });

      localStorage.setItem("@flowchart:nodes", JSON.stringify(updatedNodes));
    },
    [data],
  );

  const updateNodePosition = useCallback(
    ({ id, pos }: IUpdateNodePositionProps) => {
      const updatedNodes = [...data.nodes];

      const findNode = updatedNodes.find((item) => item.id === id);

      if (!findNode) {
        return;
      }

      findNode.pos = pos;

      setData({
        ...data,
        nodes: updatedNodes,
      });

      localStorage.setItem("@flowchart:nodes", JSON.stringify(updatedNodes));
    },
    [data],
  );

  const updateLinks = useCallback(() => {
    const updatedLinks: ILinkDTO[] = [];

    if (data && data.nodes && data.nodes.length > 0) {
      data.nodes.forEach((item) => {
        if (item.sons.length > 0) {
          item.sons.forEach((itemSons) => {
            const findSon = data.nodes.find(
              (itemFind) => itemFind.id === itemSons.id,
            );

            if (findSon) {
              if (findSon.fathers.length > 0) {
                const findFather = findSon.fathers.find(
                  (itemFind) => itemFind.id === item.id,
                );

                if (findFather) {
                  updatedLinks.push({
                    id: uuidV4(),
                    start: `node-link-${findFather.id}#out`,
                    end: `node-link-${findSon.id}#in`,
                  });
                }
              }
            }
          });
        }
      });
    }

    setLinks(updatedLinks);
  }, [data]);

  const handleLink = useCallback(
    ({ active, input_node_id, output_node_id }: IHandleLinkProps) => {
      setLinkSelected({
        active,
        input_node_id,
        output_node_id,
      });
    },
    [],
  );

  const selectMouse = useCallback(({ x, y }: IMouseDTO) => {
    setMouse({ x, y });
  }, []);

  const context = useMemo(() => {
    return {
      nodes: data.nodes,
      links,
      mouse,
      setMouse,
      linkSelected,
      createNode,
      removeNode,
      updateNodePosition,
      updateNodeLink,
      handleLink,
      updateLinks,
      selectMouse,
    };
  }, [
    data,
    links,
    mouse,
    linkSelected,
    createNode,
    removeNode,
    updateNodePosition,
    updateNodeLink,
    handleLink,
    updateLinks,
    selectMouse,
  ]);

  useEffect(() => {
    updateLinks();
  }, [updateLinks]);

  return (
    <DatasContext.Provider value={context}>{children}</DatasContext.Provider>
  );
}

export function useDatas() {
  const context = useContext(DatasContext);

  if (!context) {
    throw new Error("useDatas must be used whitin a DatasProvider");
  }

  return context;
}
