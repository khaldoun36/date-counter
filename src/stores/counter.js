import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    checkIn: new Date(),
    checkOut: new Date(),
    destination: "all",
  }),
  actions: {
    changeCheckIn(ReceivedCheckIn) {
      this.checkIn = ReceivedCheckIn;
    },
    changeCheckOut(ReceivedCheckOut) {
      this.checkOut = ReceivedCheckOut;
    },
    changeDestination(ReceivedDestintion) {
      this.destination = ReceivedDestintion;
    },
  },
});
