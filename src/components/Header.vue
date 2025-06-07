<script setup>
import gsap from "gsap";
import { House, Menu, ShoppingBasket, BookOpen, X } from "lucide-vue-next";
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

const headerRef = ref(null);
const isMobileMenuOpen = ref(false);

onMounted(() => {
    gsap.from(headerRef.value, {
        y: -100,
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
    });
});
</script>

<template>
    <header ref="headerRef" class="sticky top-0 z-50 h-20 w-full bg-gradient-to-t from-transparent backdrop-blur-md">

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">

            <div>
                <RouterLink to="/">
                    <h1 class="text-3xl font-bold tracking-tight">
                        e<span class="text-indigo-400">.</span>Commerce
                    </h1>
                </RouterLink>
            </div>

            <div class="hidden md:flex space-x-10">
                <RouterLink to="/cart" class="p-1 rounded-full hover:text-zinc-50 hover:bg-indigo-500 hover:shadow-md">
                    <div class="flex gap-1 p-1 items-center">
                        <component :is="ShoppingBasket" :size="24" class="text-current" />
                    </div>
                </RouterLink>
            </div>

            <div class="md:hidden">
                <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-zinc-900">

                    <span class="sr-only">Abrir menu</span>
                    <Menu v-if="!isMobileMenuOpen" class="size-6" />
                    <X v-else class="size-6" />
                </button>
            </div>

        </div>

        <Transition name="slide-down">
            <div v-if="isMobileMenuOpen"
                class="md:hidden absolute top-full left-0 w-full bg-zinc-100 border-b border-zinc-100/60 shadow-2xl p-6">

                <div class="flex flex-col space-y-8 items-center">
                    <RouterLink to="/cart">
                        <div class="flex gap-1 p-1 items-center">
                            <component :is="ShoppingBasket" :size="24" />
                            Carrinho
                        </div>
                    </RouterLink>
                </div>
            </div>
        </Transition>
    </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
    transform: translateY(-30px);
    opacity: 0;
}
</style>