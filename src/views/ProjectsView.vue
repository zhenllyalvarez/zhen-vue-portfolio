<script setup>
import MainLayout from '../components/MainLayout.vue';

// Page Title of Views
const pageTitle = 'Projects'
</script>

<template>
  <MainLayout :pageTitle="pageTitle">
    <section>
      <div>
        <h1 class="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xs:p-4 sm:p-8 md:p-8 lg:p-12">Projects</h1>

      </div>
      <div  class="projects flex justify-center gap-12 mt-12 mb-12">
            <div class="bg-white py-6 sm:py-8 lg:py-12 mb-12">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div class="grid gap-12 sm:grid-cols-2">
                        <router-link to="/ToDo"
                            class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                            <img src="../assets/todo.png" loading="lazy" alt="Photo by Fakurian Design"
                                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <div class="relative flex flex-col w-72">
                                <span class="text-gray-300">To-Do List</span>
                                <span class="text-lg font-semibold text-white lg:text-xl">List of your tasks</span>
                            </div>
                        </router-link>

                        <router-link to="/TimeInTimeOut"
                            class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                            <img src="../assets/tito.png" loading="lazy"  alt="Photo by Fakurian Design"
                                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <div class="relative flex flex-col w-72">
                                <span class="text-gray-300">Time Clock</span>
                                <span class="text-lg font-semibold text-white lg:text-xl">Track your time</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </MainLayout>
</template>