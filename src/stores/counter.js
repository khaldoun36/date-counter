import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    checkIn: new Date(),
    checkOut: new Date(),
    destination: "all",
    /* 

    The period dates are assumed to be peak seasons, so only during these periods does the minimum stay apply.
    I can modify this behavior by removing the startAt and endAt dates, and that would apply the minimum stay 
    to all periods. 

    */
    periodDates: [
      {
        startAt: "2022-03-13",
        endAt: "2022-03-13",
        minimumDuration: 4,
        periodType: "nightly",
      },
    ],
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
