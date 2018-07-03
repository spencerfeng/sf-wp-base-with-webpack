<template>
  <p class="text-center">{{ content }}</p>
</template>

<script>
export default {
  data: () => {
    return {
      content: 'This is an example component'
    }
  }
}
</script>

<style scoped>
p {
  font-size: 1.2rem;
  color: red;
}
</style>