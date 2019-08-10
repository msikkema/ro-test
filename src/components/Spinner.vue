<template lang="pug">
  Spinner
</template>

<script>
import styled from 'vue-styled-components'

const Spinner = styled.div`
  border: 10px solid ${props => props.theme.color.highlight};
  border-top: 10px solid ${props => props.theme.color.heroBackground};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`


export default {
  components: {
    Spinner
  }
}
</script>

