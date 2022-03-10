<template>
  <div class="bg-light">
    <header class="primary-nav">
      <h1 class="logo ff-serif text-accent">Travelly</h1>
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
