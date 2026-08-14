<script setup lang="ts">
import { useModal } from '../composables/useModal'
const { openModal } = useModal()
</script>

<template>
  <section class="relative bg-background border-b-4 border-beatlan-dark overflow-hidden">
    <!-- Optional background pattern or image placeholder -->
    <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(#1E9086 2px, transparent 2px); background-size: 30px 30px;"></div>
    
    <div class="max-w-7xl mx-auto px-6 py-20 lg:py-32 relative z-10 flex flex-col items-center text-center">
      
      <!-- Logo of the Event -->
      <div class="w-full max-w-2xl mx-auto mb-8">
        <img src="/cumbre.png" alt="BEATLÁN - Cumbre Mexicana del Hip Hop 2026" class="w-full h-auto drop-shadow-flat" />
      </div>

      <!-- Subtitle -->
      <h2 class="text-2xl md:text-4xl text-beatlan-teal font-beatlan uppercase tracking-wider mb-6 drop-shadow-sm">
        Políticas Públicas para el Hip Hop Mexicano
      </h2>
      
      <!-- Date & Location Card -->
      <div class="bg-white border-4 border-beatlan-dark shadow-flat p-6 md:p-8 max-w-3xl w-full mb-12 flex flex-col md:flex-row gap-6 justify-around items-center">
        <div class="flex flex-col items-center">
          <span class="text-beatlan-orange font-beatlan text-xl uppercase">Fechas</span>
          <p class="font-sans font-bold text-lg text-center mt-1">7 al 11 de Diciembre, 2026</p>
        </div>
        <div class="hidden md:block w-1 h-12 bg-beatlan-dark"></div>
        <div class="flex flex-col items-center">
          <span class="text-beatlan-orange font-beatlan text-xl uppercase">Sede</span>
          <p class="font-sans font-bold text-lg text-center mt-1">Centro Histórico de Morelia, Michoacán</p>
        </div>
      </div>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-2xl">
        <button @click="openModal" class="btn-neo flex items-center justify-center text-center bg-beatlan-yellow hover:bg-yellow-400 flex-1 py-4 text-2xl">
          Postularme a la Convocatoria
        </button>
        <a href="/convocatoria.pdf" target="_blank" class="btn-neo flex items-center justify-center text-center bg-white hover:bg-gray-50 flex-1 py-4 text-2xl">
          Descargar PDF
        </a>
      </div>

    </div>
  </section>
</template>
