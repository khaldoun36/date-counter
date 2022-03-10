<template>
  <main class="selection-view bg-light container body-container">
    <h2 class="text-dark ff-sans">Selected Dates</h2>
    <Calendar
      v-model:checkIn="userCheckIn"
      v-model:checkOut="userCheckOut"
      class="calendar"
    />
    <!-- :booked-dates="bookedDates" -->
    <div class="house-container">
      <div v-for="house in filteredHouses" :key="house.id">
        <HouseDetails :house="house" />
      </div>
    </div>
  </main>
</template>

<script setup>
// Components Import
import { Calendar } from "vue-calendar-3";

// Data Import
import houses from "../data/housesData";

// Styles Import
import "vue-calendar-3/style";
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
    return houses.filter((house) => house.location === store.destination);
  }
});

console.log(filteredHouses.value);
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
  outline: 1px red solid;
}
</style>
