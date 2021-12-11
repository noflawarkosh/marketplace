<template>
  <div class="Home">
    
    <Carousel></Carousel>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 mb-3">Будьте в курсе событий</h1>
        <p class="col-lg-10 fs-4">Зарегистрируйтесь или войдите, чтобы не пропустить персональных предложений, а также сохранить товары, которые вам понравились</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-light">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Почта</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Пароль</label>
          </div>

          
          <button class="w-100 btn btn-lg btn-primary" type="submit">Войти</button>
          <hr class="my-4">
          <button class="w-100 btn btn-lg btn-secondary" type="submit">Зарегистрироваться</button>

        </form>
      </div>
    </div>
  </div>
    
    <div class="container">
      <div class="row">

      </div>
    </div>

  </div>
</template>


<script>
  import Carousel from "@/components/Carousel";


  export default {
    name: 'Home',
    components: {Carousel},
    
  }
</script>
