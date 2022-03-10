<template>
  <button class="button">Submit</button>
</template>

<script setup>
// imports
// variables
// functions
</script>

<style>
/* Button Styiling */
.button {
  cursor: pointer;
  background-color: var(--clr-accent);
  font-size: var(--size-4);
  color: #fff;
  display: inline-grid;
  place-items: center;
  padding: var(--size-3) var(--size-7);
  margin-right: var(--size-4);
  border-radius: var(--radius-3);
  border: none;
  transition: box-shadow 0.1s linear;
}
.button:hover {
  box-shadow: var(--shadow-4);
}
.button:focus {
  border: none;
  outline: none;
}
</style>
