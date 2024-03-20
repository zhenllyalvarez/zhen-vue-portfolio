<template>
    <section>
      <div>
        <h1
          class="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-4xl xs:p-4 sm:p-8 md:p-8 lg:p-12 text-center"
        >
          Projects/Gallery
        </h1>
      </div>
      <div class="bg-white sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8 mt-12 lg:px-16 mb-12">
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <!-- image - start -->
            <router-link
              to="/ToDo"
              class="group relative flex h-32 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="../assets/todo.png"
                loading="lazy"
                alt="Photo by Minh Pham"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
              ></div>

              <span
                class="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm"
                >Simple To-do</span
              >
            </router-link>
            <!-- image - end -->

            <!-- image - start -->
            <router-link
              to="/TimeInTimeOut"
              class="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="../assets/tito.png"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
              ></div>

              <span
                class="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm"
                >Simple Time Clock</span
              >
            </router-link>
            <!-- image - end -->

            <!-- image - start -->
            <a
              href="https://www.swapifine.com/"
              class="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="../assets/swapifine.png"
                loading="lazy"
                alt="Photo by Magicle"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
              ></div>

              <span
                class="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm"
                >Swapifine</span
              >
            </a>
            <!-- image - end -->
          </div>
        </div>
      </div>
    </section>
</template>
