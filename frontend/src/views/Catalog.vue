<template>
  <div class="Catalog">

    <div class="container"> 
      
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">CATALOG CATEGORY</h1>
            <p class="lead text-muted">CATALOG CATEGORY DESCRIPTION</p>
          </div>
        </div>
      </section>
      <FilterBar></FilterBar>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <CatalogElement></CatalogElement>
        <CatalogElement></CatalogElement>
        <CatalogElement></CatalogElement>
        <CatalogElement></CatalogElement>
        <CatalogElement></CatalogElement>
        <CatalogElement></CatalogElement>
      </div>
    </div>
    
    <div class="container">
      <div class="row">

      </div>
    </div>

  </div>
</template>


<script>
  import CatalogElement from "@/components/CatalogElement";
  import FilterBar from "@/components/FilterBar";


  export default {
    name: 'Catalog',
    components: {CatalogElement, FilterBar},
    
  }
</script>
