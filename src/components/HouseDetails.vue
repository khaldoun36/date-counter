<template>
  <div class="house-details">
    <h2 class="house-location">{{ house.location }}</h2>
    <p class="house-price">{{ house.price }} / {{ currency }} per night</p>
    <div class="house-image">
      <img :src="house.image" alt="" />
    </div>
  </div>
</template>

<script setup>
// props import
const props = defineProps({
  house: Object,
});

// set pricing currency
const currency = props.house.location === "london" ? "£" : "AED";
</script>

<style>
.house-details {
  display: flex;
  flex-direction: column;
  gap: var(--size-5);
  justify-content: flex-start;
  margin-bottom: var(--size-10);
}

.house-details > * {
  padding-block: var(--size-2);
}

.house-location {
  font-size: var(--size-7);
  text-transform: capitalize;
  font-weight: 700;
}
.house-price {
  font-size: var(--size-4);
}

.house-image {
  max-width: 45%;
}
</style>
