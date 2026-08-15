<script setup lang="ts">
</script>

<template>
  <footer class="relative md:fixed md:bottom-0 left-0 w-full min-h-[50vh] bg-beatlan-dark z-0 flex flex-col justify-between pt-16 pb-8 px-6 border-t-8 border-beatlan-teal">
    <div class="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-12 flex-1">
      
      <!-- Brand & Logo -->
      <div class="flex flex-col gap-6">
        <img src="/logo.png" alt="Beatlán Logo" class="w-48" />
        <p class="text-white font-sans text-lg opacity-80">
          Políticas Públicas para el Hip Hop Mexicano.
        </p>
      </div>

      <!-- Teléfonos -->
      <div class="flex flex-col gap-4 text-white font-sans">
        <h4 class="font-beatlan text-3xl text-beatlan-yellow uppercase mb-2">Teléfonos</h4>
        <a href="tel:+525512345678" class="text-lg md:text-xl hover:text-beatlan-teal transition-colors flex items-center gap-3">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          +52 55 1234 5678
        </a>
        <a href="tel:+525587654321" class="text-lg md:text-xl hover:text-beatlan-teal transition-colors flex items-center gap-3">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          +52 55 8765 4321
        </a>
      </div>

      <!-- Correos -->
      <div class="flex flex-col gap-4 text-white font-sans">
        <h4 class="font-beatlan text-3xl text-beatlan-yellow uppercase mb-2">Correos</h4>
        <a href="mailto:hola@beatlan.mx" class="text-lg md:text-xl hover:text-beatlan-teal transition-colors flex items-center gap-3">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          hola@beatlan.mx
        </a>
        <a href="mailto:registro@beatlan.mx" class="text-lg md:text-xl hover:text-beatlan-teal transition-colors flex items-center gap-3">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          registro@beatlan.mx
        </a>
      </div>

      <!-- Social Grid -->
      <div class="flex flex-col gap-4 text-white md:items-end">
        <h4 class="font-beatlan text-3xl text-beatlan-yellow uppercase mb-2">Redes</h4>
        <div class="flex gap-4">
          <!-- Facebook -->
          <a href="https://www.facebook.com/beatlan.mx" target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-white flex items-center justify-center border-2 border-transparent hover:border-beatlan-teal hover:bg-beatlan-teal hover:text-beatlan-dark transition-all text-beatlan-dark group">
            <svg class="w-6 h-6 fill-current transition-colors" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path></svg>
          </a>
          <!-- Instagram -->
          <a href="https://www.instagram.com/beatlan.mx" target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-white flex items-center justify-center border-2 border-transparent hover:border-beatlan-teal hover:bg-beatlan-teal hover:text-beatlan-dark transition-all text-beatlan-dark group">
            <svg class="w-6 h-6 fill-current transition-colors" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
          </a>
        </div>
      </div>
      
    </div>
    
    <!-- Copyright -->
    <div class="w-full text-center mt-12 border-t border-gray-700 pt-6">
      <p class="font-sans text-sm text-gray-400 opacity-80">
        Beatlán Derechos Reservados Beatlán 2026
      </p>
    </div>
  </footer>
</template>
