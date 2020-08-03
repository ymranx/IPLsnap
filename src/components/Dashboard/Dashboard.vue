<template>
  <div class="dashboard">
    <div class="section-top">
      <SeasonBar v-bind:seasons="seasons"></SeasonBar>
    </div>
    <div class="section-bottom">
      <div class="left">
        <div class="season-title">Season : {{ selectedSeason }}</div>
        <TeamView v-bind:team-data="queryTeamData.teamData"></TeamView>
      </div>
      <div class="right">
        <div class="sub-section">
          <div class="section-title">
            Top venue
            <i class="ico-map-pin"></i>
          </div>
          <ul class="list-view">
            <li v-for="venue in queryTeamData.venueData" :key="venue.city">
              <span class="list-text">{{ venue.city }}</span>
              <span class="badge">{{ venue.count }}</span>
            </li>
          </ul>
        </div>
        <br />
        <div class="sub-section">
          <div class="section-title">
            Top players
            <i class="ico-user"></i>
          </div>
          <ul class="list-view">
            <li v-for="player in queryTeamData.playerData" :key="player.player">
              <span class="list-text">{{ player.player }}</span>
              <span class="badge">{{ player.count }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer>
      <a class="ico-github" href="https://www.github.com"></a>
      <a class="ico-linkedin" href="www.github.com"></a>
    </footer>
  </div>
</template>

<script type="text/javascript" src="./Dashboard.js"></script>
<style scopend lang="less" src="./Dashboard.less"></style>
