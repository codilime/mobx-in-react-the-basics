import "./Demo01-console";
import { Demo } from "../common/demo/Demo";
import { Section } from "../common/section/Section";
import { Code } from "../common/code/Code";

export default function Demo01() {
  return (
    <Demo title="Demo 01 - autorun(...) and observable(...)">
      <Section>
        Open console, then type: <code>friend</code> then press ENTER
      </Section>
      <Section>
        Type: <code>observableFriend</code> then press ENTER
      </Section>
      <Section>
        Type: <code>friend.firstName = 'Chandler'</code> and see what happened
      </Section>
      <Section>
        Type: <code>observableFriend.firstName = 'Chandler'</code> and see what
        happened
      </Section>
      <Section>
        Add at the beginning:
        <Code>
          {`configure({
  enforceActions: "never",
});`}
        </Code>
      </Section>
      <Section>
        Type: <code>observableFriend.lastName = 'Bing'</code> and see what
        happened
      </Section>
      <Section>
        Change <code>autorun(...)</code> code to observe <code>.fullName</code>{" "}
        property
      </Section>
      <Section>
        Type:
        <Code>
          {`console.log("👉 A");
observableFriend.firstName = "Chandler";
console.log("👉 B");
observableFriend.lastName = "Bing";
console.log("👉 C");`}
        </Code>
      </Section>
      <Section>
        Type:
        <Code>
          {`runInAction(()=> {
  console.log("👉 A");
  observableFriend.firstName = "Chandler";
  console.log("👉 B");
  observableFriend.lastName = "Bing";
  console.log("👉 C");
})
console.log("👉 D");`}
        </Code>
      </Section>
      <Section>
        Type:
        <Code>
          {`runInAction(()=> {
  console.log("👉 A");
  observableFriend.firstName = "Chandler";
  console.log("👉 B");
  observableFriend.lastName = "Bing";
  console.log("👉 C");
  observableFriend.firstName = "Ross";
  observableFriend.lastName = "Geller";
})`}
        </Code>
      </Section>
      <Section>
        Type:
        <Code>
          {`const fullName = observableFriend.fullName;
autorun(() => {
  console.log("👉 [autorun]", fullName);
});`}
        </Code>
      </Section>
      <Section>
        Type:
        <Code>
          {`  get fullName() {
    console.log("👉 [get fullName]");
    return \`\${this.firstName} \${this.lastName}\`;
  },`}
        </Code>
        ...and:
        <Code>
          {`autorun(() => {
  console.log(
    "👉 [autorun]",
    observableFriend.fullName,
    observableFriend.fullName
  );
});`}
        </Code>
        ...then in a console:<code>observableFriend.fullName</code>
      </Section>
      <Section>
        Type:
        <Code>{`const settings = observable({ showLastName: true });
window.settings = settings;`}</Code>
        ...and:
        <Code>
          {`get fullName() {
    if (settings.showLastName) {
      return \`\${this.firstName} \${this.lastName}\`;
    } else {
      return this.firstName;
    }
  },`}
        </Code>
        ...then in a console:
        <Code>{`settings.showLastName = false;
observableFriend.lastName = "Bing";`}</Code>
      </Section>
      <Section>
        Change <code>get fullName()</code> to:
        <Code>{`getFullName() {`}</Code>
        ...and:
        <Code>
          {`autorun(() => {
  console.log("👉 [autorun]",
    observableFriend.getFullName()
  );
});`}
        </Code>
      </Section>
    </Demo>
  );
}
