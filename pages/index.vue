<template>
  <div class="body">
    <div class="left">
      <leftNav></leftNav>
    </div>
    <div class="right">
      <nuxt />
    </div>
  </div>
</template>

<script>
import leftNav from "../components/leftNav";
export default {
  layout:"topNav",
  components: {
    leftNav
  }
}
</script>

<style>
  .body{
    padding-left: 2.08rem;
  }
  .left{
    position: fixed;
    top: 1.35rem;
    left: 1.65rem;
  }
</style>

