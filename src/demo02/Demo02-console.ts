// @ts-nocheck
import { action, autorun, computed, makeObservable, observable } from "mobx";

const plainRoss = {
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

const observableRoss = observable(plainRoss);
makeObservable(plainRoss, {
  firstName: observable,
  lastName: observable,
  fullName: computed,
  setName: action,
});

autorun(() => {
  console.table({
    plainRossAge: plainRoss.age,
    observableRossAge: observableRoss.age,
  });
});

window.plainRoss = plainRoss;
window.observableRoss = observableRoss;
