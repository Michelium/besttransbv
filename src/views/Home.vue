<template>
  <div class="home">
    <Hero/>
    <Header/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero
  }
}
</script>
