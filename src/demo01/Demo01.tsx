import "./Demo01-console";
import { Demo } from "../_/demo/Demo";
import { Section } from "../_/section/Section";

export default function Demo01() {
  return (
    <Demo title="Demo 01 - observer(...) and autorun(...)">
      <Section>
        Open console, then type: <code>plainRoss</code> and press ENTER
      </Section>
      <Section>
        Type: <code>observableRoss</code> and press ENTER
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
        <br />
        <code>
          <pre>
            {`configure({
  enforceActions: "never",
});`}
          </pre>
        </code>
      </Section>
      <Section>
        Change <code>autorun(...)</code> code to observe <code>.fullName</code>{" "}
        property
      </Section>
      <Section>
        Type:
        <br />
        <code>
          <pre>
            {`console.log("A");
observableRoss.firstName = "Chandler";
console.log("B");
observableRoss.lastName = "Bing";
console.log("C");`}
          </pre>
        </code>
      </Section>
      <Section>
        Type:
        <br />
        <code>
          <pre>
            {`runInAction(()=> {
  console.log("A");
  observableRoss.firstName = "Chandler";
  console.log("B");
  observableRoss.lastName = "Bing";
  console.log("C");
})
console.log("D");`}
          </pre>
        </code>
      </Section>
      <Section>
        Type:
        <br />
        <code>
          <pre>
            {`runInAction(()=> {
  console.log("A");
  observableRoss.firstName = "Chandler";
  console.log("B");
  observableRoss.lastName = "Bing";
  console.log("C");
  observableRoss.firstName = "Ross";
  observableRoss.lastName = "Geller";
})`}
          </pre>
        </code>
      </Section>
      <Section>
        Type:
        <br />
        <code>
          <pre>
            {`const fullName = observableRoss.fullName;
autorun(() => {
  console.log("Friend from autorun():", fullName);
});`}
          </pre>
        </code>
      </Section>
    </Demo>
  );
}
