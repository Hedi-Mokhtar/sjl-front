<template>
    <header class="bg-red-600 text-white p-4 flex items-center justify-between">

        <RouterLink to="/">
            <img src="/src/assets/logo.jpg" alt="Logo Club" class="h-12 w-12 object-contain" />
        </RouterLink>

        <h1 class="text-2xl font-bold text-center flex-1">
            Sport Joie Lille
        </h1>

        <nav class="space-x-4">
            <RouterLink to="/" class="hover:underline">Accueil</RouterLink>
            <RouterLink to="/teams" class="hover:underline">Équipes</RouterLink>
            <RouterLink to="/schedule" class="hover:underline">Horaires</RouterLink>
            <RouterLink to="/contact" class="hover:underline">Contact</RouterLink>
        </nav>
    </header>
</template>
