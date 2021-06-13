import { autorun, observable } from "mobx";

const friend = {
  firstName: "Ross",
  lastName: "Geller",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
const observableFriend = observable(friend);

autorun(() => {
  console.log("👉 [autorun]", observableFriend.firstName);
});

window.friend = friend;
window.observableFriend = observableFriend;
