<script setup lang="ts">
import { ref } from 'vue'
import { useModal } from '../composables/useModal'

const { isRegistrationModalOpen, closeModal } = useModal()

const currentStep = ref(1)

const formData = ref({
  nombres: '',
  apellidoPaterno: '',
  apellidoMaterno: '',
  seudonimo: '',
  correo: '',
  telefono: '',
  ciudad: '',
  estado: '',
  
  rol: '',
  experiencia: 0,
  otrosEventos: 'No',
  cualesEventos: '',
  organizacion: 'No',
  cualOrganizacion: '',
  
  actividadSeleccionada: '',
  actividades: [] as string[],
  matchmaking: 'No',
  expectativas: '',
  area1: '',
  area2: '',
  area3: '',
  importancia: '5'
})

const axes = [
  "Industria artística y marketing",
  "Gestión cultural",
  "Uso de espacios públicos y privados",
  "Salud pública",
  "Presencia de mujeres en el Hip Hop",
  "Presencia de comunidades originarias y afromexicanas",
  "Comunidades LGBT+ en el Hip Hop",
  "Profesionalización artística",
  "Investigación y patrimonio histórico",
  "Criminalización y punitivismo",
  "Docencia y pedagogía"
]

const nextStep = () => { if (currentStep.value < 4) currentStep.value++ }
const prevStep = () => { if (currentStep.value > 1) currentStep.value-- }
const isLoading = ref(false)
const matriculaGenerada = ref('')
const errorMsg = ref('')

const submitForm = async () => {
  isLoading.value = true
  errorMsg.value = ''
  try {
    const payload = { ...formData.value }
    payload.actividades = [payload.actividadSeleccionada]
    
    const response = await fetch('/beatlan/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    
    const data = await response.json()
    if (data.success) {
      matriculaGenerada.value = data.matricula
    } else {
      errorMsg.value = data.error || 'Ocurrió un error al registrarte.'
    }
  } catch (err) {
    errorMsg.value = 'Error de conexión con el servidor.'
  } finally {
    isLoading.value = false
  }
}

const finishAndClose = () => {
  matriculaGenerada.value = ''
  currentStep.value = 1
  closeModal()
}
</script>

<template>
  <Transition name="fade">
    <div v-if="isRegistrationModalOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black bg-opacity-80 backdrop-blur-sm">
      
      <div class="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-4 border-beatlan-dark shadow-flat-lg rounded-none">
        
        <!-- Close Button -->
        <button @click="closeModal" class="absolute top-4 right-4 bg-white border-4 border-beatlan-dark w-12 h-12 flex items-center justify-center font-beatlan text-2xl hover:bg-beatlan-orange hover:text-white transition-colors z-20">
          X
        </button>

        <div class="p-8 md:p-12 overflow-hidden">
          
          <div class="text-center mb-10">
            <h2 class="text-4xl md:text-5xl text-beatlan-dark font-beatlan uppercase inline-block border-b-4 border-beatlan-dark pb-2">
              Registro de Participantes
            </h2>
          </div>

          <!-- Progress Bar -->
          <div class="flex justify-between items-center mb-10 border-b-4 border-beatlan-dark pb-6 overflow-x-auto whitespace-nowrap">
            <div :class="['flex-1 text-center font-beatlan text-xl uppercase transition-colors px-2', currentStep >= 1 ? 'text-beatlan-teal' : 'text-gray-400']">1. Personales</div>
            <div :class="['flex-1 text-center font-beatlan text-xl uppercase transition-colors border-l-4 border-beatlan-dark px-2', currentStep >= 2 ? 'text-beatlan-teal' : 'text-gray-400']">2. Profesional</div>
            <div :class="['flex-1 text-center font-beatlan text-xl uppercase transition-colors border-l-4 border-beatlan-dark px-2', currentStep >= 3 ? 'text-beatlan-teal' : 'text-gray-400']">3. Mesas</div>
            <div :class="['flex-1 text-center font-beatlan text-xl uppercase transition-colors border-l-4 border-beatlan-dark px-2', currentStep >= 4 ? 'text-beatlan-teal' : 'text-gray-400']">4. Intereses</div>
          </div>

          <div v-if="matriculaGenerada" class="text-center py-10">
            <h3 class="text-3xl font-beatlan text-beatlan-teal uppercase mb-4">¡Registro Exitoso!</h3>
            <p class="font-sans text-xl mb-6">Tu registro ha sido guardado. Esta es tu matrícula única, por favor guárdala para cualquier aclaración:</p>
            <div class="bg-gray-100 border-4 border-beatlan-dark py-6 px-10 inline-block mb-8 shadow-flat">
              <span class="font-black text-5xl tracking-widest">{{ matriculaGenerada }}</span>
            </div>
            <div>
              <button @click="finishAndClose" class="btn-neo bg-beatlan-dark text-white hover:bg-gray-800 px-10">
                Aceptar
              </button>
            </div>
          </div>

          <form v-else @submit.prevent="submitForm" class="relative">
            <Transition name="slide" mode="out-in">
              
              <!-- STEP 1: Datos Personales -->
              <div v-if="currentStep === 1" :key="'step1'" class="space-y-6">
                <h3 class="font-beatlan text-3xl text-beatlan-orange mb-6">Datos Personales y de Contacto</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="flex flex-col md:col-span-2">
                    <label class="font-sans font-bold mb-2">Nombre(s) *</label>
                    <input type="text" v-model="formData.nombres" required class="border-4 border-beatlan-dark p-3 focus:outline-none focus:ring-0 focus:border-beatlan-teal font-sans">
                  </div>
                  <div class="flex flex-col">
                    <label class="font-sans font-bold mb-2">Apellido Paterno *</label>
                    <input type="text" v-model="formData.apellidoPaterno" required class="border-4 border-beatlan-dark p-3 focus:outline-none focus:ring-0 focus:border-beatlan-teal font-sans">
                  </div>
                  <div class="flex flex-col">
                    <label class="font-sans font-bold mb-2">Apellido Materno *</label>
                    <input type="text" v-model="formData.apellidoMaterno" required class="border-4 border-beatlan-dark p-3 focus:outline-none focus:ring-0 focus:border-beatlan-teal font-sans">
                  </div>
                  <div class="flex flex-col">
                    <label class="font-sans font-bold mb-2">Seudónimo (Opcional)</label>
                    <input type="text" v-model="formData.seudonimo" class="border-4 border-beatlan-dark p-3 focus:outline-none focus:ring-0 focus:border-beatlan-teal font-sans">
                  </div>
                  <div class="flex flex-col">
                    <label class="font-sans font-bold mb-2">Correo electrónico *</label>
                    <input type="email" v-model="formData.correo" required class="border-4 border-beatlan-dark p-3 focus:outline-none focus:ring-0 focus:border-beatlan-teal font-sans">
                  </div>
                  <div class="flex flex-col md:col-span-2">
                    <label class="font-sans font-bold mb-2">Número de teléfono *</label>
                    <input type="tel" v-model="formData.telefono" required class="border-4 border-beatlan-dark p-3 focus:outline-none focus:ring-0 focus:border-beatlan-teal font-sans">
                  </div>
                  <div class="flex flex-col">
                    <label class="font-sans font-bold mb-2">Ciudad *</label>
                    <input type="text" v-model="formData.ciudad" required class="border-4 border-beatlan-dark p-3 focus:outline-none focus:ring-0 focus:border-beatlan-teal font-sans">
                  </div>
                  <div class="flex flex-col">
                    <label class="font-sans font-bold mb-2">Estado *</label>
                    <select v-model="formData.estado" required class="border-4 border-beatlan-dark p-3 focus:outline-none focus:ring-0 focus:border-beatlan-teal font-sans bg-white">
                      <option value="" disabled>Selecciona un estado...</option>
                      <option value="Aguascalientes">Aguascalientes</option>
                      <option value="Baja California">Baja California</option>
                      <option value="Baja California Sur">Baja California Sur</option>
                      <option value="Campeche">Campeche</option>
                      <option value="Chiapas">Chiapas</option>
                      <option value="Chihuahua">Chihuahua</option>
                      <option value="Ciudad de México">Ciudad de México</option>
                      <option value="Coahuila">Coahuila</option>
                      <option value="Colima">Colima</option>
                      <option value="Durango">Durango</option>
                      <option value="Estado de México">Estado de México</option>
                      <option value="Guanajuato">Guanajuato</option>
                      <option value="Guerrero">Guerrero</option>
                      <option value="Hidalgo">Hidalgo</option>
                      <option value="Jalisco">Jalisco</option>
                      <option value="Michoacán">Michoacán</option>
                      <option value="Morelos">Morelos</option>
                      <option value="Nayarit">Nayarit</option>
                      <option value="Nuevo León">Nuevo León</option>
                      <option value="Oaxaca">Oaxaca</option>
                      <option value="Puebla">Puebla</option>
                      <option value="Querétaro">Querétaro</option>
                      <option value="Quintana Roo">Quintana Roo</option>
                      <option value="San Luis Potosí">San Luis Potosí</option>
                      <option value="Sinaloa">Sinaloa</option>
                      <option value="Sonora">Sonora</option>
                      <option value="Tabasco">Tabasco</option>
                      <option value="Tamaulipas">Tamaulipas</option>
                      <option value="Tlaxcala">Tlaxcala</option>
                      <option value="Veracruz">Veracruz</option>
                      <option value="Yucatán">Yucatán</option>
                      <option value="Zacatecas">Zacatecas</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- STEP 2: Perfil Profesional -->
              <div v-else-if="currentStep === 2" :key="'step2'" class="space-y-6">
                <h3 class="font-beatlan text-3xl text-beatlan-orange mb-6">Perfil Profesional y Trayectoria</h3>
                
                <div class="flex flex-col">
                  <label class="font-sans font-bold mb-2">¿Cuál es tu rol principal en el mundo del Hip Hop? *</label>
                  <p class="text-sm text-gray-500 mb-2">(Ej: Artista, promotor, gestor cultural, docente, investigador)</p>
                  <input type="text" v-model="formData.rol" required class="border-4 border-beatlan-dark p-3 focus:outline-none focus:ring-0 focus:border-beatlan-teal font-sans">
                </div>

                <div class="flex flex-col w-1/3 min-w-[150px]">
                  <label class="font-sans font-bold mb-2">Años de experiencia *</label>
                  <input type="number" min="0" v-model="formData.experiencia" required class="border-4 border-beatlan-dark p-3 focus:outline-none focus:ring-0 focus:border-beatlan-teal font-sans">
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="flex flex-col">
                    <label class="font-sans font-bold mb-2">¿Has participado en otros eventos de Hip Hop?</label>
                    <select v-model="formData.otrosEventos" class="border-4 border-beatlan-dark p-3 focus:outline-none focus:ring-0 focus:border-beatlan-teal font-sans bg-white">
                      <option>No</option>
                      <option>Sí</option>
                    </select>
                    <input v-if="formData.otrosEventos === 'Sí'" type="text" v-model="formData.cualesEventos" placeholder="Especifica cuáles..." class="mt-2 border-4 border-beatlan-dark p-3 focus:outline-none focus:ring-0 focus:border-beatlan-teal font-sans">
                  </div>

                  <div class="flex flex-col">
                    <label class="font-sans font-bold mb-2">¿Perteneces a alguna organización o colectivo?</label>
                    <select v-model="formData.organizacion" class="border-4 border-beatlan-dark p-3 focus:outline-none focus:ring-0 focus:border-beatlan-teal font-sans bg-white">
                      <option>No</option>
                      <option>Sí</option>
                    </select>
                    <input v-if="formData.organizacion === 'Sí'" type="text" v-model="formData.cualOrganizacion" placeholder="¿Cuál?" class="mt-2 border-4 border-beatlan-dark p-3 focus:outline-none focus:ring-0 focus:border-beatlan-teal font-sans">
                  </div>
                </div>
              </div>

              <!-- STEP 3: Actividades de Trabajo -->
              <div v-else-if="currentStep === 3" :key="'step3'" class="space-y-6">
                <h3 class="font-beatlan text-3xl text-beatlan-orange mb-6">Selección de Mesas de Diálogo</h3>
                
                <div class="flex flex-col mb-6">
                  <label class="font-sans font-bold mb-4">¿A qué mesa de diálogo te gustaría unirte? (Selecciona solo una) *</label>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-2">
                    <label v-for="(axe, idx) in axes" :key="idx" class="flex items-start gap-3 cursor-pointer p-2 hover:bg-gray-50 border-2 border-transparent hover:border-gray-200">
                      <input type="radio" name="mesa_dialogo" :value="axe" v-model="formData.actividadSeleccionada" required class="mt-1 w-5 h-5 accent-beatlan-teal flex-shrink-0">
                      <span class="font-sans text-sm md:text-base">{{ axe }}</span>
                    </label>
                  </div>
                </div>

                <div class="flex flex-col p-4 bg-gray-100 border-4 border-beatlan-dark">
                  <label class="font-sans font-bold mb-2">¿Estás interesado en participar en el proceso de matchmaking? *</label>
                  <div class="flex gap-6">
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" value="Sí" v-model="formData.matchmaking" class="w-5 h-5 accent-beatlan-teal"> <span class="font-sans font-bold">Sí</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" value="No" v-model="formData.matchmaking" class="w-5 h-5 accent-beatlan-teal"> <span class="font-sans font-bold">No</span>
                    </label>
                  </div>
                </div>
              </div>

              <!-- STEP 4: Intereses y Expectativas -->
              <div v-else-if="currentStep === 4" :key="'step4'" class="space-y-6">
                <h3 class="font-beatlan text-3xl text-beatlan-orange mb-6">Intereses, Expectativas y Motivaciones</h3>
                
                <div class="flex flex-col">
                  <label class="font-sans font-bold mb-2">¿Qué esperas lograr participando en las actividades? *</label>
                  <p class="text-sm text-gray-500 mb-2">(Ej: conectar para colaboraciones, generar alianzas, construir propuestas de políticas públicas)</p>
                  <textarea v-model="formData.expectativas" required rows="3" class="border-4 border-beatlan-dark p-3 focus:outline-none focus:ring-0 focus:border-beatlan-teal font-sans"></textarea>
                </div>

                <div class="flex flex-col">
                  <label class="font-sans font-bold mb-4">Indica de forma concreta 3 áreas o temas específicos en los que buscas colaboraciones:</label>
                  <div class="space-y-3">
                    <input type="text" v-model="formData.area1" placeholder="Tema 1" class="w-full border-4 border-beatlan-dark p-3 focus:outline-none focus:ring-0 focus:border-beatlan-teal font-sans">
                    <input type="text" v-model="formData.area2" placeholder="Tema 2 (opcional)" class="w-full border-4 border-beatlan-dark p-3 focus:outline-none focus:ring-0 focus:border-beatlan-teal font-sans">
                    <input type="text" v-model="formData.area3" placeholder="Tema 3 (opcional)" class="w-full border-4 border-beatlan-dark p-3 focus:outline-none focus:ring-0 focus:border-beatlan-teal font-sans">
                  </div>
                </div>

                <div class="flex flex-col p-4 bg-beatlan-yellow border-4 border-beatlan-dark mt-6 overflow-x-auto">
                  <label class="font-sans font-bold mb-2">En una escala del 1 al 5, ¿qué tan importante consideras que este evento impulse conexiones estratégicas en el ámbito del Hip Hop?</label>
                  <div class="flex justify-between items-center min-w-[300px] mt-2 px-2">
                    <span class="font-bold text-sm">Nada (1)</span>
                    <label v-for="n in 5" :key="n" class="flex flex-col items-center cursor-pointer">
                      <span class="mb-1 font-bold">{{ n }}</span>
                      <input type="radio" :value="n" v-model="formData.importancia" class="w-5 h-5 accent-beatlan-dark">
                    </label>
                    <span class="font-bold text-sm">(5) Mucho</span>
                  </div>
                </div>
              </div>

            </Transition>
            
            <!-- Form Navigation Buttons -->
            <div class="flex justify-between mt-10 pt-6 border-t-4 border-beatlan-dark">
              <button type="button" v-if="currentStep > 1" @click="prevStep" class="btn-neo bg-gray-200">
                Atrás
              </button>
              <div v-else></div> <!-- Spacer -->
              
              <button type="button" v-if="currentStep < 4" @click="nextStep" class="btn-neo bg-beatlan-teal text-white border-beatlan-teal hover:bg-teal-700">
                Siguiente
              </button>
              
              <div v-if="errorMsg" class="mt-4 p-4 bg-red-100 text-red-700 font-bold border-l-4 border-red-500 text-sm">
                {{ errorMsg }}
              </div>
              
              <button type="submit" v-if="currentStep === 4" :disabled="isLoading" class="btn-neo bg-beatlan-orange text-white border-beatlan-orange hover:bg-orange-600 px-6 sm:px-10 disabled:opacity-50">
                {{ isLoading ? 'Enviando...' : 'Enviar' }}
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Slide animations for wizard steps */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Fade animation for modal overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
