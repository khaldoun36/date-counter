<template>
  <div class="bg-light">
    <header class="primary-nav">
      <router-link to="/" class="logo ff-serif text-accent"
        >Travelly</router-link
      >
    </header>
    <router-view />
  </div>
</template>

<script setup></script>

<style>
.primary-nav {
  margin: var(--size-7) var(--size-fluid-4);
}

.primary-nav > .logo {
  font-size: var(--size-7);
}
</style>
