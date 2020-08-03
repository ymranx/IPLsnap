<template>
  <div class="season-bar">
    <div
      class="season-pod"
      v-on:click="onSeasonSelect(season)"
      v-for="(season, idx) in seasons"
      :key="season"
    >
      <div v-bind:class="`season-text  pod-${idx % 7}`">
        <span>{{ season }}</span>
        <i v-show="season === selectedSeason" class="selected-icon ico-check"></i>
      </div>
      <div class="matches">
        <div class="matches-count">{{ getByYear(season).length }}</div>
        <div class="matches-text">Matches Played</div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript" src="./SeasonBar.js"></script>
<style lang="less" src="./SeasonBar.less"></style>
