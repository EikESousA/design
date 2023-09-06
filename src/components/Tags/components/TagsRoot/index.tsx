import { useMemo } from "react";

import { Icon } from "@/components";
import { useTooltip } from "@/hooks/tooltip";

import { ITagsDTO } from "../../dtos/ITagsDTO";

import { Container } from "./styles";

interface ITagsRootProps {
  tags: ITagsDTO[];
  show?: number;
  type: "tag" | "queue";
}

export default function TagsRoot({ tags, show = 1, type }: ITagsRootProps) {
  const { handleOnMouseOut, handleOnMouseOver } = useTooltip();

  const tagsTooltip = useMemo(() => {
    let updatedTagsTooltip = "";

    if (tags.length > 0 && show > 0) {
      tags.forEach((item) => {
        updatedTagsTooltip += `${item.name}\n`;
      });
    }

    return updatedTagsTooltip;
  }, [show, tags]);

  if (tags.length > 0 && show > 0) {
    return (
      <Container>
        <Icon.Root icon={type} />

        {tagsTooltip.length > 0 ? (
          <div
            className="tag"
            onMouseOver={(event) =>
              handleOnMouseOver({
                el: event.currentTarget,
                container: tagsTooltip,
              })
            }
            onMouseOut={() => handleOnMouseOut()}
            onFocus={(event) =>
              handleOnMouseOver({
                el: event.currentTarget,
                container: tagsTooltip,
              })
            }
            onBlur={() => handleOnMouseOut()}
          >
            <div className="top" />
            <div className="text">+ 5</div>
            <div className="bottom" />
          </div>
        ) : null}
      </Container>
    );
  }
}
