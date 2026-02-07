import { ref, onMounted } from 'vue'

const isDark = ref(false)

export function useDarkMode() {
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    updateDarkMode()
  }

  const updateDarkMode = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }

  const initializeDarkMode = () => {
    // Check localStorage or system preference
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
      isDark.value = savedMode === 'true'
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDark.value = true
    }
    updateDarkMode()
  }

  onMounted(() => {
    initializeDarkMode()
  })

  return {
    isDark,
    toggleDarkMode,
  }
}
