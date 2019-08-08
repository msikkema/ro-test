<template lang="pug">
  ButtonWrapper.ro-button {{ label }}
</template>

<script>
import styled from 'vue-styled-components'

const ButtonWrapper = styled.a`
  padding: 15px 30px 15px 30px;
  background-color: ${props => props.theme.color.buttonBackground};
  color: ${props => props.theme.color.buttonColor};
  font-size: 20px;
  font-weight: 700;
`

export default {
  props: {
    label: String,
    onClick: Function
  },
  components: {
    ButtonWrapper
  }
}
</script>
