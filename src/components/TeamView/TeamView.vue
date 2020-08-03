<template>
  <div class="team-view">
    <div class="grid-header">
      <div class="team-col">Teams</div>
      <div class="col">Played</div>
      <div class="col">Won</div>
      <div class="col">Toss won</div>
      <div class="col">Decided to</div>
    </div>
    <div class="grid-content">
      <div v-for="team in teamData" :key="team.team" class="grid-row">
        <div class="team-col">
          <div v-bind:class="`team-pod team-${abbr(team.team)}`">
            <div v-bind:class="`team-logo logo-${abbr(team.team)}`"></div>
            <span class="team-title">{{ team.team }}</span>
          </div>
        </div>
        <div class="col">{{ team.played }}</div>
        <div class="col">{{ team.won }}</div>
        <div class="col">{{ team.toss_won }}</div>
        <div class="col">
          <div>bat {{ team.bat }} times</div>
          <div>field {{ team.field }} times</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript" src="./TeamView.js"></script>
<style scopend lang="less" src="./TeamView.less"></style>
