import "./Demo01-console";
import { Demo } from "../common/demo/Demo";
import { Section } from "../common/section/Section";
import { Code } from "../common/code/Code";

export default function Demo01() {
  return (
    <Demo title="Demo 01 - observable(...) and autorun(...)">
      <Section>
        Open console, then type: <code>plainRoss</code> then press ENTER
      </Section>
      <Section>
        Type: <code>observableRoss</code> then press ENTER
      </Section>
      <Section>
        Type: <code>plainRoss.firstName = 'Chandler'</code> and see what
        happened
      </Section>
      <Section>
        Type: <code>observableRoss.firstName = 'Chandler'</code> and see what
        happened
      </Section>
      <Section>
        Type: <code>observableRoss.lastName = 'Bing'</code> and see what
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
        Change <code>autorun(...)</code> code to observe <code>.fullName</code>{" "}
        property
      </Section>
      <Section>
        Type:
        <Code>
          {`console.log("👉 A");
observableRoss.firstName = "Chandler";
console.log("👉 B");
observableRoss.lastName = "Bing";
console.log("👉 C");`}
        </Code>
      </Section>
      <Section>
        Type:
        <Code>
          {`runInAction(()=> {
  console.log("👉 A");
  observableRoss.firstName = "Chandler";
  console.log("👉 B");
  observableRoss.lastName = "Bing";
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
  observableRoss.firstName = "Chandler";
  console.log("👉 B");
  observableRoss.lastName = "Bing";
  console.log("👉 C");
  observableRoss.firstName = "Ross";
  observableRoss.lastName = "Geller";
})`}
        </Code>
      </Section>
      <Section>
        Type:
        <Code>
          {`const fullName = observableRoss.fullName;
autorun(() => {
  console.log("👉 Friend from autorun() 👉", fullName);
});`}
        </Code>
      </Section>
      <Section>
        Type:
        <Code>
          {`  get fullName() {
    console.log("👉 CALLED get fullName()");
    return \`\${this.firstName} \${this.lastName}\`;
  },`}
        </Code>
        ...and:
        <Code>
          {`autorun(() => {
  console.log(
    "👉 Friend from autorun() 👉",
    observableRoss.fullName,
    observableRoss.fullName
  );
});`}
        </Code>
        ...then in a console:<code>console.log(observableRoss.fullName)</code>
      </Section>
    </Demo>
  );
}
