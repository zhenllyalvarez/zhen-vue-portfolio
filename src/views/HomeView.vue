<script setup>
import MainLayout from "../components/MainLayout.vue";
import HeroBanner from "../components/HeroBanner.vue";
import ProjectGallery from "../components/ProjectGallery.vue";
import TechStacks from "../components/TechStacks.vue";

// Page Title of Views
const pageTitle = "Home";
</script>

<template>
  <MainLayout :pageTitle="pageTitle">
    <!-- Hero Banner Section -->
    <HeroBanner />

    <div class=" mt-12 mb-12 bg-indigo-950 rounded">
      <div class="flex flex-col text-center mt-12">
        <h3 class="text-indigo-100 font-semibold text-2xl mt-12">
          What I Offer?
        </h3>
        <h1 class="text-5xl font-bold text-white">My Services</h1>
      </div>
      <div class="bg-indigo-950 py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8 ">
          <div
            class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16 mt-12"
          >
            <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40 cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div class="flex flex-col gap-2">
                <h2 class="text-xl font-bold text-white">
                  <p>UI/UX Design</p>
                </h2>

                <p class="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque ligulavel in.
                </p>

                <div>
                  <a
                    class="font-semibold text-indigo-100 transition duration-100 hover:text-indigo-400 active:text-indigo-700 cursor-pointer"
                    >Read more</a
                  >
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div class="flex flex-col gap-2">
                <h2 class="text-xl font-bold text-white">
                  <p>Visual Design</p>
                </h2>

                <p class="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque ligulavel in.
                </p>

                <div>
                  <a
                    class="font-semibold text-indigo-100 transition duration-100 hover:text-indigo-400 active:text-indigo-700 cursor-pointer"
                    >Read more</a
                  >
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40 cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Magicle"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div class="flex flex-col gap-2">
                <h2 class="text-xl font-bold text-white">
                  <p>Web Development</p>
                </h2>

                <p class="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque ligulavel in.
                </p>

                <div>
                  <a
                    class="font-semibold text-indigo-100 transition duration-100 hover:text-indigo-400 active:text-indigo-700 cursor-pointer"
                    >Read more</a
                  >
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40 cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div class="flex flex-col gap-2">
                <h2 class="text-xl font-bold text-white">
                  <p>Web Design</p>
                </h2>

                <p class="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque ligulavel in.
                </p>

                <div>
                  <a
                    class="font-semibold text-indigo-100 transition duration-100 hover:text-indigo-400 active:text-indigo-700 cursor-pointer"
                    >Read more</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Gallery -->
    <ProjectGallery />
  </MainLayout>
</template>
