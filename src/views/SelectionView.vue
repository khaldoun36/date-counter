<template>
  <main class="selection-view bg-light container body-container">
    <h2 class="text-dark ff-sans">Selected Dates</h2>
    <Calendar v-model:checkIn="userCheckIn" v-model:checkOut="userCheckOut" />
    <!-- :booked-dates="bookedDates" -->
    <div class="house-container">
      <div v-for="house in filteredHouses" :key="house.id">
        <HouseDetails :house="house" />
      </div>
    </div>
  </main>
</template>

<script setup>
// date fns import

import { isBefore } from "date-fns";
// Components Import
import { Calendar } from "@khaldoonalnuaimi/vue-calendar-3";

// Data Import
import houses from "../data/housesData";

// Styles Import
import "@khaldoonalnuaimi/vue-calendar-3/style";
import HouseDetails from "../components/HouseDetails.vue";

// Pinia Store to store the user chosen destination
import { useCounterStore } from "../stores/counter";
import { computed, ref } from "vue";

// to retrive and manipulate store values
const store = useCounterStore();

const userCheckIn = ref(store.checkIn);
const userCheckOut = ref(store.checkOut);

const filteredHouses = computed(() => {
  if (store.destination === "all") {
    return houses;
  } else {
    return houses.filter((house) => {
      return (
        house.location === store.destination &&
        isBefore(store.checkIn, new Date(house.bookedDates[0])) &&
        isBefore(store.checkOut, new Date(house.bookedDates[0]))
      );
    });
  }
});

console.log(
  isBefore(store.checkIn, new Date(houses[0].bookedDates[0])),
  isBefore(store.checkOut, new Date(houses[0].bookedDates[0]))
);
</script>

<style>
.selection-view > h2 {
  font-weight: 700;
  font-size: var(--size-5);
  align-self: flex-start;
}

.house-container {
  display: flex;

  gap: var(--size-4);
  flex-wrap: wrap;
  overflow-y: auto;
}
</style>
