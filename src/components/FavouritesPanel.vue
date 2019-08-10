<template lang="pug">
  Wrapper
    HeadingWrapper
      Heading {{ headingMessage }}

    MobileOnly
      Button(
        label='Close Favourites',
        :handleClick='handleToggleFavouritesModal'
      )
    
    DogWrapper(v-for='dog in savedDogs' :key='dog.id')
      DogPanel(
        :id='dog.id'
        :imageUrl='dog.imageUrl',
        :title='dog.displayName',
        :handleRemoveDog='handleRemoveDog'
      )
</template>

<script>
import styled from 'vue-styled-components'
import DogPanel from '../components/DogPanel'
import { StyledH2 } from '../theme/headings'
import { DeadCenter } from '../theme/positioning'
import Button from './Button'

const MobileOnly = styled(DeadCenter)`
  padding: 15px;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`

const Wrapper = styled.div`
  width: 100%;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 350px;
  }

  
  transition: ${props => props.theme.transition};
  min-height: 100%;
  color: ${props => props.theme.color.smallPanelPrimary};
  background-color: ${props => props.theme.color.smallPanelBackground};
`

const Heading = styled(StyledH2)`
  color: ${props => props.theme.color.smallPanelPrimary};
`

const HeadingWrapper = styled(DeadCenter)`
  height: 60px;
  text-align: center;
`

const DogWrapper = styled(DeadCenter)`
  padding: 7px;
`

export default {
  components: {
    Wrapper,
    DogPanel,
    Heading,
    HeadingWrapper,
    DogWrapper,
    Button,
    MobileOnly
  },
  props: {
    savedDogs: Array,
    handleRemoveDog: Function,
    handleToggleFavouritesModal: Function
  },
  computed: {
    headingMessage() {
      const num = this.savedDogs.length
      return num > 0
        ?`Your${num > 1 ? ` ${num}` : ''} favourite dog breed${num > 1 ? 's' : ''}`
        : 'No favourite breeds yet'
    }
  }
}
</script>
