<template>
  <div>
    <Orders/>
  </div>
</template>

<script>

export default {
  name: "CookView",
  components: {
    Orders
  },
  data() {
    return {
      addShow: false,
    }
  },
  methods: {
  }
}
</script>

<style scoped>
button {
  margin-bottom: 10px;
}
</style>