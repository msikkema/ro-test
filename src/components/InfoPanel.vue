<template lang="pug">
  InfoPanelWrapper
    HeroPanel(
      :title='dog && dog.displayName',
      :handleNewDog='handleNewDog',
      :handleSaveDog='handleSaveDog',
      :isCurrentDogSaved='isCurrentDogSaved',
      :handleToggleFavouritesModal='handleToggleFavouritesModal'
    )
    DogPanelWrapper
      DogPanel(v-if='dog', :imageUrl='dog.imageUrl', :title='dog.displayName' big)
</template>

<script>
import styled from 'vue-styled-components'
import HeroPanel from './HeroPanel'
import DogPanel from './DogPanel'
import { DeadCenter } from '../theme/positioning'
import Spinner from './Spinner'

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
    DogPanelWrapper,
    Spinner
  },
  props: {
    dog: Object,
    handleNewDog: Function,
    handleSaveDog: Function,
    isCurrentDogSaved: Boolean,
    handleToggleFavouritesModal: Function
  }
}
</script>

