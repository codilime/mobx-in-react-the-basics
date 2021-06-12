import { autorun, observable } from "mobx";

const friends = observable([
  { fullName: "Ross Geller" },
  { fullName: "Rachel Green" },
  { fullName: "Joey Tribbiani" },
]);

autorun(() => {
  console.log("👉 Friends from autorun() 👉 ");
  console.log(friends.map((f) => f.fullName).join(", \n"));
});

window.friends = friends;
