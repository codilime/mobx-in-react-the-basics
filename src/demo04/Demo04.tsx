import "./Demo04-console";

export default function Demo04() {
  return (
    <>
      <h1>Demo 04 - Arrays</h1>
      <ol>
        <li>
          Open console, then type: <code>friends</code> and press ENTER
        </li>
        <li>
          Type:
          <br />
          <code>
            <pre>
              {`runInAction(() => {
  friends[0].fullName = "Chandler Bing";
});`}
            </pre>
          </code>
        </li>
        <li>
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
        </li>
      </ol>
    </>
  );
}
