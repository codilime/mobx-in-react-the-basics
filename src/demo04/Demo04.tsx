import "./Demo04-console";
import { Demo } from "../common/demo/Demo";
import { Section } from "../common/section/Section";

export default function Demo04() {
  return (
    <>
      <Demo title="Demo 04 - Arrays">
        <Section>
          Open console, then type: <code>friends</code> then press ENTER
        </Section>
        <Section>
          Type:
          <pre>
            <code>
              {`runInAction(() => {
  friends[0].fullName = "Chandler Bing";
});`}
            </code>
          </pre>
        </Section>
        <Section>
          Type:
          <pre>
            <code>
              {`autorun(() => {
  console.log("Friends from autorun():");
  console.log(friends[0].fullName);
});

runInAction(() => {
  friends[1].fullName = "Monica Geller";
});`}
            </code>
          </pre>
        </Section>
        <Section>
          Type:
          <pre>
            <code>
              {`autorun(() => {
  console.log("Friends from autorun():");
  console.table(toJS(friends));
});`}
            </code>
          </pre>
          Then in a console...
          <pre>
            <code>{`friends.remove(friends[1])`}</code>
          </pre>
          <pre>
            <code>{`friends.clear()`}</code>
          </pre>
          <pre>
            <code>{`friends.replace( [ { fullName: "Chandler Bing" } ] )`}</code>
          </pre>
        </Section>
      </Demo>
    </>
  );
}
