<template>
  <div class="dashboard">
    <div class="section-top">
      <SeasonBar v-bind:seasons="seasons"></SeasonBar>
    </div>
    <div class="section-bottom">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script type="text/javascript" src="./Dashboard.js"></script>
<style scopend lang="less" src="./Dashboard.less"></style>
