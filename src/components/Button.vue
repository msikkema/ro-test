<template lang="pug">
  ButtonWrapper.ro-button(v-on:click='handleClick') {{ label }}
</template>

<script>
import styled from 'vue-styled-components'

const ButtonWrapper = styled.a`
  padding: 10px 20px 10px 20px;
  background-color: ${props => props.theme.color.buttonBackground};
  color: ${props => props.theme.color.buttonColor};
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`

export default {
  props: {
    label: String,
    handleClick: Function
  },
  components: {
    ButtonWrapper
  }
}
</script>
