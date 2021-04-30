import "./Demo05-console";
import { Demo } from "../common/demo/Demo";
import { Section } from "../common/section/Section";
import { action, runInAction } from "mobx";

export default function Demo05() {
  return (
    <>
      <Demo title="Demo 05 - Asynchronous actions">
        <Section>
          Open console, then type: <code>friendsStore.fetchFriends()</code> then
          press ENTER
        </Section>
        <Section>
          Async actions wrapped by <code>action()</code>:
          <pre>
            <code>
              {`  fetchFriends() {
    this.status = "pending";
    fetchJson("/data/friends.json")
      .then(
        action("fetchFriendsSuccess", (response) => {
          this.friends = response;
          this.status = "success";
        }),
        action("fetchFriendsError", () => {
          this.status = "error";
        })
      );
  }`}
            </code>
          </pre>
        </Section>
        <Section>
          Handle updates in separate actions:
          <pre>
            <code>
              {`  fetchFriends() {
    this.status = "pending";
    fetchJson("/data/friends.json")
      .then(this.fetchFriendsSuccess, this.fetchFriendsError);
  }

  fetchFriendsSuccess = (response: []) => {
    this.friends = response;
    this.status = "success";
  };

  fetchFriendsError = () => {
    this.status = "error";
  };`}
            </code>
          </pre>
        </Section>
        <Section>
          async/await + runInAction
          <pre>
            <code>
              {`  async fetchFriends() {
    this.status = "pending";
    try {
      const response = await fetchJson("/data/friends.json");
      runInAction(() => {
        this.friends = response;
        this.status = "success";
      });
    } catch (e) {
      runInAction(() => {
        this.status = "error";
      });
    }
  }`}
            </code>
          </pre>
        </Section>
        <Section>
          <code>flow</code> + generator function
          <pre>
            <code>
              {`  *fetchFriends() {
    this.status = "pending";
    try {
      const response = yield fetchJson("/data/friends.json");
      this.friends = response;
      this.status = "success";
    } catch (error) {
      this.status = "error";
    }
  }`}
            </code>
          </pre>
        </Section>
      </Demo>
    </>
  );
}
