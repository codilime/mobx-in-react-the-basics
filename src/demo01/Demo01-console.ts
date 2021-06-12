import { autorun, observable, runInAction } from "mobx";

const plainRoss = {
  firstName: "Ross",
  lastName: "Geller",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
const observableRoss = observable(plainRoss);

autorun(() => {
  console.log("👉 Friend from autorun() 👉", observableRoss.firstName);
});

runInAction(() => {
  console.log("👉 A");
  observableRoss.firstName = "Chandler";
  console.log("👉 B");
  observableRoss.lastName = "Bing";
  console.log("👉 C");
});
console.log("👉 D");

window.plainRoss = plainRoss;
window.observableRoss = observableRoss;
