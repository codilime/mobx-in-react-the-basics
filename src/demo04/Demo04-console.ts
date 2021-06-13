import { autorun, observable } from "mobx";

const friends = observable([
  { fullName: "Ross Geller" },
  { fullName: "Rachel Green" },
  { fullName: "Joey Tribbiani" },
]);

autorun(() => {
  console.log("👉 [autorun]", friends.map((f) => f.fullName).join(",  "));
});

window.friends = friends;
