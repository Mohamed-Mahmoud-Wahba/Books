<template lang="pug">
div  
    section.bg
        h1.text-center 404
        div.justify-content-center.d-flex
            router-link(to="/").text-center Go To Home
</template>

<script lang="ts" setup>
name: 'error'

</script>

<style scoped lang="scss">
.bg{
    background-color: hsl(51deg 69% 40%);
  padding-top: 209px;
  padding-bottom: 250px;
  color: #fff;
  margin-top: -8px;
  h1{
    font-size: 270px;
  }
  a{
    color: hsl(51deg 69% 40%);
    background-color: #fff;
    width: 250px;
    padding: 15px 0 15px 0;
    border-radius: 50px;

  }
}
</style>