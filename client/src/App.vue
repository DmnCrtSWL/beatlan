<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useModal } from './composables/useModal'
import RegistrationModal from './components/RegistrationModal.vue'
import FooterSection from './components/FooterSection.vue'

const { openModal } = useModal()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Navigation Bar -->
    <header class="relative bg-white border-b-4 border-beatlan-dark shadow-flat sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <!-- Mobile Hamburger Button -->
        <button @click="toggleMobileMenu" class="md:hidden z-[60] w-10 h-10 flex flex-col justify-center gap-1.5 focus:outline-none">
          <span :class="['w-8 h-1 transition-all', isMobileMenuOpen ? 'rotate-45 translate-y-2.5 bg-white' : 'bg-beatlan-dark']"></span>
          <span :class="['w-8 h-1 transition-all', isMobileMenuOpen ? 'opacity-0 bg-white' : 'bg-beatlan-dark']"></span>
          <span :class="['w-8 h-1 transition-all', isMobileMenuOpen ? '-rotate-45 -translate-y-2.5 bg-white' : 'bg-beatlan-dark']"></span>
        </button>

        <!-- Desktop Left Links -->
        <nav class="hidden md:flex gap-8 font-beatlan text-2xl tracking-wide flex-1 justify-end pr-[101px] items-center">
          <a href="#" class="hover:text-beatlan-teal transition-colors">Inicio</a>
          <a href="#convocatoria" class="hover:text-beatlan-teal transition-colors">Convocatoria</a>
        </nav>

        <!-- Center Logo (Absolute) -->
        <div class="absolute left-1/2 -translate-x-1/2 top-1 z-10 w-40 md:w-48">
          <a href="#">
            <img src="/logo.png" alt="Beatlán Logo" class="w-full h-auto drop-shadow-md hover:scale-105 transition-transform" />
          </a>
        </div>

        <!-- Desktop Right Links -->
        <nav class="hidden md:flex gap-8 font-beatlan text-2xl tracking-wide flex-1 justify-start pl-[101px] items-center">
          <a href="#actividades" class="hover:text-beatlan-teal transition-colors">Actividades</a>
          <!-- Highlighted CTA in the nav -->
          <button @click="openModal" class="bg-beatlan-yellow text-beatlan-dark border-2 border-beatlan-dark px-4 py-1 hover:shadow-flat transition-all hover:-translate-y-0.5">
            Registro
          </button>
        </nav>

        <!-- Spacer for mobile right side to keep logo centered -->
        <div class="md:hidden w-10 h-10"></div>
      </div>
    </header>

    <!-- Mobile Full-screen Menu Overlay -->
    <Transition name="fade">
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[100] bg-beatlan-dark flex flex-col items-center justify-center">
        
        <!-- Close Button (Visible over the dark overlay) -->
        <button @click="closeMobileMenu" class="absolute top-5 left-6 w-10 h-10 flex flex-col justify-center gap-1.5 focus:outline-none">
          <span class="w-8 h-1 bg-white rotate-45 translate-y-2.5 transition-all"></span>
          <span class="w-8 h-1 bg-white opacity-0 transition-all"></span>
          <span class="w-8 h-1 bg-white -rotate-45 -translate-y-2.5 transition-all"></span>
        </button>
        <nav class="flex flex-col gap-10 font-beatlan text-5xl tracking-widest text-center text-white">
          <a href="#" @click="closeMobileMenu" class="hover:text-beatlan-teal transition-colors">Inicio</a>
          <a href="#convocatoria" @click="closeMobileMenu" class="hover:text-beatlan-teal transition-colors">Convocatoria</a>
          <a href="#actividades" @click="closeMobileMenu" class="hover:text-beatlan-teal transition-colors">Actividades</a>
          
          <button @click="() => { closeMobileMenu(); openModal(); }" class="btn-neo mt-8 bg-beatlan-yellow border-beatlan-yellow text-beatlan-dark hover:bg-yellow-400">
            Registro
          </button>
        </nav>
      </div>
    </Transition>

    <!-- Main Content Area -->
    <main class="relative z-10 bg-background md:mb-[50vh] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] pb-10 md:pb-0">
      <RouterView />
    </main>

    <!-- Global Registration Modal -->
    <RegistrationModal />
    
    <!-- Parallax Footer -->
    <FooterSection />

  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
