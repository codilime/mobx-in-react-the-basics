import "./Demo03-console";
import { Demo } from "../common/demo/Demo";
import { Section } from "../common/section/Section";

export default function Demo03() {
  return (
    <Demo title="Demo 03 - Observable state">
      <Section>
        Open console, then type: <code>ross</code> and <code>rachel</code>
      </Section>
      <Section>
        Type: <code>ross instanceof Friend</code>
      </Section>
      <Section>
        Type: <code>rachel instanceof Friend</code>
      </Section>
    </Demo>
  );
}
