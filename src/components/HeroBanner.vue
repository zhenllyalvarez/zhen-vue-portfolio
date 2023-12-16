<script setup>
import HeroBannerImg from "../assets/zhen.jpg";
</script>

<template>
  <section
    class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row py-16 mx-auto max-w-screen-xl px-16"
  >
    <!-- content - start -->
    <div class="flex flex-col justify-between xl:w-5/12">
      <div class="sm:text-center lg:py-12 lg:text-left xl:py-24 md:mt-12">
        <p
          class="mb-4 font-semibold text-gray-600 md:mb-6 md:text-lg xl:text-xl"
        >
          Hey There 👋 I am
        </p>

        <h1 class="text-4xl font-bold text-indigo-900 sm:text-5xl">
          John Zhenlly Alvarez
        </h1>

        <p class="text-gray-800 my-5 text-xl">
          A 21 year-old
          <span class="font-bold">Full-Stack Web Developer</span> based in Cebu,
          Philippines.
        </p>

        <div
          class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start"
        >
          <router-link
            to="/contact"
            href="#"
            class="inline-block rounded-full bg-indigo-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            About Me
          </router-link>

          <router-link
            to="/contact"
            class="inline-block rounded-full border border-indigo-800 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
          >
            Contact Me
          </router-link>
        </div>
      </div>
    </div>
    <div class="h-full overflow-hidden rounded-lg bg-gray-800 xl:w-1/3 lg:mr-12 md:w-1/1">
      <img
        :src="HeroBannerImg"
        loading="lazy"
        alt="Photo by Fakurian Design"
        class="h-full w-full object-contain object-top"
      />
    </div>
  </section>
</template>
