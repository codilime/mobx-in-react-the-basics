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
      </ol>
    </>
  );
}
