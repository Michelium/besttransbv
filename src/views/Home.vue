<template>
    <div class="home">
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <Contact/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default {
    name: 'Home',
    components: {
        Header,
        Hero,
        About,
        Services,
        Contact,
    }
}
</script>
