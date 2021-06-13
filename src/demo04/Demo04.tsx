import "./Demo04-console";
import { Demo } from "../common/demo/Demo";
import { Section } from "../common/section/Section";
import { Code } from "../common/code/Code";

export default function Demo04() {
  return (
    <>
      <Demo title="Demo 04 - Arrays">
        <Section>
          Open console, then type: <code>friends</code> then press ENTER
        </Section>
        <Section>
          Type:
          <Code>
            {`runInAction(() => {
  friends[0].fullName = "Chandler Bing";
});`}
          </Code>
        </Section>
        <Section>
          Type:
          <Code>
            {`autorun(() => {
  console.log("👉 [autorun]", friends[2].fullName);
});`}
          </Code>
        </Section>
        <Section>
          Type:
          <Code>
            {`autorun(() => {
  console.log("👉 [autorun]", toJS(friends));
});`}
          </Code>
          Then in a console...
          <Code>{`friends.remove(friends[1])`}</Code>
          <Code>{`friends.clear()`}</Code>
          <Code>{`friends.replace( [ { fullName: "Chandler Bing" } ] )`}</Code>
        </Section>
      </Demo>
    </>
  );
}
