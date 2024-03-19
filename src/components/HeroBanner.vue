<script setup>
import HeroBannerImg from "../assets/pp.jpg";
</script>

<template>
  <section
    class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row py-28 mx-auto max-w-screen-xl px-16"
  >
    <!-- content - start -->
    <div class="flex flex-col justify-between xl:w-5/12">
      <div class="sm:text-center lg:py-12 lg:text-left xl:py-24 md:mt-12">
        <p
          class="mb-4 font-semibold text-gray-600 md:text-lg xl:text-xl"
        >
          Hey There 👋 I am
        </p>

        <h1 class="text-4xl font-bold sm:text-5xl">
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
            to="/About"
            href="#"
            class="inline-block bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-900 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            About Me
          </router-link>

          <router-link
            to="/contact"
            class="inline-block border border-gray-800 px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-gray-900 md:text-base"
          >
            Contact Me
          </router-link>
        </div>
      </div>
    </div>
    <div class="h-full overflow-hidden rounded-lg bg-gray-800 xl:w-2/5 lg:mr-12 md:w-1/1">
      <img
        :src="HeroBannerImg"
        loading="lazy"
        alt=""
        class="h-full w-full object-contain object-top"
      />
    </div>
  </section>
</template>
