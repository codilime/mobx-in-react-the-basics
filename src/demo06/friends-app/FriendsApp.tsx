// @ts-nocheck
import { createContext, useContext, useMemo } from "react";
import remotedev from "mobx-remotedev";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

class Friend {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string
  ) {
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
    remotedev(this, { global: true, name: this.constructor.name });
  }

  *fetchFriends() {
    this.status = "pending";
    try {
      const response = yield fetch("/data/friends.json").then((r) => r.json());
      this.friends = response.map(
        ({ id, firstName, lastName }) => new Friend(id, firstName, lastName)
      );
      this.status = "success";
    } catch (e) {
      this.status = "error";
    }
  }
}

const FriendStoreContext = createContext<FriendsStore>();

export const FriendsApp = () => {
  const friendsStore = useMemo(() => new FriendsStore());
  return (
    <FriendStoreContext.Provider value={friendsStore}>
      <section>
        <FriendsToolbar />
        <FriendsList />
      </section>
    </FriendStoreContext.Provider>
  );
};

const FriendsToolbar = observer(() => {
  const friendsStore = useContext(FriendStoreContext);
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
  const friendsStore = useContext(FriendStoreContext);
  const { friends, isLoading } = friendsStore;
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {friends.map((friend) => (
          <FriendDetails key={friend.id} friend={friend} />
        ))}
      </ul>
    );
  }
});

const FriendDetails = observer(({ friend }) => {
  return <li>{friend.fullName}</li>;
});
