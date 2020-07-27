<template>
  <div class="dashboard">
    <div class="section-top"></div>
    <div class="section-bottom">
      <div v-for="season in seasons" :key="season">{{ season }}</div>
    </div>
  </div>
</template>

<script type="text/javascript" src="./Dashboard.js"></script>
<style scopend src="./Dashboard.css"></style>
