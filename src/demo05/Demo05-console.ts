import { autorun, makeAutoObservable, toJS } from "mobx";

class FriendsStore {
  status = "";
  friends = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchFriends() {
    this.status = "pending";
    try {
      const response = await fetchJson("/data/friends.json");
      this.friends = response;
      this.status = "success";
    } catch (e) {
      this.status = "error";
    }
  }
}

const friendsStore = new FriendsStore();

autorun(() => {
  console.log("Friends store from autorun():");
  console.log(toJS(friendsStore));
});

window.friendsStore = friendsStore;

async function fetchJson(url: string) {
  return await (await fetch(url)).json();
}
