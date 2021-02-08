import { autorun, observable } from "mobx";

const friends = observable([
  { fullName: "Ross Geller" },
  { fullName: "Rachel Green" },
  { fullName: "Joey Trribbiani" },
]);

autorun(() => {
  console.log("\x1b[36m Friends from autorun():");
  console.log(friends.map((f) => f.fullName).join(", \n"));
});

window.friends = friends;
