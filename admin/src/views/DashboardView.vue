<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const registrations = ref<any[]>([])
const isLoading = ref(true)

const logout = () => {
  localStorage.removeItem('admin_token')
  router.push({ name: 'login' })
}

const fetchRegistrations = async () => {
  const token = localStorage.getItem('admin_token')
  try {
    const res = await fetch('/api/admin/registrations', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    if (res.status === 401 || res.status === 403) {
      logout()
      return
    }
    
    const data = await res.json()
    if (data.success) {
      registrations.value = data.registrations
    }
  } catch (error) {
    console.error('Failed to fetch registrations', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchRegistrations()
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 font-sans">
    <header class="bg-black text-white p-6 flex justify-between items-center shadow-md">
      <h1 class="text-2xl font-black uppercase text-yellow-400">Beatlán Admin Panel</h1>
      <button @click="logout" class="bg-transparent border-2 border-white px-4 py-2 hover:bg-white hover:text-black transition-colors font-bold text-sm">
        CERRAR SESIÓN
      </button>
    </header>

    <main class="max-w-7xl mx-auto p-6 mt-8">
      <div class="flex justify-between items-end mb-6">
        <div>
          <h2 class="text-3xl font-black uppercase border-b-4 border-black pb-2 inline-block">Registros Recientes</h2>
          <p class="text-gray-600 mt-2">Total de participantes registrados: <span class="font-bold">{{ registrations.length }}</span></p>
        </div>
        <button @click="fetchRegistrations" class="bg-teal-500 text-white font-bold px-4 py-2 hover:bg-teal-600 transition-colors">
          Actualizar
        </button>
      </div>

      <div v-if="isLoading" class="text-center py-20 font-bold text-xl text-gray-500">
        Cargando registros...
      </div>
      
      <div v-else class="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-gray-200 border-b-4 border-black">
                <th class="p-4 font-black">Matrícula</th>
                <th class="p-4 font-black">Fecha</th>
                <th class="p-4 font-black">Nombre</th>
                <th class="p-4 font-black">Correo</th>
                <th class="p-4 font-black">Teléfono</th>
                <th class="p-4 font-black">Ubicación</th>
                <th class="p-4 font-black">Rol / Exp.</th>
                <th class="p-4 font-black">Matchmaking</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="registrations.length === 0">
                <td colspan="8" class="p-8 text-center text-gray-500 font-medium">No hay registros todavía.</td>
              </tr>
              <tr v-for="reg in registrations" :key="reg.id" class="border-b-2 border-gray-200 hover:bg-yellow-50 transition-colors">
                <td class="p-4 font-bold text-teal-700">{{ reg.matricula }}</td>
                <td class="p-4 text-sm text-gray-600">{{ new Date(reg.createdAt).toLocaleDateString() }}</td>
                <td class="p-4 font-bold">{{ reg.nombres }} {{ reg.apellidoPaterno }} {{ reg.apellidoMaterno }}</td>
                <td class="p-4 text-blue-600 text-sm"><a :href="'mailto:'+reg.correo">{{ reg.correo }}</a></td>
                <td class="p-4 text-sm">{{ reg.telefono }}</td>
                <td class="p-4 text-sm">{{ reg.ciudad }}, {{ reg.estado }}</td>
                <td class="p-4 text-sm">{{ reg.rol }} <span class="text-gray-500">({{ reg.experiencia }} años)</span></td>
                <td class="p-4 font-bold" :class="reg.matchmaking === 'Sí' ? 'text-green-600' : 'text-gray-400'">{{ reg.matchmaking }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>
