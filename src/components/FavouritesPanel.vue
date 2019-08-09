<template lang="pug">
  Wrapper
    HeadingWrapper
      Heading Your Favourite Dogs
    
    DogWrapper(v-for='dog in savedDogs')
      DogPanel(
        :imageUrl='dog.imageUrl',
        :title='dog.displayName'
      )
</template>

<script>
import styled from 'vue-styled-components'
import DogPanel from '../components/DogPanel'
import { StyledH2 } from '../theme/headings'
import { DeadCenter } from '../theme/positioning'

const Wrapper = styled.div`
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
    savedDogs: Array
  }
}
</script>
