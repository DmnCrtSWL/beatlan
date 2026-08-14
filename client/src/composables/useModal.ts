import { ref } from 'vue'

const isRegistrationModalOpen = ref(false)

export function useModal() {
  const openModal = () => {
    isRegistrationModalOpen.value = true
  }

  const closeModal = () => {
    isRegistrationModalOpen.value = false
  }

  return {
    isRegistrationModalOpen,
    openModal,
    closeModal
  }
}
