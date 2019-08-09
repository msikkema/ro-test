<template lang="pug">
ThemeProvider(:theme='theme')
  #app
    Navbar
    Split
      .left
        FavouritesPanel(:savedDogs='savedDogs')

      .right
        InfoPanel(
          :dog='currentDog',
          :handleNewDog='getNewRandomDog',
          :handleSaveDog='saveDog'
        )
</template>

<script>
import { ThemeProvider } from 'vue-styled-components'
import Navbar from './components/Navbar'
import InfoPanel from './components/InfoPanel'
import FavouritesPanel from './components/FavouritesPanel'
import styled from 'vue-styled-components'
import theme from './theme/reachOutTheme'
import { StyledH1 } from './theme/headings'
import { getRandomDog } from './services/dogService'

const Split = styled.div`
  display: flex;
  height: 100%;
  align-items: stretch;

  .left {
    flex-grow: 0;
  }
  .right {
    flex-grow: 1;
  }
`

const TestHeading = styled(StyledH1)`
  color: ${props => props.theme.color.heroPrimary};
`

export default {
  name: 'app',
  components: {
    Navbar,
    ThemeProvider,
    Split,
    TestHeading,
    InfoPanel,
    FavouritesPanel
  },
  methods: {
    async getNewRandomDog() {
      this.currentDog = await getRandomDog(this.seenDogIds)
      this.seenDogIds.push(this.currentDog.id)
    },
    saveDog() {
      if (!this.savedDogs.includes(this.currentDog)) {
        this.savedDogs.push(this.currentDog)
      }
    }
  },
  data: function() {
    return {
      theme,
      currentDog: null,
      seenDogIds: [],
      savedDogs: []
    }
  },
  async mounted() {
    this.currentDog = await getRandomDog(this.seenDogIds)
    this.seenDogIds.push(this.currentDog.id)
    console.log(this.currentDog)
  }
}
</script>

<style lang="scss">
#app {
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
