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
} from "./components";

import { Container, Menu, Fields } from "./styles";

export default function Design() {
  const navigate = useNavigate();
  const { type, component } = useParams();

  const [openComponents, setOpenComponents] = useState<boolean>(false);

  useEffect(() => {
    if (!type) {
      navigate(`/design/components`);
    } else if (type === "components") {
      setOpenComponents(true);
    } else {
      setOpenComponents(false);
    }
  }, [type, navigate]);

  return (
    <Container
      id="container-design"
      data-theme="light"
      className={openComponents ? "opened" : "closed"}
    >
      {/* <button className="backdrop" onClick={() => setOpenComponents(false)} /> */}
      <Menu className={openComponents ? "opened" : "closed"}>
        <MenuComponents
          openComponents={openComponents}
          setOpenComponents={(value) => setOpenComponents(value)}
        />
      </Menu>

      <Fields className={openComponents ? "opened" : "closed"}>
        {component === "Input" || !component ? <FieldInput /> : null}
        {component === "Checkbox" || !component ? <FieldCheckbox /> : null}
        {component === "Switch" || !component ? <FieldSwitch /> : null}
        {component === "Radio" || !component ? <FieldRadio /> : null}
        {type === "components" &&
        (component === "ButtonDefault" || !component) ? (
          <FieldButtonDefault />
        ) : null}
        {component === "ButtonIcon" || !component ? <FieldButtonIcon /> : null}
        {component === "Link" || !component ? <FieldLink /> : null}
        {component === "Tooltip" || !component ? <FieldTooltip /> : null}
        {component === "Loading" || !component ? <FieldLoading /> : null}
        {component === "Icon" || !component ? <FieldIcon /> : null}
        {component === "Toast" || !component ? <FieldToast /> : null}
      </Fields>
    </Container>
  );
}
