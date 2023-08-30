import { useState } from "react";
import { useParams } from "react-router-dom";

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
  FieldPassword,
  FieldDivider,
  FieldDropdown,
  FieldCard,
  FieldTable,
  FieldSkeleton,
} from "./components";

import { Container, Menu, Fields } from "./styles";

export default function Design() {
  const { component } = useParams();

  const [openComponents, setOpenComponents] = useState<boolean>(false);

  return (
    <Container
      id="container-design"
      data-theme="light"
      className={openComponents ? "opened" : "closed"}
    >
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
        {component === "Divider" || !component ? <FieldDivider /> : null}
        {component === "ButtonDefault" || !component ? (
          <FieldButtonDefault />
        ) : null}
        {component === "ButtonIcon" || !component ? <FieldButtonIcon /> : null}
        {component === "Link" || !component ? <FieldLink /> : null}
        {component === "Tooltip" || !component ? <FieldTooltip /> : null}
        {component === "Loading" || !component ? <FieldLoading /> : null}
        {component === "Icon" || !component ? <FieldIcon /> : null}
        {component === "Toast" || !component ? <FieldToast /> : null}
        {component === "Password" || !component ? <FieldPassword /> : null}
        {component === "Dropdown" || !component ? <FieldDropdown /> : null}
        {component === "Card" || !component ? <FieldCard /> : null}
        {component === "Table" || !component ? <FieldTable /> : null}
        {component === "Skeleton" || !component ? <FieldSkeleton /> : null}
      </Fields>
    </Container>
  );
}
