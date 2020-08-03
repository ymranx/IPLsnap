// import { get } from 'lodash';
import SeasonBar from '@/components/SeasonBar/SeasonBar.vue';
import TeamView from '@/components/TeamView/TeamView.vue';

export default {
  name: 'Dashboard',
  components: {
    SeasonBar,
    TeamView
  },
  created() {},

  computed: {
    seasons() {
      return this.$store.getters.seasonYears;
    },
    selectedSeason() {
      return this.$store.state.selectedSeason;
    },
    seasonData() {
      return this.$store.getters.seasonYears;
    },
    queryTeamData() {
      const { selectedSeason } = this.$store.state;
      let inputData = this.$store.state.datasets;
      const teams = this.$store.getters.teams;
      if (selectedSeason !== 'all') {
        inputData = this.$store.getters.getDataBySeason(selectedSeason);
      }
      const teamWise = teams.reduce((result, cur) => {
        result[cur] = { played: 0, won: 0, toss_won: 0, bat: 0, field: 0 };
        return result;
      }, {});
      const venuePlayed = {};
      const topPlayers = {};
      inputData.forEach((match) => {
        const {
          team1,
          team2,
          toss_winner,
          winner,
          toss_decision,
          player_of_match,
          city
        } = match;
        teamWise[team1].played += 1;
        teamWise[team2].played += 1;
        teamWise[toss_winner].toss_won += 1;
        teamWise[toss_winner][toss_decision] += 1;
        if (winner) {
          teamWise[winner].won += 1;
        }
        if (city in venuePlayed) {
          venuePlayed[city] += 1;
        } else {
          venuePlayed[city] = 0;
        }
        if (player_of_match in topPlayers) {
          topPlayers[player_of_match] += 1;
        } else {
          topPlayers[player_of_match] = 0;
        }
      });
      const teamData = Object.keys(teamWise)
        .map((team) => {
          return { team, ...teamWise[team] };
        })
        .filter(({ played }) => {
          return played > 0;
        })
        .sort((cur, nxt) => {
          return cur.played / cur.won - nxt.played / nxt.won;
        });
      const venueData = Object.keys(venuePlayed)
        .map((venue) => {
          return { city: venue, count: venuePlayed[venue] };
        })
        .sort((cur, nxt) => {
          return nxt.count - cur.count;
        })
        .slice(0, 10);
      const playerData = Object.keys(topPlayers)
        .map((player) => {
          return { player, count: topPlayers[player] };
        })
        .sort((cur, nxt) => {
          return nxt.count - cur.count;
        })
        .slice(0, 10);
      return {
        teamData,
        venueData,
        playerData
      };
    }
  }
};
