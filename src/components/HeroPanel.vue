<template lang="pug">
HeroWrapper
  TitleAndButtons.title-and-buttons
    TitleWrapper.title-wrapper
      StyledH1(v-if='title') {{ title }}
      Spinner(v-else)
    ButtonWrapper.button-wrapper
      ButtonGroup
        Button(label='New Random Breed', :handleClick='handleNewDog')
        Button(
          label='Save This Breed',
          :handleClick='handleSaveDog',
          :disable='isCurrentDogSaved',
          disabledLabel='Saved'
        )
        ShowInMobile
          Button(
            label='Show my Favourites',
            :handleClick='handleToggleFavouritesModal'
          )
        
</template>

<script>
import styled from 'vue-styled-components'
import { StyledH1 } from '../theme/headings'
import { VerticalCenter, DeadCenter, ButtonGroup } from '../theme/positioning'
import Button from './Button'
import Spinner from './Spinner'

const ShowInMobile = styled.span`
  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`

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
  min-height: 150px;
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
    Spinner,
    ShowInMobile
  },
  props: {
    title: String,
    buttons: Object,
    handleNewDog: Function,
    handleSaveDog: Function,
    isCurrentDogSaved: Boolean,
    handleToggleFavouritesModal: Function
  },
  methods: {
    makeAlert() {
      window.alert('button clicked')
    }
  }
}
</script>

