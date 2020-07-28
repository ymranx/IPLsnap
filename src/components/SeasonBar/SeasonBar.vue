<template>
  <div class="season-bar">
    <div class="season-pod" v-for="season in seasons" :key="season">
      <div class="season-text">{{season}}</div>
    </div>
  </div>
</template>

<script type="text/javascript" src="./SeasonBar.js"></script>
<style lang="less" src="./SeasonBar.less"></style>
