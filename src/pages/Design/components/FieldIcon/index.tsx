import { Icon } from "@/components";
import { FieldContainer, FieldContent, Icons } from "../../styles";

export default function FieldIcon() {
  return (
    <FieldContainer style={{ height: "100%" }}>
      <legend>Icones</legend>
      <FieldContent>
        <div
          style={{
            minWidth: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "var(--aliases-100)",
            padding: "3rem 1rem",
            borderRadius: "2rem",
            margin: "2rem 0",
          }}
        >
          <Icons>
            <li>
              <Icon.Root icon={"alert"} />
              <p>alert</p>
            </li>
            <li>
              <Icon.Root icon={"asterisk"} />
              <p>asterisk</p>
            </li>
            <li>
              <Icon.Root icon={"attachfile"} />
              <p>attachfile</p>
            </li>
            <li>
              <Icon.Root icon={"chatbot"} />
              <p>chatbot</p>
            </li>
            <li>
              <Icon.Root icon={"check"} />
              <p>check</p>
            </li>
            <li>
              <Icon.Root icon={"close"} />
              <p>close</p>
            </li>
            <li>
              <Icon.Root icon={"dark"} />
              <p>dark</p>
            </li>
            <li>
              <Icon.Root icon={"delete"} />
              <p>delete</p>
            </li>
            <li>
              <Icon.Root icon={"edit"} />
              <p>edit</p>
            </li>
            <li>
              <Icon.Root icon={"email"} />
              <p>email</p>
            </li>
            <li>
              <Icon.Root icon={"eye"} />
              <p>eye</p>
            </li>
            <li>
              <Icon.Root icon={"eyeslash"} />
              <p>eyeslash</p>
            </li>
            <li>
              <Icon.Root icon={"filter"} />
              <p>filter</p>
            </li>
            <li>
              <Icon.Root icon={"info"} />
              <p>info</p>
            </li>
            <li>
              <Icon.Root icon={"light"} />
              <p>light</p>
            </li>
            <li>
              <Icon.Root icon={"menu"} />
              <p>menu</p>
            </li>
            <li>
              <Icon.Root icon={"notification"} />
              <p>notification</p>
            </li>
            <li>
              <Icon.Root icon={"password"} />
              <p>password</p>
            </li>
            <li>
              <Icon.Root icon={"profile"} />
              <p>profile</p>
            </li>
            <li>
              <Icon.Root icon={"search"} />
              <p>search</p>
            </li>
            <li>
              <Icon.Root icon={"send"} />
              <p>send</p>
            </li>
            <li>
              <Icon.Root icon={"success"} />
              <p>success</p>
            </li>
            <li>
              <Icon.Root icon={"volumedown"} />
              <p>volumedown</p>
            </li>
            <li>
              <Icon.Root icon={"volumemute"} />
              <p>volumemute</p>
            </li>
            <li>
              <Icon.Root icon={"volumeup"} />
              <p>volumeup</p>
            </li>
            <li>
              <Icon.Root icon={"warning"} />
              <p>warning</p>
            </li>
            <li>
              <Icon.Root icon={"painting"} />
              <p>painting</p>
            </li>
            <li>
              <Icon.Root icon={"components"} />
              <p>components</p>
            </li>
          </Icons>
        </div>
      </FieldContent>
    </FieldContainer>
  );
}
