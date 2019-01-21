<template>
  <div class="pepCircle">
    <div class="pepLeft">左</div>
    <div class="pepRight">右</div>
  </div>
</template>

<script>
    export default {
        name: "index",
        layout:"topNav",

    }
</script>

<style scoped>
  .pepCircle{
    position: relative;
  }


  .pepRight{
    position: absolute;
  }
</style>
