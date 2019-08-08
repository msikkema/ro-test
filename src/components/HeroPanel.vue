<template lang="pug">
HeroWrapper
  TitleAndButtons.title-and-buttons
    TitleWrapper.title-wrapper
      StyledH1 {{ title }}
    ButtonWrapper.button-wrapper
      ButtonGroup
        Button(label='New Random Dog', :handleClick='makeAlert')
        Button(label='Save This Dog', :handleClick='makeAlert')
</template>

<script>
import styled from 'vue-styled-components'
import { StyledH1 } from '../theme/headings'
import { VerticalCenter, DeadCenter, AlignRight, ButtonGroup } from '../theme/positioning'
import Button from './Button'

const ButtonWrapper = styled(AlignRight)`
  padding-top: 50px;
  width: 100%;
`

const TitleWrapper = styled(DeadCenter)`
  width: 100%;
`

const HeroWrapper = styled(VerticalCenter)`
  padding: 30px;
  color: ${props => props.theme.color.heroPrimary};
  background-color: ${props => props.theme.color.heroBackground};
  height: 175px;
`

const TitleAndButtons = styled.div`
  width: 100%;
`

export default {
  components: {
    HeroWrapper,
    StyledH1,
    TitleAndButtons,
    TitleWrapper,
    ButtonWrapper,
    Button,
    ButtonGroup
  },
  props: {
    title: String,
    buttons: Object
  },
  methods: {
    makeAlert() {
      window.alert('button clicked')
    }
  }
}
</script>

