<template>
  <section class="destinations container" @click="chooseDestination">
    <DestinationCard />
    <DestinationCard />
    <DestinationCard />
  </section>
</template>

<script setup>
import DestinationCard from "./DestinationCard.vue";
</script>

<style>
.destinations {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
}
</style>
