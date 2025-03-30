<script setup lang="ts">
import AdviceGrid from './components/AdviceGrid.vue';
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <h1>Advice Management System</h1>
    </header>
    <main class="app-main">
      <AdviceGrid />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: #f0f2f5;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

.app-container {
  width: 100%;
  max-width: none;
}

.app-header {
  background: #1976d2;
  color: white;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.app-header h1 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 500;
}

.app-main {
  flex: 1;
  padding: 2rem;
  background: white;
  width: 100%;
  min-height: calc(100vh - 80px);
  margin: 0;
  border-radius: 0;
  box-shadow: none;
}
</style>