<template lang="pug">
  Wrapper
    HeadingWrapper
      Heading {{ headingMessage }}
    
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

const Wrapper = styled.div`
  transition: ${props => props.theme.transition};
  width: 350px;
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
    DogWrapper
  },
  props: {
    savedDogs: Array,
    handleRemoveDog: Function
  },
  computed: {
    headingMessage() {
      const num = this.savedDogs.length
      return num > 0
        ?`Your${num > 1 ? ` ${num}` : ''} favourite dog breed${num > 1 ? 's' : ''}`
        : 'Start saving dog breeds to see them here'
    }
  }
}
</script>
