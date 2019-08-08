<template lang="pug">
  HeroPanel(
    :title='dog && dog.displayName',
    :handleNewDog='handleNewDog',
    :handleSaveDog='handleSaveDog'
  )
</template>

<script>
import HeroPanel from './HeroPanel'
export default {
  components: {
    HeroPanel
  },
  props: {
    dog: Object,
    handleNewDog: Function,
    handleSaveDog: Function
  }
}
</script>

