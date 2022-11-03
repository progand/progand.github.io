<template>
  <div>
    <div class="text-center p-3">
      <LogoImage class="h-16 inline-block" />
    </div>
    <ProjectsList :projects="projects" />
  </div>
</template>

<script>
import projects from '../projects'
export default {
  name: 'IndexPage',
  data() {
    return { projects }
  },
}
</script>
