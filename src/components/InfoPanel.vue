<template lang="pug">
  HeroPanel(:title='dog && dog.displayName', :handleNewDog='handleNewDog')
</template>

<script>
import HeroPanel from './HeroPanel'
export default {
  components: {
    HeroPanel
  },
  props: {
    dog: Object,
    handleNewDog: Function
  }
}
</script>

