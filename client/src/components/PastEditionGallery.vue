<script setup lang="ts">
const images = [
  { src: '/20190410192922-8d702352-me.jpg', class: 'col-span-1 md:col-span-2 md:row-span-2' },
  { src: '/20190410193732-56747fc8-me.jpg', class: 'col-span-1 md:col-span-1 md:row-span-1' },
  { src: '/20190410193814-c6d29d67-me.jpg', class: 'col-span-1 md:col-span-1 md:row-span-2' },
  { src: '/20190410194031-756a4ae5-me.jpg', class: 'col-span-1 md:col-span-1 md:row-span-1' },
  { src: '/20190410194045-918d311a-me.jpg', class: 'col-span-1 md:col-span-4 md:row-span-2' },
]
</script>

<template>
  <section class="bg-beatlan-light py-20 px-6 border-b-4 border-beatlan-dark">
    <div class="max-w-6xl mx-auto">
      
      <!-- Header -->
      <div class="mb-12 md:flex justify-between items-end border-b-4 border-beatlan-dark pb-6">
        <div>
          <h2 class="text-4xl md:text-5xl text-beatlan-dark font-beatlan uppercase">
            Un Vistazo a la Primera Cumbre
          </h2>
          <p class="font-sans text-xl mt-4 max-w-2xl text-gray-700">
            Nuestra historia nos respalda. Revive los mejores momentos de la edición pasada, donde exponentes de todo el país se reunieron para alzar la voz.
          </p>
        </div>
        <div class="mt-6 md:mt-0 text-beatlan-orange font-beatlan text-3xl">
          2019
        </div>
      </div>

      <!-- Asymmetrical Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6">
        <div v-for="(img, idx) in images" :key="idx" 
             :class="['card-neo overflow-hidden relative group', img.class]">
          
          <img :src="img.src" 
               alt="Memoria de la Primera Cumbre" 
               class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
               
          <!-- Decorative overlay on hover -->
          <div class="absolute inset-0 bg-beatlan-teal mix-blend-multiply opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        </div>
      </div>

    </div>
  </section>
</template>
