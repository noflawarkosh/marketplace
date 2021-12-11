<template>
  <div class="Checkout">
  
    <div class="container">
      <OrderForm></OrderForm>
    </div>
  

  </div>
</template>


<script>

  import OrderForm from "@/components/OrderForm";

  export default {
    name: 'Checkout',
    components: {OrderForm},
    
  }
</script>
  