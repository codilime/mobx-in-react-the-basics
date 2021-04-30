import { Demo } from "../common/demo/Demo";
import { Section } from "../common/section/Section";
import { Code } from "../common/code/Code";
import { FriendsApp } from "./friends-app/FriendsApp";

export default function Demo06() {
  return (
    <>
      <Demo title="Demo 06 - React Integration">
        <Section>
          <code>npm install mobx mobx-react-lite</code>
        </Section>
        <Section>
          <code>observer(...)</code> wrapper usage:
          <Code>{`import { observer } from "mobx-react-lite"

const MyComponent = observer(props => ReactElement)`}</Code>
        </Section>
        <Section>
          <FriendsApp />
        </Section>
      </Demo>
    </>
  );
}
