// @ts-nocheck
import { createContext, useContext, useMemo } from "react";
import remotedev from "mobx-remotedev"
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

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

class FriendsStore {
  status = "";
  friends = [];
  get isLoading() {
    return this.status === "pending";
  }
  constructor() {
    makeAutoObservable(this);
    // remotedev(this, {global: true, name: this.constructor.name});
  }
  *fetchFriends() {
    this.status = "pending";
    try {
      const response = yield fetch("/data/friends.json").then((r) => r.json());
      this.friends = response.map(
        ({ firstName, lastName }) => new Friend(firstName, lastName)
      );
      this.status = "success";
    } catch (e) {
      this.status = "error";
    }
  }
  // importState(state) {
  //   this.status = state.status;
  //   this.friends = state.friends.map(
  //     ({ firstName, lastName }) => new Friend(firstName, lastName)
  //   );
  // }
}

const friendsStore = new FriendsStore();
window.friendsStore = friendsStore;

export const FriendsApp = observer(() => {
  return (
    <section>
      <FriendsToolbar />
      <FriendsList />
    </section>
  );
});

const FriendsToolbar = observer(() => {
  const { friends } = friendsStore;
  return (
    <>
      <button onClick={() => friendsStore.fetchFriends()}>Fetch Friends</button>
      <button
        onClick={() => friends[2].setName("Chandler", `Bing ${Math.random()}`)}
      >
        Update 3rd friend
      </button>
    </>
  );
});

const FriendsList = observer(() => {
  const { friends, isLoading } = friendsStore;
  if (isLoading) {
    return <div>Loading...</div>
  } else {
    return (
      <ul>
        {friends.map((friend) => (
          <FriendDetails key={friend.fullName} friend={friend}/>
        ))}
      </ul>
    );
  }
});

const FriendDetails = observer(({ friend }) => {
  return <li>{friend.fullName}</li>;
});
