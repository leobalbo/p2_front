<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { ShoppingCart, Star, StarHalf } from "lucide-vue-next"
import ProductPagesSkeleton from '../components/ProductPagesSkeleton.vue'

const route = useRoute()
const product = ref(null)
const loading = ref(true)
const error = ref(null)
const selectedImage = ref('')
const quantity = ref(1)

const fetchProduct = async () => {
    try {
        loading.value = true
        // await new Promise(resolve => setTimeout(resolve, 1000));
        const res = await axios.get(`https://dummyjson.com/products/${route.params.id}`)
        product.value = res.data
        selectedImage.value = res.data.thumbnail
    } catch (err) {
        error.value = 'Erro ao carregar o produto. Tente novamente mais tarde.'
        console.error(err)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    fetchProduct()
})

</script>

<template>
    <section class="p-4 md:p-8 max-w-6xl mx-auto">
        <div v-if="loading" class="flex flex-col md:flex-row gap-8 lg:gap-12 animate-pulse">
            <ProductPagesSkeleton />
        </div>

        <div v-else-if="product" class="flex flex-col md:flex-row gap-8 lg:gap-12">

            <div class="md:w-1/2 flex flex-col gap-4">
                <figure class="w-full aspect-square border border-zinc-200 rounded-lg overflow-hidden">
                    <img :src="selectedImage" :alt="product.title"
                        class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                </figure>
                <div class="flex gap-2 flex-wrap">
                    <button v-for="img in product.images" :key="img" @click="selectedImage = img"
                        class="w-20 h-20 rounded-md overflow-hidden border-2 transition-colors"
                        :class="selectedImage === img ? 'border-indigo-500' : 'border-transparent hover:border-zinc-200'">
                        <img :src="img" :alt="`Imagem miniatura de ${product.title}`"
                            class="w-full h-full object-cover">
                    </button>
                </div>
            </div>

            <div class="md:w-1/2 flex flex-col">
                <span class="text-sm text-indigo-400 capitalize font-semibold">{{ product.category }}</span>
                <h1 class="text-3xl lg:text-4xl font-bold mt-1">{{ product.title }}</h1>

                <div class="flex items-center gap-4 text-sm text-zinc-500 mt-2">
                    <span>Marca: <span class="font-semibold text-zinc-400">{{ product.brand }}</span></span>
                    <span class="text-zinc-600">•</span>
                    <span class="font-semibold px-2 py-1 rounded"
                        :class="product.stock > 0 ? 'bg-green-500 text-zinc-100' : 'bg-red-500 text-zinc-100'">
                        {{ product.stock > 0 ? product.stock + ' Em estoque' : 'Indisponível' }}
                    </span>
                </div>

                <div class="flex items-center gap-2 mt-4">
                    <div class="flex items-center text-yellow-500">
                        <template v-for="i in 5" :key="i">
                            <Star v-if="product.rating >= i" :size="20" fill="currentColor" />
                            <StarHalf v-else-if="product.rating >= i - 0.5" :size="20" fill="currentColor" />
                            <Star v-else :size="20" class="text-zinc-200" fill="currentColor" />
                        </template>
                    </div>
                    <span class="text-sm text-zinc-500">({{ product.rating.toFixed(2) }})</span>
                </div>

                <p class="text-zinc-500 mt-6 leading-relaxed">{{ product.description }}</p>

                <div class="mt-6">
                    <p class="text-3xl font-bold text-indigo-400">
                        R$ {{ product.price.toFixed(2).replace('.', ',') }}
                    </p>
                    <p v-if="product.price > 10" class="text-sm text-zinc-500 mt-1">
                        ou 12x de R$ {{ (product.price / 12).toFixed(2).replace('.', ',') }} sem juros
                    </p>
                </div>

                <div class="mt-8 pt-6 border-t border-zinc-200 flex gap-4 items-end">
                    <div>
                        <label for="quantity" class="block text-sm font-medium text-zinc-400 mb-1">Qtd.</label>
                        <select id="quantity" v-model="quantity"
                            class="border border-zinc-300 rounded-md px-4 py-3 text-zinc-900">
                            <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
                        </select>
                    </div>
                    <button
                        class="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-md w-full font-medium shadow-md hover:bg-indigo-500 transition-colors">
                        <span class="flex items-center gap-3 text-zinc-50">
                            <ShoppingCart :size="20" />
                            Adicionar ao carrinho
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>