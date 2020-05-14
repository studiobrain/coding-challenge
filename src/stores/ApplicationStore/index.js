import { types, getSnapshot, applySnapshot } from "mobx-state-tree";
import { ServiceStore } from "../ServiceStore";

let initialState = {};

export const ApplicationStore = types
  .model("ApplicationStore", {
    initialized: types.optional(types.boolean, false),
    services: types.optional(ServiceStore, {}),
  })
  .actions((self) => ({
    initializeApplication: () => {
      self.initialized = !self.initialized;
    },

    afterCreate() {
      self.initializeApplication();
      initialState = getSnapshot(self);
      self.services.generateMessages();
    },

    resetApplication() {
      applySnapshot(self, initialState);
    },
  }))
  .views((self) => ({}));
