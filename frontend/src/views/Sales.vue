<template>
  <div class="Sales">
    
    <div class="container">
      <div class="row">
          <PromoCenter></PromoCenter>
          <div class="row align-items-md-stretch">
            <PromoStretchDark></PromoStretchDark>
            <PromoStretchLight></PromoStretchLight>
          </div>
      </div>
    </div>
  </div>
</template>


<script>
  import PromoCenter from "@/components/PromoCenter";
  import PromoStretchDark from "@/components/PromoStretchDark";
  import PromoStretchLight from "@/components/PromoStretchLight";

  export default {
    name: 'Sales',
    components: {PromoCenter, PromoStretchDark, PromoStretchLight},
    
  }
</script>
