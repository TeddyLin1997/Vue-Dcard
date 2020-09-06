<template lang="pug">
  .search-input
    input(v-model="searchKey" @keyup.enter="search()" type="search" placeholder="搜尋")
    button.search__icon(type="button" @click="search()")
      awesome-icon(:icon=["fas", "search"])
</template>

<script>
export default {
  name: "search-input",

  data() {
    return {
      searchKey: ""
    };
  },

  watch: {
    "$route.query": {
      deep: true,
      handler() {
        this.getQuery();
      }
    }
  },

  methods: {
    getQuery() {
      if (this.$route.query.search !== undefined) {
        this.searchKey = this.$route.query.search;
      }
    },

    search() {
      this.$router
        .push({
          name: "search",
          query: { search: this.searchKey }
        })
        .catch(() => location.reload());
    }
  }
};
</script>

<style lang="scss" scoped>
.search-input {
  margin: 0 50px 0 20px;
  width: 500px;
  display: flex;
  height: 50px;
  align-items: center;
}

input {
  padding: 10px;
  min-width: 380px;
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 4px 0 0 4px;
  background-color: $seaBlue;
  line-height: 50px;
  color: #fff;
  font-size: 0.9rem;

  &:focus {
    outline: none;
  }
}

input::placeholder {
  color: #dddddd;
}

.search__icon {
  padding-top: 1px;
  width: 40px;
  height: 30px;
  color: #fff;
  border: 1px solid $seaBlue;
  border-radius: 0 2px 2px 0;
  background-color: $skyBlue;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}
</style>
