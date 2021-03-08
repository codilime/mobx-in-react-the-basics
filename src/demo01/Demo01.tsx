import "./Demo01-console";
import { Demo } from "../common/demo/Demo";
import { Section } from "../common/section/Section";

export default function Demo01() {
  return (
    <Demo title="Demo 01 - observer(...) and autorun(...)">
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
        <pre>
          <code>
            {`configure({
  enforceActions: "never",
});`}
          </code>
        </pre>
      </Section>
      <Section>
        Change <code>autorun(...)</code> code to observe <code>.fullName</code>{" "}
        property
      </Section>
      <Section>
        Type:
        <pre>
          <code>
            {`console.log("A");
observableRoss.firstName = "Chandler";
console.log("B");
observableRoss.lastName = "Bing";
console.log("C");`}
          </code>
        </pre>
      </Section>
      <Section>
        Type:
        <pre>
          <code>
            {`runInAction(()=> {
  console.log("A");
  observableRoss.firstName = "Chandler";
  console.log("B");
  observableRoss.lastName = "Bing";
  console.log("C");
})
console.log("D");`}
          </code>
        </pre>
      </Section>
      <Section>
        Type:
        <pre>
          <code>
            {`runInAction(()=> {
  console.log("A");
  observableRoss.firstName = "Chandler";
  console.log("B");
  observableRoss.lastName = "Bing";
  console.log("C");
  observableRoss.firstName = "Ross";
  observableRoss.lastName = "Geller";
})`}
          </code>
        </pre>
      </Section>
      <Section>
        Type:
        <pre>
          <code>
            {`const fullName = observableRoss.fullName;
autorun(() => {
  console.log("Friend from autorun():", fullName);
});`}
          </code>
        </pre>
      </Section>
    </Demo>
  );
}
