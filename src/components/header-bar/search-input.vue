<template lang="pug">
  .search__input
    input(type="text" placeholder="搜尋")
    .search__icon
      icon(:icon=["fas", "search"])
</template>

<script>
export default {
  name: "search-input"
};
</script>

<style lang="scss" scoped>
.search__input {
  margin: 0 50px;
  width: 300px;
  display: flex;
  height: 50px;
  align-items: center;
}

input {
  padding: 10px;
  min-width: 200px;
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 4px 0 0 4px;
  background-color: $seaBlue;
  line-height: 50px;
  color: white;
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
  font-size: 1rem;
  line-height: 30px;
  color: white;
  border: 1px solid $seaBlue;
  border-radius: 0 2px 2px 0;
  background-color: $skyBlue;
}
</style>
