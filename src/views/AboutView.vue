<script setup>
import MainLayout from '../components/MainLayout.vue';

// Page Title of Views
const pageTitle = 'About'
</script>

<template>
  <MainLayout :pageTitle="pageTitle">
    <section>
      <div class="aboutme flex flex-col lg:flex-row justify-between p-12 mb-8">
        <div class="flex flex-col gap-3 p-0 lg:p-12 md:p-0 sm:p-8">
          <h1 id="aboutMe" class="font-bold text-3xl uppercase text-indigo-800 mb-12">About Me</h1>
          <h1 class="font-bold text-5xl">Better design, <br> better experience</h1>
          <p class="font-normal text-xl text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque dui ligula, malesuada vel convallis in,
            tincidunt ut mi Vestibulum sit amet.
          </p>
        </div>
        <div class="flex flex-col gap-3 mt-12 mb-12">
          <h1 class="font-medium text-3xl mt-12">Connect With Me</h1>
          <p class="font-normal text-xl text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
            accusantium molestias inventore aliquid illo alias sunt accusamus eos? Quibusdam quidem alias labore
            recusandae odit <br> ut suscipit impedit itaque id rerum.</p>
        <div class="flex gap-4 mt-4">
          <svg class="w-[30px] h-[28px] text-white-800 cursor-pointer" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
            <path fill-rule="evenodd"
              d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
              clip-rule="evenodd" />
          </svg>
          <svg class="w-[30px] h-[28px] text-white-800 cursor-pointer" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clip-rule="evenodd" />
          </svg>
          <svg class="w-[30px] h-[28px] text-white-800 cursor-pointer" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
            <path fill-rule="evenodd"
              d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              clip-rule="evenodd" />
            <path d="M3 5.012H0V15h3V5.012Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-[30px] h-[28px] mt-1 text-white-800 cursor-pointer"
            aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </div>
      </div>
    </div>
  </section>

  <section>
      <div class="bg-gray-100 py-6 sm:py-8 lg:py-12 p-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <!-- text - start -->
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 sm:text-md lg:text-4xl">My Skills
            </h2>
          </div>
          <!-- text - end -->

          <div class="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <img src="https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png" alt="">
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">Html</h3>
                <p class="mb-2 text-gray-500 text-sm">As a passionate web developer, I craft digital experiences that seamlessly blend creativity and functionality.</p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" class="h-11" alt="" >
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">Css</h3>
                <p class="mb-2 text-gray-500 text-sm"> I sculpt captivating web aesthetics, seamlessly merging design and responsiveness to craft visually striking and engaging digital landscapes.</p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" class="h-10" alt="" >
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">Javascript</h3>
                <p class="mb-2 text-gray-500 text-sm">In JavaScript, I manipulate data and create dynamic web features for interactive and responsive websites.</p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333" class="h-7" alt="">
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">Tailwind</h3>
                <p class="mb-2 text-gray-500 text-sm">Leveraging Tailwind CSS, I craft sleek web interfaces with concise utility classes, ensuring seamless and responsive designs.</p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/121px-Laravel.svg.png" class="h-11" alt="">
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">Laravel</h3>
                <p class="mb-2 text-gray-500 text-sm">In Laravel's realm, I construct dynamic web systems, molding backend intricacies to forge seamless, secure, and efficient experiences.</p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <img src="https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png" class="h-10" alt="">
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">Bootstrap</h3>
                <p class="mb-2 text-gray-500 text-sm">I use Bootstrap to create efficient and visually appealing web designs with responsive interfaces for seamless user experiences.</p>
              </div>
            </div>
            <!-- feature - end -->
            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" class="h-10" alt="">
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">PHP</h3>
                <p class="mb-2 text-gray-500 text-sm">
                  
With expertise in PHP, I skillfully develop dynamic and robust web applications, ensuring efficient server-side functionality and optimal user interactions.
                </p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <img src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png" class="h-10" alt="">
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">MySQL</h3>
                <p class="mb-2 text-gray-500 text-sm">My proficiency in MySQL extends to expertly designing databases, ensuring efficient data management for powerful and reliable web applications.</p>
              </div>
            </div>
            <!-- feature - end -->

            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <img src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&h=670&q=75&fit=max&auto=format" class="h-10" alt="">
              </div>

              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">Figma</h3>
                <p class="mb-2 text-gray-500 text-sm">I creatively design user interfaces, blending aesthetics and functionality for visually compelling and user-centric web experiences.</p>
              </div>
            </div>
            <!-- feature - end -->
          </div>
        </div>
      </div>
    </section>
</MainLayout></template>