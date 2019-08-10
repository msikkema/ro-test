import styled from 'vue-styled-components'

export const StyledH1 = styled.h1`
  /* Mobile */
  font-size: 22px;
  line-height: 32px;
  font-weight: 200px;

  /* Tablet/Desktop */
  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 50px;
    font-weight: 700px;
    line-height: 65px;
    margin: 0;
  }
`

export const StyledH2 = styled.h2`
  /* Mobile */
  font-size: 16px;
  font-weight: 700px;
  line-height: 24px;
  margin: 0%;

  /* Tablet/Desktop */
  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 18px;
    font-weight: 700px;
    line-height: 24px;
    margin: 0%;
  }
`