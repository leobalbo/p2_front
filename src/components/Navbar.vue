<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import { useRouter } from "vue-router";
import axios from "axios";

const categories = ref([]);
const navRef = ref(null);
const lastScrollY = ref(0);
const isVisible = ref(true);
const router = useRouter();

const fetchCategories = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products/categories");
    categories.value = res.data;
  } catch (err) {
    console.error("Erro ao buscar categorias:", err);
  }
};

const handleScroll = () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollY.value && currentScroll > 100) {
    if (isVisible.value) {
      isVisible.value = false;
      gsap.to(navRef.value, { y: -100, duration: 0.3, ease: "power2.out" });
    }
  } else {
    if (!isVisible.value) {
      isVisible.value = true;
      gsap.to(navRef.value, { y: 0, duration: 0.3, ease: "power2.out" });
    }
  }

  lastScrollY.value = currentScroll;
};

const goToCategory = (category) => {
  router.push({ name: 'CatalogView', params: { category } });
};

onMounted(() => {
  fetchCategories();
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav ref="navRef" class="z-5 w-full sticky top-20 hidden sm:block">
    <div class="container mx-auto px-4 py-2">
      <ul class="flex gap-4 justify-between text-sm font-medium text-zinc-800">
        <li v-for="category in categories.slice(0, 8)" :key="category"
          class="cursor-pointer capitalize hover:text-indigo-400 transition-colors"
          @click="goToCategory(category.slug)">
          {{ category.name }}
        </li>
      </ul>
    </div>
  </nav>
</template>
