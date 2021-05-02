import { action, observable } from "mobx";

class AppState {
  @observable name = "Hello";
}

export default new AppState();
