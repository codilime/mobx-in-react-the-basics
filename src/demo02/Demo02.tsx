import "./Demo02-console";
import { Demo } from "../common/demo/Demo";
import { Section } from "../common/section/Section";
import { Code } from "../common/code/Code";

export default function Demo02() {
  return (
    <Demo title="Demo 02 - make(Auto)Observable(...)">
      <Section>
        Open console, then type: <code>friend === observableFriend</code> then
        press ENTER
      </Section>
      <Section>
        Type: <code>friend</code>
      </Section>
      <Section>
        Type:
        <code>friend.setName('Chandler', 'Bing')</code>
      </Section>
      <Section>
        Type:
        <code>observableFriend.setName('Rossie', 'Gellerio')</code>
      </Section>
      <Section>
        Change <code>makeObservable</code> to <code>makeAutoObservable</code>
      </Section>
      <Section>
        Add not existing <code>age</code> props to <code>autorun()</code>
        <Code>
          {`autorun(() => {
  console.log("👉 [autorun] friend.age:", friend.age);
  console.log("👉 [autorun] observableFriend.age:", observableFriend.age);
});`}
        </Code>
        then type: <code>observableFriend.age = 30</code> and{" "}
        <code>friend.age = 30</code>
      </Section>
    </Demo>
  );
}
