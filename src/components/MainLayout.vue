<script setup>
import { defineProps, onMounted, onUnmounted, ref } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 200; // Adjust the scroll threshold as needed
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const props = defineProps({
  pageTitle: String,
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.title = props.pageTitle + " - " + "My Portfolio";
});
</script>

<template>
  <Header />

  <main>
    <div>
      <button
        v-if="showButton"
        @click="scrollToTop"
        class="fixed bottom-4 right-4 bg-gray-800 text-white p-2.5 rounded-md mb-12 shadow-md hover:scale-110 transition-opacity duration-300 z-50"
      >
        <svg
          class="w-[24px] h-[24px] text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5 5 1 1 5"
          ></path>
        </svg>
      </button>
    </div>
    <slot />
  </main>

  <Footer />
</template>
