<script setup lang="ts">
const axes = [
  "Industria artística y marketing",
  "Gestión cultural",
  "Uso de espacios públicos y privados",
  "Salud pública",
  "Presencia de mujeres en el Hip Hop",
  "Presencia de comunidades originarias, afromexicanas y LGBT+ en el Hip Hop",
  "Profesionalización artística",
  "Investigación y patrimonio histórico",
  "Criminalización y punitivismo",
  "Docencia y pedagogía"
]
</script>

<template>
  <section id="actividades" class="scroll-mt-32 bg-white py-20 px-6 border-b-4 border-beatlan-dark">
    <div class="max-w-7xl mx-auto">
      
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl text-beatlan-dark font-beatlan uppercase inline-block border-b-4 border-beatlan-dark pb-2">
          Actividades
        </h2>
        <p class="font-sans text-xl mt-6 max-w-3xl mx-auto">
          Las actividades se centrarán en 10 líneas fundamentales para construir el manifiesto y las propuestas.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        
        <div v-for="(axe, index) in axes" :key="index" 
             class="card-neo bg-white border-2 hover:bg-beatlan-dark hover:text-white transition-colors duration-300 flex flex-col p-6 min-h-[200px] justify-center text-center group cursor-default">
          <span class="text-4xl font-beatlan text-beatlan-teal group-hover:text-beatlan-yellow transition-colors mb-4 block">
            {{ (index + 1).toString().padStart(2, '0') }}
          </span>
          <h3 class="font-sans font-bold text-lg leading-tight uppercase">
            {{ axe }}
          </h3>
        </div>

      </div>

    </div>
  </section>
</template>
