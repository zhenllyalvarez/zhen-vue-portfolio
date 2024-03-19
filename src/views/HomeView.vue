<script setup>
import MainLayout from "../components/MainLayout.vue";
import HeroBanner from "../components/HeroBanner.vue";
import ProjectGallery from "../components/ProjectGallery.vue";
import AboutMe from "@/components/AboutMe.vue";
import Resume from "@/components/Resume.vue";
import Skills from "@/components/Skills.vue";
import TechStacks from "../components/TechStacks.vue";

// Page Title of Views
const pageTitle = "Home";
</script>

<template>
  <MainLayout :pageTitle="pageTitle">
    <!-- Hero Banner Section -->
    <HeroBanner />

    <!-- About me section -->
    <AboutMe/>
    
    <Resume/>

    <Skills/>


    <!-- Project Gallery -->
    <ProjectGallery />
  </MainLayout>
</template>
