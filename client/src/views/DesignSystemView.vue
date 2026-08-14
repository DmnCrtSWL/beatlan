<script setup lang="ts">
</script>

<template>
  <div class="p-10 flex flex-col items-center justify-center gap-10">
    
    <!-- Hero / Title test -->
    <div class="text-center">
      <h1 class="text-6xl text-beatlan-dark uppercase">Cumbre Mexicana de Hip Hop</h1>
      <h2 class="text-4xl text-beatlan-teal uppercase mt-2">Design System Test</h2>
    </div>

    <!-- Colors test -->
    <div class="flex gap-4 flex-wrap justify-center">
      <div class="w-24 h-24 bg-beatlan-yellow border-4 border-beatlan-dark shadow-flat flex items-center justify-center font-bebas text-xl">Yellow</div>
      <div class="w-24 h-24 bg-beatlan-orange border-4 border-beatlan-dark shadow-flat flex items-center justify-center font-bebas text-xl text-white">Orange</div>
      <div class="w-24 h-24 bg-beatlan-teal border-4 border-beatlan-dark shadow-flat flex items-center justify-center font-bebas text-xl text-white">Teal</div>
      <div class="w-24 h-24 bg-beatlan-green border-4 border-beatlan-dark shadow-flat flex items-center justify-center font-bebas text-xl">Green</div>
    </div>

    <!-- Neo-brutalist Card test -->
    <div class="card-neo p-8 max-w-md w-full">
      <h3 class="text-3xl text-beatlan-orange uppercase mb-4">Sample Card</h3>
      <p class="text-lg mb-6">
        This is a test of the body font (Inter) and the card component. 
        It features a neo-brutalist flat shadow and thick borders to match the logo.
      </p>
      <button class="btn-neo w-full">Regístrate Ahora</button>
    </div>

  </div>
</template>
