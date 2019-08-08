<template lang="pug">
  HeroPanel(:title='dog.displayName')
</template>

<script>
import HeroPanel from './HeroPanel'
// import { StyledH1 } from '../theme/headings'
export default {
  components: {
    HeroPanel
  },
  props: {
    dog: Object
  }
}
</script>

