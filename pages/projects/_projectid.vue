<template>
  <ProjectItem :project="project" />
</template>

<script>
import projects from '~/projects'

export default {
  name: 'ProjectPage',
  computed: {
    project() {
      return projects.find((p) => p.id === this.$route.params.projectId)
    },
  },
}
</script>
