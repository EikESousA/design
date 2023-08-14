import { useState, useEffect } from "react";

import { verifyStrength } from "../../functions";

import { Container } from "./styles";

export interface IPasswordLevelProps {
  value: string;
  datatestid?: string;
}

export default function PasswordLevel({
  value,
  datatestid,
}: IPasswordLevelProps) {
  const [strength, setStrength] = useState<number>(0);

  useEffect(() => {
    setStrength(verifyStrength(value));
  }, [value]);

  return (
    <Container data-testid={datatestid ? `${datatestid}-level` : undefined}>
      <div className="empty" />
      <div className={`s${String(strength)}`} />
    </Container>
  );
}
