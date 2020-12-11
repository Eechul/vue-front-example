<template>
  <div class="d-flex justify-content-center col-12">
    <DeliveryItem v-for="deli in getDelivery" :key="deli.id"></DeliveryItem>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import DeliveryItem from "./DeliveryItem";

export default {
  components: {
    DeliveryItem
  },
  computed: {
    ...mapGetters([
      'getDelivery'
    ])
  }
}
</script>

<style scoped>

</style>
