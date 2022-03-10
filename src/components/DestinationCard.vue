<template>
  <div class="card" :aria-selected="truth" @click="chooseDestination">
    <div class="card-image"></div>
    <h2 ref="destinationTitle" class="ff-sans text-light">Dubai</h2>
  </div>
</template>

<script setup>
import { ref } from "vue";
// Pinia Store to store the user chosen destination
import { useCounterStore } from "../stores/counter";

// to retrive and manipulate store values
const store = useCounterStore();

// to retrive the user selected destination
const destinationTitle = ref("null");

// to change aria value for accessibility and css manipulation
const truth = ref(false);

const chooseDestination = () => {
  store.changeDestination(
    destinationTitle.value.innerText.replace(/\s/g, "").toLowerCase()
  );
  truth.value = !truth.value;
};
</script>

<style>
.card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-4);
  overflow: hidden;
  background-color: var(--clr-accent);
  transition: transform 250ms ease-in-out;
  flex-grow: 1;
}

.card[aria-selected="true"] {
  transform: scale(1.125);
}

.card > h2 {
  order: 2;
  padding: var(--size-9) var(--size-7);
}

.card > .card-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  background-image: url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  order: 1;
}
</style>
