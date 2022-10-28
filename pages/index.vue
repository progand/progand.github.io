<template>
  <ProjectsList :projects="projects" />
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
