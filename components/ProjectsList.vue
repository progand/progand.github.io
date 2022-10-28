<template>
  <div>
    <div class="container mx-auto pt-10 px-10  text-xl uppercase">
      <div class="border-b pb-2">
      My Projects
      </div>
    </div>
    <div class="container mx-auto columns-3xs gap-4 py-10 px-10">
      <div
        v-for="project in projects"
        :key="project.id"
        class="break-inside-avoid"
      >
        <div
          class="mb-4 w-full mx-auto bg-white rounded shadow-md hover:shadow-lg transition-shadow bg-stone-100"
        >
          <NuxtLink :to="`/projects/${project.id}`" class="">
            <img
              class="object-cover w-full aspect-video rounded-t"
              :alt="project.name"
              :src="project.image"
            />
          </NuxtLink>
          <div class="pt-2 pb-4 px-4">
            <NuxtLink
              :to="`/projects/${project.id}`"
              class="text-orange-800 hover:text-amber-600 text-lg mb-2 block truncate hover:text-clip"
            >
              {{ project.name }}
            </NuxtLink>
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
  </div>
</template>

<script>
export default {
  name: 'ProjectsList',
  props: {
    projects: { type: Array, default: null },
  },
}
</script>

<style></style>
