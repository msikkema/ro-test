<template lang="pug">
  ButtonWrapper.ro-button(
    v-on:click='handleClick',
    :disable='disable'
  ) {{ disable ? disabledLabel : label }}
</template>

<script>
import styled from 'vue-styled-components'

const buttonStyleProps = { disable: Boolean }

const disabledStyle = `
  opacity: 0.2;
`

const ButtonWrapper = styled('a', buttonStyleProps)`
  transition: ${props => props.theme.transition};
  padding: 10px 20px 10px 20px;
  background-color: ${props => props.theme.color.buttonBackground};
  color: ${props => props.theme.color.buttonColor};
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  ${props => props.disable && disabledStyle}
`

export default {
  props: {
    label: String,
    disabledLabel: String,
    handleClick: Function,
    disable: Boolean
  },
  components: {
    ButtonWrapper
  }
}
</script>
