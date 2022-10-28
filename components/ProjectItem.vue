<template>
  <div class="">
    <div class="container mx-auto py-10 px-10">
      <NuxtLink
        to="/"
        class="inline-block text-orange-800 hover:text-amber-600 text-xl mb-4"
        >Back to Homepage
      </NuxtLink>
      <div
        class="mb-4 w-full mx-auto bg-white rounded shadow-md hover:shadow-lg transition-shadow bg-stone-100 overflow-hidden"
      >
        <div class="columns-1 md:columns-2 gap-2">
          <img
            v-for="(image, index) in project.images"
            :key="index"
            class="object-cover w-full aspect-auto mb-2"
            :alt="project.name"
            :src="image"
          />
        </div>
        <div class="pt-2 pb-4 px-4">
          <div class="text-lg mb-2">
            {{ project.name }}
          </div>
          <p class="text-sm text-slate-500 mb-2">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap">
            <span
              v-for="technology in project.technologies"
              :key="technology"
              class="text-xs text-slate-100 mr-1 mb-1 py-1 px-2 rounded-xl border bg-stone-500"
            >
              {{ technology }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    project: { type: Object, default: null },
  },
}
</script>

<style></style>
