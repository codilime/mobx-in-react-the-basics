// @ts-nocheck
import { action, autorun, computed, makeObservable, observable } from "mobx";

const friend = {
  firstName: "Ross",
  lastName: "Geller",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setName(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

const observableFriend = observable(friend);
makeObservable(friend, {
  firstName: observable,
  lastName: observable,
  fullName: computed,
  setName: action,
});

autorun(() => {
  console.log("👉 [autorun] friend:", friend.fullName);
  console.log("👉 [autorun] observableFriend:", observableFriend.fullName);
});

window.friend = friend;
window.observableFriend = observableFriend;
