import { autorun, observable, runInAction } from "mobx";

const friends = observable([
  { fullName: "Ross Geller" },
  { fullName: "Rachel Green" },
  { fullName: "Joey Trribbiani" },
]);

autorun(() => {
  console.log("Friends from autorun():");
  console.log(friends.map((f) => f.fullName).join(", \n"));
});

runInAction(() => {
  friends[0].fullName = "Chandler Bing";
});

window.friends = friends;
