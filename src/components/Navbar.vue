<template lang="pug">
  Container
    LogoWrapper.logo-wrapper
      img(src='../assets/reachout_logo.svg')
    TitleWrapper.title-wrapper
      Title ReachOut Dogs
</template>

<script>
import styled from 'vue-styled-components'
import { StyledH1 } from '../theme/headings'
import { DeadCenter } from '../theme/positioning'

const TitleWrapper = styled(DeadCenter)`
  padding: 0 15px 0 15px;
`

const Title = styled(StyledH1)`
  font-weight: normal;
`

const LogoWrapper = styled.div`
  padding: 12px;
  width: 120px;
  img { height: 100%; }
`

const Container = styled.div`
  color: ${props => props.theme.color.heroPrimary};
  background-color: ${props => props.theme.color.heroBackground};
  border-bottom: 2px solid ${props => props.theme.color.background};
  display: flex;
  justify-content: space-between;

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
    LogoWrapper,
    TitleWrapper,
    Title
  }
}
</script>
