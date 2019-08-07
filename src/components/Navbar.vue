<template lang="pug">
  Container
    LogoWrapper
      img(src='../assets/reachout_logo.svg')
</template>

<script>
import styled from 'vue-styled-components'

const LogoWrapper = styled.div`
  /* padding: 0 15px 0 15px; */
  padding: 12px;
  width: 120px;
  /* height: 100%; */

  img { height: 100%; }
`

const Container = styled.div`
  color: ${props => props.theme.color.heroPrimary};
  background-color: ${props => props.theme.color.heroBackground};
  width: 100%;

  /* Mobile */
  padding: 0 20px 0 20px;
  height: 65px;

  /* Tablet */
  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 32px 0 32px;
    height: 65px;
  }

  /* Desktop */
  @media(min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 0 15px 0 15px;
    height: 100px;
  }
`

export default {
  components: {
    Container,
    LogoWrapper
  }
}
</script>
