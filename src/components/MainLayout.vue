<script setup>
import { onMounted } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

const props = defineProps({
    pageTitle: String,
});

onMounted(() => {
    // Page Title
    document.title = props.pageTitle + ' - ' + 'My Portfolio';
})
</script>

<template>
    <Header />

    <main>
        <slot />
    </main>

    <Footer />
</template>