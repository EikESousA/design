import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  FieldInput,
  FieldButtonDefault,
  FieldRadio,
  FieldSwitch,
  FieldCheckbox,
  FieldLink,
  FieldButtonIcon,
  FieldLoading,
  FieldTooltip,
  FieldIcon,
  FieldToast,
  MenuComponents,
  MenuTypes,
  FieldTheme,
  FieldVolume,
} from "./components";

import { Container, Menu, Fields } from "./styles";

export default function Design() {
  const navigate = useNavigate();
  const { type, component } = useParams();

  const [openComponents, setOpenComponents] = useState<boolean>(false);

  useEffect(() => {
    if (!type) {
      navigate(`/design/components`);
    } else {
      if (type === "components") {
        setOpenComponents(true);
      } else {
        setOpenComponents(false);
      }
    }
  }, [type, history]);

  return (
    <Container
      id="container-design"
      data-theme="light"
      className={openComponents ? "opened" : "closed"}
    >
      <button className="backdrop" onClick={() => setOpenComponents(false)} />
      <Menu className={openComponents ? "opened" : "closed"}>
        <MenuTypes
          openComponents={openComponents}
          setOpenComponents={(value) => setOpenComponents(value)}
        />

        {type === "components" ? (
          <MenuComponents
            openComponents={openComponents}
            setOpenComponents={(value) => setOpenComponents(value)}
          />
        ) : null}
      </Menu>

      <Fields className={openComponents ? "opened" : "closed"}>
        {type === "components" && component === "Input" ? <FieldInput /> : null}
        {type === "components" && component === "Checkbox" ? (
          <FieldCheckbox />
        ) : null}
        {type === "components" && component === "Switch" ? (
          <FieldSwitch />
        ) : null}
        {type === "components" && component === "Radio" ? <FieldRadio /> : null}
        {type === "components" && component === "ButtonDefault" ? (
          <FieldButtonDefault />
        ) : null}
        {type === "components" && component === "ButtonIcon" ? (
          <FieldButtonIcon />
        ) : null}
        {type === "components" && component === "Link" ? <FieldLink /> : null}
        {type === "components" && component === "Tooltip" ? (
          <FieldTooltip />
        ) : null}
        {type === "components" && component === "Loading" ? (
          <FieldLoading />
        ) : null}
        {type === "components" && component === "Icon" ? <FieldIcon /> : null}
        {type === "components" && component === "Toast" ? <FieldToast /> : null}

        {type === "theme" ? <FieldTheme /> : null}
        {type === "volume" ? <FieldVolume /> : null}
      </Fields>
    </Container>
  );
}
