<template>
  <div class="flex flex-col items-center w-full">
    <div class="w-full h-96 relative overflow-hidden">
      <img :src="currentImage" alt="Photo du club" class="w-full h-full object-cover transition-opacity duration-500" />

      <button @click="prevImage"
        class="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75">
        &#10094;
      </button>

      <button @click="nextImage"
        class="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75">
        &#10095;
      </button>
    </div>

    <section class="mt-8 w-full max-w-4xl px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
        <h3 class="font-bold text-xl mb-2">Résultats</h3>
        <p>Consultez les résultats des équipes du club</p>
      </div>

      <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
        <h3 class="font-bold text-xl mb-2">FFVB</h3>
        <p>Lien vers le site officiel de la Fédération Française de Volley</p>
      </div>

      <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
        <h3 class="font-bold text-xl mb-2">Autres services</h3>
        <p>Liens vers inscriptions, réservations ou informations diverses</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  '/src/assets/clubpic1.jpg',
  '/src/assets/clubpic2.jpg'
]

const currentIndex = ref(0)
const currentImage = ref(images[currentIndex.value])

let interval = null

onMounted(() => {
  interval = setInterval(nextImage, 5000)
})
onUnmounted(() => {
  clearInterval(interval)
})

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % images.length
  currentImage.value = images[currentIndex.value]
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
  currentImage.value = images[currentIndex.value]
}
</script>
