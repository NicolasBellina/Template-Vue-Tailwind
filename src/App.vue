<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-white text-2xl font-bold">Mon Application</h1>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/" class="text-white hover:text-gray-400">Accueil</router-link>
          </li>
          <li>
            <router-link to="/about" class="text-white hover:text-gray-400">À Propos</router-link>
          </li>
          <li>
            <router-link to="/contact" class="text-white hover:text-gray-400">Contact</router-link>
          </li>
          <li>
            <router-link to="/Erreur404" class="text-white hover:text-gray-400">Se Connecter</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto py-10">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/* Tu peux ajouter des styles globaux ici si nécessaire */
</style>
