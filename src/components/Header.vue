<script setup>
import { ref } from 'vue';

const isOpenMenu = ref(false);
const toggleMobileMenu = () => {
    return isOpenMenu.value = !isOpenMenu.value;
};

</script>

<template>
    <header class="bg-white border-b border-gray-200">
        <nav class="mx-auto max-w-screen-xl px-12 py-4 lg:px-16 lg:p-5">
            <div class="flex flex-row items-center justify-between">
                <router-link to="/" class="flex flex-col">
                    <h1 class="font-bold text-xl text-gray-950">John Zhenlly Alvarez  </h1>
                    <p class="font-normal text-lg text-gray-800">Fresh Graduate</p>
                    <!-- junior web developer -->
                </router-link>

                <!-- Desktop Menu -->
                <div class="hidden lg:block">
                    <ul class="flex flex-row gap-8">
                        <li
                            :class="$route.name === 'home' ? 'text-gary-900 font-medium text-lg' : 'text-gray-900 hover:text-gray-950 font-normal text-lg'">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li
                            :class="$route.name === 'about' ? 'text-gary-900 font-medium text-lg' : 'text-gray-900 hover:text-gray-950 font-normal text-lg'">
                            <router-link to="/about">About</router-link>
                        </li>
                        <li
                            :class="$route.name === 'projects' ? 'text-gary-900 font-medium text-lg' : 'text-gray-900 hover:text-gray-950 font-normal text-lg'">
                            <router-link to="/projects">Projects</router-link>
                        </li>
                        <li
                            :class="$route.name === 'contact' ? 'text-gary-900 font-medium text-lg' : 'text-gray-900 hover:text-gray-950 font-normal text-lg'">
                            <router-link to="/contact">Contact</router-link>
                        </li>
                    </ul>
                </div>

                <!-- Desktop Social Icons -->
                <div class="hidden lg:block">
                    <button class="font-medium text-gray-700 hover:text-gray-950">Download Resume</button>
                </div>

                <!-- Burger Menu -->
                <div @click="toggleMobileMenu"
                    class="cursor-pointer block lg:hidden sm:mr-5 sm:bg-gray-0 p-2 rounded-full">
                    <svg class="w-[24px] h-[24px] text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M1 1h14M1 6h14M1 11h7" />
                    </svg>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div v-if="isOpenMenu" class="flex lg:hidden relative">

                <div class="bg-white flex flex-col absolute top-[18px] -left-[52px] w-screen gap-4 shadow-lg p-6 rounded z-50">
                    <router-link to="/"
                        :class="$route.name === 'home' ? 'bg-gray-50 p-2 rounded text-indigo-700 font-medium text-lg' : 'hover:bg-gray-50 p-2 text-gray-700 hover:text-indigo-700 font-normal text-lg'">
                        Home
                    </router-link>
                    <router-link to="/about"
                        :class="$route.name === 'about' ? 'bg-gray-50 p-2 rounded text-indigo-700 font-medium text-lg' : 'hover:bg-gray-50 p-2 text-gray-700 hover:text-indigo-700 font-normal text-lg'">
                        About
                    </router-link>
                    <router-link to="/projects"
                        :class="$route.name === 'projects' ? 'bg-gray-50 p-2 rounded text-indigo-700 font-medium text-lg' : 'hover:bg-gray-50 p-2 text-gray-700 hover:text-indigo-700 font-normal text-lg'">
                        Projects
                    </router-link>
                    <router-link to="/contact"
                        :class="$route.name === 'contact' ? 'bg-gray-50 p-2 rounded text-indigo-700 font-medium text-lg' : 'hover:bg-gray-50 p-2 text-gray-700 hover:text-indigo-700 font-normal text-lg'">
                        Contact
                    </router-link>

                    <button class="font-medium text-gray-700 hover:text-gray-950">Download Resume</button>
                </div>
            </div>
        </nav>
    </header>
</template>