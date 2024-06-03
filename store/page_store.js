import { makeAutoObservable } from "mobx";

class pageStore {
  constructor() {
    makeAutoObservable(this);
  }
  
}
export default pageStore;
