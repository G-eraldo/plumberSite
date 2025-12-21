<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <div class="font-sans text-slate-900 bg-[#FAFAFA] relative scroll-smooth">

    <nav class="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-200">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span class="text-xl font-black uppercase tracking-widest text-slate-800">Forge & Flux</span>
        </div>
        <div class="hidden md:flex space-x-10 text-sm font-bold uppercase tracking-wider text-slate-500">
          <a href="#accueil" class="hover:text-amber-600 transition">Accueil</a>
          <a href="#services" class="hover:text-amber-600 transition">Expertise</a>
          <a href="#contact" class="hover:text-amber-600 transition">Contact</a>
        </div>
        <a href="#contact"
          class="bg-slate-900 text-white px-4 text-xs lg:text-sm lg:px-6 py-2.5 rounded-full font-bold hover:bg-amber-600 transition shadow-xl">
          DEVIS RAPIDE
        </a>
      </div>
    </nav>

    <section id="accueil" class="min-h-screen flex items-center pt-32 pb-24 lg:py-32 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        <div class="lg:col-span-7">
          <h1 class="text-6xl md:text-8xl font-black leading-[0.9] mb-8 text-slate-900">
            L'ART DE LA <br> <span class="text-amber-500">PLOMBERIE.</span>
          </h1>
          <p class="text-xl text-slate-500 mb-10 max-w-md leading-relaxed border-l-4 border-amber-500 pl-6">
            Solutions durables et design pour vos espaces d'eau. Intervention experte sur Paris & Banlieue.
          </p>
          <div class="flex flex-col sm:flex-row gap-5">
            <a href="#contact"
              class="bg-amber-500 text-white px-10 py-5 rounded-full text-lg font-black hover:bg-slate-900 transition-all text-center">
              RÉSERVER UNE INTERVENTION
            </a>
          </div>
        </div>
        <div class="lg:col-span-5 relative">
          <div
            class="relative z-10 rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800" alt="Work">
          </div>
          <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-100 rounded-full -z-10 blur-3xl opacity-60" />
        </div>
      </div>
    </section>

    <section id="services" class="pt-24 pb-24 lg:py-32 bg-slate-900 text-white rounded-[3rem] mx-4">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div class="max-w-xl">
            <h2 class="text-5xl font-black mb-6">SERVICES <span class="text-amber-500">SUR-MESURE.</span></h2>
            <p class="text-slate-400 text-lg">De la réparation d'urgence à la conception de salles de bain haut de
              gamme.</p>
          </div>
          <div class="text-amber-500 font-bold tracking-widest uppercase text-sm border-b-2 border-amber-500 pb-2">
            Découvrez notre savoir-faire
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-1px bg-slate-800 border border-slate-800">
          <div v-for="service in services" :key="service.title"
            class="bg-slate-900 p-12 hover:bg-slate-800 transition-colors group">
            <span class="text-amber-500 text-sm font-bold mb-8 block opacity-50 group-hover:opacity-100 italic">{{
              service.id }}</span>
            <h3 class="text-2xl font-bold mb-4 group-hover:text-amber-500 transition-colors">{{ service.title }}</h3>
            <p class="text-slate-400 leading-relaxed mb-8">{{ service.description }}</p>
            <div class="w-10 h-1px bg-slate-700 group-hover:w-full transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-32">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <h2 class="text-5xl font-black mb-16 text-slate-900 uppercase">Projet en vue ?</h2>

        <form class="space-y-4" @submit.prevent="handleSubmit">
          <input required type="text" placeholder="Votre Nom"
            class="w-full bg-white border-b-2 border-slate-200 p-6 focus:border-amber-500 outline-none transition-colors text-xl font-medium rounded-2xl">
          <input required type="email" placeholder="Email"
            class="w-full bg-white border-b-2 border-slate-200 p-6 focus:border-amber-500 outline-none transition-colors text-xl font-medium rounded-2xl">
          <textarea required placeholder="Dites-nous tout..." rows="3"
            class="w-full bg-white border-b-2 border-slate-200 p-6 focus:border-amber-500 outline-none transition-colors text-xl font-medium rounded-2xl" />

          <div class="pt-10">
            <button type="submit"
              class="group relative inline-flex items-center justify-center px-16 py-6 overflow-hidden font-black text-white transition duration-300 ease-out bg-slate-900 rounded-full shadow-xl">
              <span
                class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-amber-500 group-hover:translate-x-0 ease">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span
                class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease uppercase tracking-widest">Envoyer
                la demande</span>
              <span class="relative invisible uppercase tracking-widest">Envoyer la demande</span>
            </button>
          </div>
        </form>
      </div>
    </section>

    <footer class="py-20 bg-white border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <p class="text-slate-400 font-medium">© 2024 Forge & Flux Artisanat</p>
        <div class="flex gap-8 text-slate-900 font-bold text-sm uppercase">
          <a href="#" class="hover:text-amber-500">Instagram</a>
          <a href="#" class="hover:text-amber-500">LinkedIn</a>
        </div>
      </div>
    </footer>

    <Transition name="slide">
      <div v-if="showToast" class="fixed bottom-8 right-8 z-100">
        <div class="bg-amber-500 text-white px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-4">
          <div class="bg-white/20 p-2 rounded-lg">🚀</div>
          <div>
            <p class="font-black uppercase text-xs tracking-widest">Portfolio Info</p>
            <p class="text-sm font-medium">Logique d'envoi à connecter (API/Backend).</p>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const showToast = ref(false)

const services = [
  { id: '01', title: 'Rénovation Design', description: 'Conception de salles de bain modernes alliant esthétique et performance hydraulique.' },
  { id: '02', title: 'Dépannage Expert', description: 'Diagnostic précis et réparation durable de vos systèmes de chauffage et plomberie.' },
  { id: '03', title: 'Maintenance Or', description: 'Contrats d’entretien pour assurer la longévité de vos installations et prévenir les sinistres.' }
]

const handleSubmit = () => {
  showToast.value = true
  setTimeout(() => showToast.value = false, 4000)
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>