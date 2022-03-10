<template>
  <main class="body-container container">
    <Calendar
      v-model:checkIn="userCheckIn"
      v-model:checkOut="userCheckOut"
      :booked-dates="bookedDates"
      class="calendar"
    />
    <DestinationsContainer />
    <ChangeButon @click="handleClick" class="submit-button" />
  </main>
</template>

<script setup>
// Components Import
import { Calendar } from "vue-calendar-3";
import DestinationsContainer from "../components/DestinationsContainer.vue";
import ChangeButon from "../components/SubmitButon.vue";

// Styles Import
import "vue-calendar-3/style";

// Hooks Import
import { useRouter } from "vue-router";
import { ref } from "vue";

// Pinia Store to store the user chosen destination
import { useCounterStore } from "../stores/counter";

// Calendar related variables
const userCheckIn = ref(null);
const userCheckOut = ref(null);
const bookedDates = ref(["2022-03-29", "2022-03-30", "2022-03-31"]);

// to retrive and manipulate store values
const store = useCounterStore();

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

.calendar {
  outline: 1px solid var(--clr-dark);
  border-radius: var(--radius-2);
  font-family: var(--sans-normal);
  color: var(--clr-dark);
}
.submit-button {
  align-self: flex-start;
}
</style>
