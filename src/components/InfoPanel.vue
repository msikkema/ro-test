<template lang="pug">
  InfoPanelWrapper
    HeroPanel(
      :title='dog && dog.displayName',
      :handleNewDog='handleNewDog',
      :handleSaveDog='handleSaveDog'
    )
    div(v-if="dog")
      DogPanel(:imageUrl='dog.imageUrl', :title='dog.displayName')
</template>

<script>
import styled from 'vue-styled-components'
import HeroPanel from './HeroPanel'
import DogPanel from './DogPanel'

const InfoPanelWrapper = styled.div``

export default {
  components: {
    InfoPanelWrapper,
    HeroPanel,
    DogPanel
  },
  props: {
    dog: Object,
    handleNewDog: Function,
    handleSaveDog: Function
  }
}
</script>

