<template>
  <main class="body-container container">
    <Calendar
      v-model:checkIn="userCheckIn"
      v-model:checkOut="userCheckOut"
      :booked-dates="bookedDates"
      :period-dates="periodDates"
      class="calendar-container"
    />
    <DestinationsContainer class="destination-container" />
    <ChangeButon @click="handleClick" class="submit-button" />
  </main>
</template>

<script setup>
// Components Import
import { Calendar } from "@khaldoonalnuaimi/vue-calendar-3";
import DestinationsContainer from "../components/DestinationsContainer.vue";
import ChangeButon from "../components/SubmitButon.vue";

// Styles Import
import "@khaldoonalnuaimi/vue-calendar-3/style";

// Hooks Import
import { useRouter } from "vue-router";
import { ref } from "vue";

// Pinia Store to store the user chosen destination
import { useCounterStore } from "../stores/counter";

// to retrive and manipulate store values
const store = useCounterStore();

// Calendar related variables
const userCheckIn = ref(null);
const userCheckOut = ref(null);
const bookedDates = ref([
  "2022-03-25",
  "2022-03-26",
  "2022-03-27",
  "2022-03-28",
  "2022-03-29",
]);

const periodDates = ref(store.periodDates);

// // to expose the rout object
const route = useRouter();

const handleClick = () => {
  store.changeCheckIn(userCheckIn.value);
  store.changeCheckOut(userCheckOut.value);
  route.push("/selection");
};
</script>

<style>
.body-container {
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}

.calendar-container {
  outline: 1px solid var(--clr-dark);
  border-radius: var(--radius-2);
  font-family: var(--sans-normal);
  color: var(--clr-dark);
  z-index: 1;
}

.destination-container {
  z-index: 0;
}
.submit-button {
  align-self: flex-start;
}
</style>
