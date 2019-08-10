<template lang="pug">
HeroWrapper
  TitleAndButtons.title-and-buttons
    TitleWrapper.title-wrapper
      StyledH1(v-if='title') {{ title }}
      Spinner(v-else)
    ButtonWrapper.button-wrapper
      ButtonGroup
        Button(label='New Random Dog', :handleClick='handleNewDog')
        Button(
          label='Save This Dog',
          :handleClick='handleSaveDog',
          :disable='isCurrentDogSaved',
          disabledLabel='Saved'
        )
</template>

<script>
import styled from 'vue-styled-components'
import { StyledH1 } from '../theme/headings'
import { VerticalCenter, DeadCenter, ButtonGroup } from '../theme/positioning'
import Button from './Button'
import Spinner from './Spinner'

const ButtonWrapper = styled(DeadCenter)`
  transition: ${props => props.theme.transition};
  padding-top: 30px;
  width: 100%;
`

const TitleWrapper = styled(DeadCenter)`
  width: 100%;
`

const HeroWrapper = styled(VerticalCenter)`
  padding: 30px;
  color: ${props => props.theme.color.heroPrimary};
  background-color: ${props => props.theme.color.heroBackground};
  height: 145px;
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
    ButtonGroup,
    Spinner
  },
  props: {
    title: String,
    buttons: Object,
    handleNewDog: Function,
    handleSaveDog: Function,
    isCurrentDogSaved: Boolean
  },
  methods: {
    makeAlert() {
      window.alert('button clicked')
    }
  }
}
</script>

