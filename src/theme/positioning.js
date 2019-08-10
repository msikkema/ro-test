import styled from 'vue-styled-components'

export const DeadCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VerticalCenter = styled.div`
  display: flex;
  align-items: center;
`

export const AlignRight = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ButtonGroup = styled.span`
  /* Sack when in mobile view */
  display: flex;
  flex-direction: column;
  .ro-button {
    margin-bottom: 15px;
  }

  /* In a row when tablet and larger */
  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    
    .ro-button {
      margin-bottom: 0px;
      margin-left: 10px;
    }
  }
`