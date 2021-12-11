<template>
  <div class="px-4 pt-5 my-5 text-center border-bottom">
    <h1 class="display-4 fw-bold">Сезон открыт!</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Скидки на сняржение для активного отдыха и спорта! Успей купить до февраля!</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Просмотреть товары</button>
      </div>
    </div>
    <div class="overflow-hidden" style="max-height: 30vh;">
      <div class="container px-5">
        <img src="https://www.ledilid.com/wp-content/uploads/2014/12/sport_winter.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromoCenter"
}
</script>