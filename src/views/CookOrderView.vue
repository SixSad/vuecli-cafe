<template>
  <div>
    <Orders/>
  </div>
</template>

<script>
import Orders from "@/components/Cook/Orders";

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