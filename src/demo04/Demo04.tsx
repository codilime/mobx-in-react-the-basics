import "./Demo04-console";
import { Demo } from "../_/demo/Demo";
import { Section } from "../_/section/Section";

export default function Demo04() {
  return (
    <>
      <Demo title="Demo 04 - Arrays">
        <Section>
          Open console, then type: <code>friends</code> and press ENTER
        </Section>
        <Section>
          Type:
          <br />
          <code>
            <pre>
              {`runInAction(() => {
  friends[0].fullName = "Chandler Bing";
});`}
            </pre>
          </code>
        </Section>
        <Section>
          Type:
          <br />
          <code>
            <pre>
              {`autorun(() => {
  console.log("Friends from autorun():");
  console.log(friends[0].fullName);
});

runInAction(() => {
  friends[1].fullName = "Monica Geller";
});`}
            </pre>
          </code>
        </Section>
      </Demo>
    </>
  );
}
