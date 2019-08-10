<template lang="pug">
  InfoPanelWrapper
    HeroPanel(
      :title='dog && dog.displayName',
      :handleNewDog='handleNewDog',
      :handleSaveDog='handleSaveDog'
    )
    DogPanelWrapper(v-if="dog")
      DogPanel(:imageUrl='dog.imageUrl', :title='dog.displayName' big)
</template>

<script>
import styled from 'vue-styled-components'
import HeroPanel from './HeroPanel'
import DogPanel from './DogPanel'
import { DeadCenter } from '../theme/positioning'

const InfoPanelWrapper = styled.div``

const DogPanelWrapper = styled(DeadCenter)`
  width: 100%;
  height: 100%;
`

export default {
  components: {
    InfoPanelWrapper,
    HeroPanel,
    DogPanel,
    DeadCenter,
    DogPanelWrapper
  },
  props: {
    dog: Object,
    handleNewDog: Function,
    handleSaveDog: Function
  }
}
</script>

