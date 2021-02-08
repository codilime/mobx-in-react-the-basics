import "./Demo02-console";

export default function Demo02() {
  return (
    <>
      <h1>Demo 02 - make(Auto)Observable(...)</h1>
      <ol>
        <li>
          Open console, then type: <code>plainRoss === makeObservableRoss</code>{" "}
          and press ENTER
        </li>
        <li>
          Type: <code>plainRoss === observableRoss</code>
        </li>
        <li>
          Type: <code>plainRoss</code>
        </li>
        <li>
          Type:
          <code>plainRoss.setName('Chandler', 'Bing')</code>
        </li>
        <li>
          Type:
          <code>observableRoss.setName('Rossie', 'Gellerio')</code>
        </li>
        <li>
          Change <code>makeObservable</code> to <code>makeAutoObservable</code>
        </li>
      </ol>
    </>
  );
}
