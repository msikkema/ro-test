<template lang="pug">
  PanelWrapper(:imageUrl='imageUrl', :big='big')
    Label(v-if='!big') {{ title }}
</template>

<script>
import styled from 'vue-styled-components'
import { StyledH2 } from '../theme/headings'

const panelProps = { imageUrl: String, big: Boolean }

const PanelWrapper = styled('div', panelProps)`
  padding: 7px;
  background-image: ${props => props && `url(${props.imageUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: ${props => props.big ? '450' : '300'}px;
  width: ${props => props.big ? '450' : '300'}px;
`

const Label = styled(StyledH2)`
  display: inline-block;
  padding: 7px;
  color: ${props => props.theme.color.labelColor};
  background-color: ${props => props.theme.color.labelBackground};
`

export default {
  props: {
    big: Boolean,
    imageUrl: String,
    title: String,
  },
  components: {
    PanelWrapper,
    Label
  }
}
</script>

