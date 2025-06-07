<script setup>
import ProductCard from './ProductCard.vue'
import ProductCardSkeleton from './ProductCardSkeleton.vue'

defineProps({
    title: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <section class="p-4">
        <h2 class="text-xl sm:text-3xl font-bold mb-4 text-zinc-900 text-center">
            {{ title }}
        </h2>

        <div v-if="products.length === 0"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 justify-items-center">
            <ProductCardSkeleton v-for="n in 10" :key="n" />
        </div>

        <div v-else
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 justify-items-center">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </section>
</template>
