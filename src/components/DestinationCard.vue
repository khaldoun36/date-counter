<template>
  <div class="card" :aria-selected="truth" @click="chooseDestination">
    <div
      class="card-image"
      :style="{ backgroundImage: `url(${destination.image})` }"
    ></div>
    <h2 ref="destinationTitle" class="ff-sans text-light">
      {{ destination.name }}
    </h2>
  </div>
</template>

<script setup>
import { ref } from "vue";
// Pinia Store to store the user chosen destination
import { useCounterStore } from "../stores/counter";

// Recived Props

const props = defineProps({
  destination: Object,
});

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
}

.card[aria-selected="true"] {
  transform: scale(1.125);
}

.card > h2 {
  order: 2;
  padding: var(--size-9) var(--size-7);
}

.card > .card-image {
  aspect-ratio: 16/10;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  order: 1;
}
</style>
