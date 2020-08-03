<template>
  <div class="home">
    <Dashboard />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard/Dashboard.vue';

export default {
  name: 'Home',
  components: {
    Dashboard
  },
  created() {
    this.$store.dispatch('fetchDatasets', 'IPLData.json');
  },
  watch: {
    $route(to) {
      const { season } = to.params;
      this.$store.commit('setSeason', season === '/' ? 'all' : season);
    }
  }
};
</script>
<style scoped>
.home {
  display: flex;
}
</style>
