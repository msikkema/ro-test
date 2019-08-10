<template lang="pug">
  PanelWrapper(:imageUrl='imageUrl', :big='big')
    LabelContainer.label-container(v-if='!big')
      Label {{ title }}

    ButtonContainer.label-container(v-if='!big')
      Button(label='Remove', :handleClick='removeDog')
</template>

<script>
import styled from 'vue-styled-components'
import { StyledH2 } from '../theme/headings'
import Button from './Button'

const panelProps = { imageUrl: String, big: Boolean }

const LabelContainer = styled.div`
  display: flex;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const PanelWrapper = styled('div', panelProps)`
  padding: 10px;
  background-image: ${props => props && `url(${props.imageUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    height: ${props => props.big ? '450' : '300'}px;
    width: ${props => props.big ? '450' : '300'}px;
  }
`

const Label = styled(StyledH2)`
  display: inline;
  padding: 7px;
  color: ${props => props.theme.color.labelColor};
  background-color: ${props => props.theme.color.labelBackground};
`

export default {
  props: {
    big: Boolean,
    id: String,
    imageUrl: String,
    title: String,
    handleRemoveDog: Function
  },
  components: {
    PanelWrapper,
    Label,
    Button,
    ButtonContainer,
    LabelContainer
  },
  methods: {
    removeDog() {
      this.handleRemoveDog(this.id)
    }
  }
}
</script>

