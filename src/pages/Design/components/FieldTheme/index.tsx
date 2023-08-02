import { Switch } from "@/components";
import { useTheme } from "@/hooks/theme";
import { FieldContainer } from "../../styles";

export default function FieldTheme() {
  const { mode_dark, toogleTheme } = useTheme();

  return (
    <FieldContainer>
      <Switch.Root
        id="field-switch-main"
        label="Modo Dark"
        checked={mode_dark}
        setChecked={(value) => toogleTheme(value)}
      />
    </FieldContainer>
  );
}
