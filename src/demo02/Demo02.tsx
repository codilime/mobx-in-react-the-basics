import "./Demo02-console";
import { Demo } from "../common/demo/Demo";
import { Section } from "../common/section/Section";

export default function Demo02() {
  return (
    <Demo title="Demo 02 - make(Auto)Observable(...)">
      <Section>
        Open console, then type: <code>plainRoss === makeObservableRoss</code>{" "}
        and press ENTER
      </Section>
      <Section>
        Type: <code>plainRoss === observableRoss</code>
      </Section>
      <Section>
        Type: <code>plainRoss</code>
      </Section>
      <Section>
        Type:
        <code>plainRoss.setName('Chandler', 'Bing')</code>
      </Section>
      <Section>
        Type:
        <code>observableRoss.setName('Rossie', 'Gellerio')</code>
      </Section>
      <Section>
        Change <code>makeObservable</code> to <code>makeAutoObservable</code>
      </Section>
      <Section>
        Add not existing <code>age</code> props to <code>autorun()</code>
        <pre>
          <code>
            {`autorun(() => {
  console.table({
    plainRoss: plainRoss.fullName,
    makeObservableRoss: makeObservableRoss.fullName,
    observableRoss: observableRoss.fullName,
    // @ts-ignore
    observableRossAge: observableRoss.age,
    // @ts-ignore
    makeObservableRossAge: makeObservableRoss.age,
  });
});`}
          </code>
        </pre>
        then type: <code>observableRoss.age = 30</code> and{" "}
        <code>makeObservableRoss.age = 30</code>
      </Section>
    </Demo>
  );
}
