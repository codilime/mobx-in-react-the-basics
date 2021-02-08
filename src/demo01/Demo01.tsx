import "./Demo01-console";

export const Demo01 = () => {
  return (
    <>
      <h1>Demo 01 - observer(...) and autorun(...)</h1>
      <ol>
        <li>
          Open console, then type: <code>plainRoss</code> and press ENTER
        </li>
        <li>
          Type: <code>observableRoss</code> and press ENTER
        </li>
        <li>
          Type: <code>plainRoss.firstName = 'Chandler'</code> and see what
          happened
        </li>
        <li>
          Type: <code>observableRoss.firstName = 'Chandler'</code> and see what
          happened
        </li>
        <li>
          Type: <code>observableRoss.lastName = 'Bing'</code> and see what
          happened
        </li>
        <li>
          Add at the beginning:
          <br />
          <code>
            <pre>
              {`configure({
  enforceActions: "never",
});`}
            </pre>
          </code>
        </li>
        <li>
          Change <code>autorun(...)</code> code to observe{" "}
          <code>.fullName</code> property
        </li>
        <li>
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
        </li>
        <li>
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
})`}
            </pre>
          </code>
        </li>
        <li>
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
        </li>
        <li>
          Type:
          <br />
          <code>
            <pre>
              {`const fullName = observableRoss.fullName;
autorun(() => {
  console.log("\\x1b[36m Friend from autorun():", fullName);
});`}
            </pre>
          </code>
        </li>
      </ol>
    </>
  );
};
