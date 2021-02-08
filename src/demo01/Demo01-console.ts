import { autorun, observable } from "mobx";

const plainRoss = {
  firstName: "Ross",
  lastName: "Geller",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
const observableRoss = observable(plainRoss);

autorun(() => {
  console.log("\x1b[36m Friend from autorun():", observableRoss.firstName);
});

window.plainRoss = plainRoss;
window.observableRoss = observableRoss;
