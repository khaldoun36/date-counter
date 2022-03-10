<template>
  <section class="destinations container" @click="chooseDestination">
    <div v-for="destination in destinations" :key="destination.name">
      <DestinationCard :destination="destination" />
    </div>
  </section>
</template>

<script setup>
import DestinationCard from "./DestinationCard.vue";
import destinations from "../data/destinationData";
</script>

<style>
.destinations {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
}

.destinations > * {
  flex-grow: 1;
}
</style>
