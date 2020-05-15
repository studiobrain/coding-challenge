import { types } from "mobx-state-tree";
import Chance from "chance";

const chance = new Chance();
const NotificationModel = types.model("NotificationModel", {
  priority: types.maybe(types.number),
  message: types.maybe(types.string),
  id: types.maybe(types.number),
});

export const ServiceStore = types
  .model("ServiceStore", {
    generating: types.optional(types.boolean, true),
    timeStep: types.maybe(types.number),
    errorsList: types.optional(types.array(NotificationModel), []),
    warningsList: types.optional(types.array(NotificationModel), []),
    informationList: types.optional(types.array(NotificationModel), []),
    currentSnackbarError: types.maybeNull(NotificationModel),
  })
  .actions((self) => ({
    generateMessages() {
      if (self.generating) {
        const priority = self.generateRandomNumber(1, 3);
        const timeStep = self.generateRandomNumber(500, 3000);
        const notification = {
          message: chance.string(),
          priority: priority,
          id: self.generateRandomNumber(1000000000, 10000000000),
        };
        self.addNotificationToList(notification);

        setTimeout(() => {
          self.generateMessages();
        }, timeStep);
      }
    },

    addNotificationToList: (notification) => {
      if (notification.priority === 1) {
        self.currentSnackbarError = notification;
        setTimeout(() => {
          self.removeSnackBar();
        }, 2000);
      }

      const priorities = {
        1: () => self.errorsList.unshift(notification),
        2: () => self.warningsList.unshift(notification),
        3: () => self.informationList.unshift(notification),
      };

      priorities[notification.priority]();
    },

    removeSnackBar: () => {
      self.currentSnackbarError = null;
    },

    removeNotification: (item, type) => {
      const lists = {
        error: () => self.errorsList.splice(self.errorsList.indexOf(item), 1),
        warning: () =>
          self.warningsList.splice(self.warningsList.indexOf(item), 1),
        information: () =>
          self.informationList.splice(self.informationList.indexOf(item), 1),
      };

      lists[type]();
    },

    removeAllNotifications: () => {
      self.errorsList = [];
      self.warningsList = [];
      self.informationList = [];
    },

    generateRandomNumber: (min, max) => {
      return Math.round(Math.random() * (max - min) + min);
    },

    toggleGeneration: () => {
      self.generating = !self.generating;
      !!self.generating && self.generateMessages();
    },
  }))
  .views((self) => ({}));
