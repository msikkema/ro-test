<template lang="pug">
ThemeProvider(:theme='theme')
  #app
    Navbar
    .divider
      InfoPanel(
        :dog='currentDog',
        :handleNewDog='getNewRandomDog',
        :handleSaveDog='saveDog'
      )
    ul
      li(v-for='dog in savedDogs') {{ dog.displayName }}
     
</template>

<script>
import { ThemeProvider } from 'vue-styled-components'
import Navbar from './components/Navbar'
import InfoPanel from './components/InfoPanel'
import styled from 'vue-styled-components'
import theme from './theme/reachOutTheme'
import { StyledH1 } from './theme/headings'
import { getRandomDog } from './services/dogService'


const Wrapper = styled.div`
  background-color: ${props => props.theme.color.heroBackground};
  min-height: 300px;
`

const TestHeading = styled(StyledH1)`
  color: ${props => props.theme.color.heroPrimary};
`

export default {
  name: 'app',
  components: {
    Navbar,
    ThemeProvider,
    Wrapper,
    TestHeading,
    InfoPanel
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
