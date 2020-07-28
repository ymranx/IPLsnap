<template>
  <div class="season-bar">
    <div
      v-bind:class="`season-pod pod-${(idx) % 7}`"
      v-for="(season, idx) in seasons"
      :key="season"
    >
      <div class="season-text">{{season}}</div>
    </div>
  </div>
</template>

<script type="text/javascript" src="./SeasonBar.js"></script>
<style lang="less" src="./SeasonBar.less"></style>
