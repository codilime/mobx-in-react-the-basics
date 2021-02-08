import {
  action,
  autorun,
  computed,
  makeAutoObservable,
  makeObservable,
  observable,
} from "mobx";

/**
 * Factory Function
 */
function createFriend(firstName: string, lastName: string) {
  return makeAutoObservable({
    firstName,
    lastName,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    setName(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    },
  });
}

/**
 * Observable state by `class` with `makeAutoObservable`
 */
class Friend {
  constructor(public firstName: string, public lastName: string) {
    makeAutoObservable(this);
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  setName(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

/**
 * Observable state by `class` with `makeObservable` and decorators
 */
class FriendWithDecorators {
  @observable firstName: string;
  @observable lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    makeObservable(this);
  }

  @computed
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @action
  setName(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const ross = new Friend("Ross", "Geller");
const rachel = createFriend("Rachel", "Green");

autorun(() => {
  console.table({
    ross: ross.fullName,
    rachel: rachel.fullName,
  });
});

window.ross = ross;
window.rachel = rachel;
window.Friend = Friend;
window.FriendWithDecorators = FriendWithDecorators;
