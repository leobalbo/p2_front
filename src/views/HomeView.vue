<script setup>
import ProductCard from '../components/ProductCard.vue'
import Showcase from '../components/Showcase.vue'

import { ref, onMounted } from 'vue'
import axios from 'axios'

const showcase01 = ref([])
const showcase02 = ref([])

onMounted(async () => {
    try {
        const res1 = await axios.get('https://dummyjson.com/products?limit=10&skip=0')
        const res2 = await axios.get('https://dummyjson.com/products?limit=10&skip=10')

        showcase01.value = res1.data.products
        showcase02.value = res2.data.products
    } catch (error) {
        console.error('Erro ao carregar produtos:', error)
    }
})
</script>

<template>
    <div class="bg-zinc-50 text-zinc-950">
        <Showcase title="Titulo Vitrine 01" :products="showcase01" />
        <Showcase title="Titulo Vitrine 02" :products="showcase02" />
    </div>
</template>
