<script setup>
import MainLayout from "../components/MainLayout.vue";

// Page Title of Views
const pageTitle = "Contact";
</script>

<template>
  <MainLayout :pageTitle="pageTitle">
    <section class="bg-gray-100 sm:p-2">
      <div class="p-0 lg:p-12 sm:p-8 md:p-12 flex gap-12">
        <div>
          <h1 class="font-bold lg:text-7xl sm:text-4xl md:text:4xl">Contact</h1>
          <h1 class="font-semibold mt-4 lg:text-xl md:text-md">
            Get in touch, let's have a quick call.
          </h1>
          <h1 class="text-md font-normal text-gray-600 sm:text-sm">
            Embark on a conversation with me! Your thoughts and inquiries are
            the compass guiding <br> our journey together.
          </h1>
        </div>
        <div>
          <h1 class="font-medium text-3xl mt-12">Connect With Me</h1>
          <p class="font-normal text-xl text-gray-500">
            Join me on a journey of discovery as I offer you the chance <br> to delve
            into the depths of meaningful communication and<br> shared experiences
            via the virtual environments design.
          </p>
          <h1 class="mt-3 text-lg font-bold text-gray-500">My Socials</h1>
          <div class="flex gap-4 mt-3">
            <a
              href="https://www.facebook.com/john.zhenlly.56?mibextid=ZbWKwL"
              target="_blank"
              class="bg-white hover:bg-gray-50 p-3 rounded-full"
              ><svg
                class="w-[24px] h-[20px] text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/john-zhenlly-alvarez-73021028b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwAR3oxwIaLXbYXSXn_QdAHgMnCeEZh4w0Da3PyZxAEHCLDLklUwyKbW9MvYk"
              target="_blank"
              class="bg-white hover:bg-gray-50 hover:bg-gray-200 p-3 rounded-full"
              ><svg
                class="w-[24px] h-[20px] text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 15 15"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  clip-rule="evenodd"
                ></path>
                <path d="M3 5.012H0V15h3V5.012Z"></path>
              </svg>
            </a>

            <a
              href="https://github.com/zhenllyalvarez"
              target="_blank"
              class="bg-white hover:bg-gray-50 hover:bg-gray-200 p-3 rounded-full"
              ><svg
                class="w-[24px] h-[24px] text-gray-600"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="bg-gray-150 mt-16 py-6 lg:px-72 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <!-- text - start -->
          <div class="mb-10 md:mb-16">
            <h2
              class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl"
            >
              Get in touch
            </h2>

            <p
              class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg"
            >
              Feel free to get in touch with us by reaching out to our contact
              information for any inquiries or assistance you may need.
            </p>
          </div>
          <!-- text - end -->

          <!-- form - start -->
          <form
            class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2 bg-white p-12 rounded-md"
          >
            <div>
              <label
                for="first-name"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >First name*</label
              >
              <input
                name="first-name"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                for="last-name"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >Last name*</label
              >
              <input
                name="last-name"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="company"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >Company</label
              >
              <input
                name="company"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="email"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >Email*</label
              >
              <input
                name="email"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="subject"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >Subject*</label
              >
              <input
                name="subject"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="message"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >Message*</label
              >
              <textarea
                name="message"
                class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              ></textarea>
            </div>

            <div class="flex items-center justify-between sm:col-span-2">
              <button
                class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Send
              </button>
            </div>
          </form>
          <!-- form - end -->
        </div>
      </div>
    </section>
  </MainLayout>
</template>
