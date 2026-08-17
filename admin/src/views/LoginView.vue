<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const errorMsg = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
  isLoading.value = true
  errorMsg.value = ''
  
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, password: password.value })
    })
    
    const data = await res.json()
    if (data.success) {
      localStorage.setItem('admin_token', data.token)
      router.push({ name: 'dashboard' })
    } else {
      errorMsg.value = data.error || 'Error al iniciar sesión'
    }
  } catch (err) {
    errorMsg.value = 'Error de conexión con el servidor'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center p-6 font-sans">
    <div class="w-full max-w-md bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-black uppercase text-black">Beatlán Admin</h1>
        <p class="text-gray-500 mt-2">Acceso al panel de control</p>
      </div>
      
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block font-bold mb-2">Usuario</label>
          <input type="text" v-model="username" required class="w-full border-2 border-black p-3 focus:outline-none focus:ring-0 focus:border-teal-500">
        </div>
        <div>
          <label class="block font-bold mb-2">Contraseña</label>
          <input type="password" v-model="password" required class="w-full border-2 border-black p-3 focus:outline-none focus:ring-0 focus:border-teal-500">
        </div>
        
        <div v-if="errorMsg" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 font-bold text-sm">
          {{ errorMsg }}
        </div>
        
        <button type="submit" :disabled="isLoading" class="w-full bg-yellow-400 border-2 border-black p-3 font-black uppercase hover:bg-yellow-500 transition-colors disabled:opacity-50">
          {{ isLoading ? 'Ingresando...' : 'Entrar' }}
        </button>
      </form>
    </div>
  </div>
</template>
