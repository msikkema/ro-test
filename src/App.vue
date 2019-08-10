<template lang="pug">
ThemeProvider(:theme='theme')
  App
    Navbar.navbar
    Split.split
      .left
        FavouritesPanel(
          :savedDogs='savedDogs',
          :handleRemoveDog='removedSavedDog',
          :handleToggleFavouritesModal='toggleFavouritesModal'
        )

      .right
        InfoPanel(
          v-if='!showModalFavourites',
          :dog='currentDog',
          :handleNewDog='getNewRandomDog',
          :handleSaveDog='saveDog',
          :isCurrentDogSaved='isCurrentDogSaved',
          :handleToggleFavouritesModal='toggleFavouritesModal'
        )
        FavouritesPanel(
          v-else,
          :savedDogs='savedDogs',
          :handleRemoveDog='removedSavedDog'
          :handleToggleFavouritesModal='toggleFavouritesModal'
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

const App = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const Split = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: stretch;
  background-color: ${props => props.theme.color.heroBackground};
  overflow: hidden;

  .left {
    overflow-y: auto;
    flex-grow: 0;
    display: none;

    @media(min-width: ${props => props.theme.breakpoints.tablet}) {
      display: block;
    }
  }
  .right {
    flex-grow: 1;
    overflow-y: auto;

    @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    }
  }
`

const TestHeading = styled(StyledH1)`
  color: ${props => props.theme.color.heroPrimary};
`

export default {
  name: 'app',
  components: {
    App,
    Navbar,
    ThemeProvider,
    Split,
    TestHeading,
    InfoPanel,
    FavouritesPanel
  },
  methods: {
    async getNewRandomDog() {
      this.currentDog = null
      this.currentDog = await getRandomDog(this.seenDogIds)
      this.seenDogIds.push(this.currentDog.id)
    },
    saveDog() {
      if (this.currentDog && !this.savedDogs.includes(this.currentDog)) {
        this.savedDogs.push(this.currentDog)
      }
    },
    removedSavedDog(targetId) {
      this.savedDogs = this.savedDogs.filter(({ id }) => id !== targetId)
    },
    toggleFavouritesModal() {
      this.showModalFavourites = !this.showModalFavourites
    }
  },
  computed: {
    isCurrentDogSaved() {
      if (!this.currentDog) return false

      const currentId = this.currentDog.id
      return Boolean(this.savedDogs.find(({ id }) => id === currentId))
    }
  },
  data: function() {
    return {
      theme,
      currentDog: null,
      seenDogIds: [],
      savedDogs: [],
      showModalFavourites: false
    }
  },
  async mounted() {
    this.currentDog = await getRandomDog(this.seenDogIds)
    this.seenDogIds.push(this.currentDog.id)
  }
}
</script>
