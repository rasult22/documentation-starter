<template>
  <div class="profile" style="">
    <div class="profile__img" :style="`background-image: url(${require('../assets/me.jpeg')})`">
      <!-- <img :src="require('../assets/me.jpeg')" alt=""> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Demo',
    data() {
      return {
        msg: 'Hello this is <demo-component>'
      }
    }
  }
</script>
<style lang="stylus" scoped>
 .profile
  display flex
  justify-content center
  &__img
    max-width: 200px
    border-radius: 100%;
    width 30vw;
    height 25vh;
    overflow: hidden;
    background-position: center;
    background-size: contain;
    img {
      display block
    }
  // background-image: url('@assets/me.jpeg')
)
</style>