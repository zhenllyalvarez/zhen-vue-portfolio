<script setup>
import MainLayout from "../components/MainLayout.vue";

// Page Title of Views
const pageTitle = "About";
</script>

<template>
  <MainLayout :pageTitle="pageTitle">
    <section>
      <div class="aboutme flex flex-col lg:flex-row justify-between p-12 mb-8">
        <div class="flex flex-col gap-3 p-0 lg:p-12 md:p-0 sm:p-8">
          <h1
            id="aboutMe"
            class="font-bold text-3xl uppercase text-indigo-800 mb-12"
          >
            About Me
          </h1>
          <h1 class="font-bold text-5xl">
            Better design, <br />
            better experience
          </h1>
          <p class="font-normal text-xl text-gray-500">
            I weave code and design into a website, nurturing its development
            with a passion that transcends pixels, creating an online realm
            where love finds its unique expression.
          </p>
        </div>
        <div class="flex flex-col gap-3 mt-12 mb-12">
          <h1 class="font-medium text-3xl mt-12">Connect With Me</h1>
          <p class="font-normal text-xl text-gray-500">
            Join me on a journey of discovery as I offer you the chance to delve
            into the depths of meaningful communication and shared experiences
            via the virtual environments design.
          </p>
          <div class="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/john.zhenlly.56?mibextid=ZbWKwL"
              target="_blank"
              class="bg-gray-100 hover:bg-gray-150 shadow-md p-3 rounded-full"
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
              class="bg-gray-100 hover:bg-gray-150 shadow-md p-3 rounded-full"
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
              class="bg-gray-100 hover:bg-gray-150 shadow-md p-3 rounded-full"
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
    </section>

    <section>
      <div class="bg-gray-100 py-6 sm:py-8 lg:py-12 p-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <!-- text - start -->
          <div class="mb-10 md:mb-16">
            <h2
              class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 sm:text-md lg:text-4xl"
            >
              My Skills
            </h2>
          </div>
          <!-- text - end -->

          <div
            class="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16"
          >
            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-lg md:h-14 md:w-14 md:rounded-xl"
              >
                <img
                  src="https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png"
                  alt=""
                />
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">Html</h3>
                <p class="mb-2 text-gray-500 text-sm">
                  As a passionate web developer, I craft digital experiences
                  that seamlessly blend creativity and functionality.
                </p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-lg md:h-14 md:w-14 md:rounded-xl"
              >
                <img
                  src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
                  class="h-11"
                  alt=""
                />
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">Css</h3>
                <p class="mb-2 text-gray-500 text-sm">
                  I sculpt captivating web aesthetics, seamlessly merging design
                  and responsiveness to craft visually striking and engaging
                  digital landscapes.
                </p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-lg md:h-14 md:w-14 md:rounded-xl"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433"
                  class="h-10"
                  alt=""
                />
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">
                  Javascript
                </h3>
                <p class="mb-2 text-gray-500 text-sm">
                  In JavaScript, I manipulate data and create dynamic web
                  features for interactive and responsive websites.
                </p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-lg md:h-14 md:w-14 md:rounded-xl"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333"
                  class="h-7"
                  alt=""
                />
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">Tailwind</h3>
                <p class="mb-2 text-gray-500 text-sm">
                  Leveraging Tailwind CSS, I craft sleek web interfaces with
                  concise utility classes, ensuring seamless and responsive
                  designs.
                </p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-lg md:h-14 md:w-14 md:rounded-xl"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/121px-Laravel.svg.png"
                  class="h-11"
                  alt=""
                />
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">Laravel</h3>
                <p class="mb-2 text-gray-500 text-sm">
                  In Laravel's realm, I construct dynamic web systems, molding
                  backend intricacies to forge seamless, secure, and efficient
                  experiences.
                </p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-lg md:h-14 md:w-14 md:rounded-xl"
              >
                <img
                  src="https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png"
                  class="h-10"
                  alt=""
                />
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">Bootstrap</h3>
                <p class="mb-2 text-gray-500 text-sm">
                  I use Bootstrap to create efficient and visually appealing web
                  designs with responsive interfaces for seamless user
                  experiences.
                </p>
              </div>
            </div>
            <!-- feature - end -->
            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-lg md:h-14 md:w-14 md:rounded-xl"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png"
                  class="h-10"
                  alt=""
                />
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">PHP</h3>
                <p class="mb-2 text-gray-500 text-sm">
                  With expertise in PHP, I skillfully develop dynamic and robust
                  web applications, ensuring efficient server-side functionality
                  and optimal user interactions.
                </p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-lg md:h-14 md:w-14 md:rounded-xl"
              >
                <img
                  src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"
                  class="h-10"
                  alt=""
                />
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">MySQL</h3>
                <p class="mb-2 text-gray-500 text-sm">
                  My proficiency in MySQL extends to expertly designing
                  databases, ensuring efficient data management for powerful and
                  reliable web applications.
                </p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-lg md:h-14 md:w-14 md:rounded-xl"
              >
                <img
                  src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&h=670&q=75&fit=max&auto=format"
                  class="h-10"
                  alt=""
                />
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">Figma</h3>
                <p class="mb-2 text-gray-500 text-sm">
                  I creatively design user interfaces, blending aesthetics and
                  functionality for visually compelling and user-centric web
                  experiences.
                </p>
              </div>
            </div>
            <!-- feature - end -->
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>
