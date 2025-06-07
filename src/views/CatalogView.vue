<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import ProductCard from '../components/ProductCard.vue'

const route = useRoute()
const products = ref([])
const category = ref(route.params.category)
const page = ref(1)
const limit = 10
const totalProducts = ref(0)

const fetchProductsByCategory = async () => {
    try {
        const skip = (page.value - 1) * limit
        const res = await axios.get(`https://dummyjson.com/products/category/${category.value}?limit=${limit}&skip=${skip}`)
        products.value = res.data.products
        totalProducts.value = res.data.total
    } catch (err) {
        console.error(err)
    }
}

onMounted(fetchProductsByCategory)

watch(() => route.params.category, (newCategory) => {
    category.value = newCategory
    page.value = 1
    fetchProductsByCategory()
})

watch(page, () => {
    fetchProductsByCategory()
})

const totalPages = computed(() => Math.ceil(totalProducts.value / limit))

const nextPage = () => {
    if (page.value < totalPages.value) page.value++
}
const prevPage = () => {
    if (page.value > 1) page.value--
}
</script>

<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold mb-4 capitalize">{{ category }}</h1>

        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 justify-items-center">
            <ProductCard v-for="p in products" :key="p.id" :product="p" />
        </div>

        <div v-if="totalProducts > limit" class="flex justify-center gap-4 mt-6">
            <button @click="prevPage" :disabled="page === 1"
                class="px-4 py-2 bg-indigo-600 text-zinc-50 rounded disabled:bg-gray-500">
                Anterior
            </button>

            <span class="text-zinc-900 self-center">Página {{ page }} de {{ totalPages }}</span>

            <button @click="nextPage" :disabled="page === totalPages"
                class="px-4 py-2 bg-indigo-600 text-white rounded disabled:bg-gray-500">
                Próxima
            </button>
        </div>
    </div>
</template>
