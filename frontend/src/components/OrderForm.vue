<template>
  <main>
    <div class="py-5 text-center">
      <img class="d-block mx-auto mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
      <h2>Оформление заказа</h2>
      <p class="lead">Введите ваши данные для завершения процедуры формирования заказа</p>
    </div>

    <div class="row g-5">
      <div class="col-md-5 col-lg-4 order-md-last">
        
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Ваш заказ</span>
          <span class="badge bg-primary rounded-pill">3</span>
        </h4>
        
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">NAME</h6>
              <small class="text-muted">DESCRIPTION</small>
            </div>
            <span class="text-muted">COST</span>
          </li>
          
          
          <li class="list-group-item d-flex justify-content-between bg-light">
            <div class="text-success">
              <h6 class="my-0">PROMO</h6>
              <small>PROMOCODENAME</small>
            </div>
            <span class="text-success">COST</span>
          </li>
          
          <li class="list-group-item d-flex justify-content-between">
            <span>ИТОГО (РУБ.)</span>
            <strong>COST</strong>
          </li>
        </ul>

        <form class="card p-2">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Введите промокод">
            <button type="submit" class="btn btn-secondary">Применить</button>
          </div>
        </form>
      </div>
      
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Персональные данные</h4>
        <form class="needs-validation" novalidate="">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">Имя</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Фамилия</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="username" class="form-label">Имя пользователя</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" id="username" placeholder="username" required="">
              <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">E-mail <span class="text-muted">(не обязательно)</span></label>
              <input type="email" class="form-control" id="email" placeholder="email@example.com">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Адрес</label>
              <input type="text" class="form-control" id="address" placeholder="г. Белгород, ул. Лермонтова, д. 2" required="">
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>


            <div class="col-md-3">
              <label for="zip" class="form-label">Индекс</label>
              <input type="text" class="form-control" id="zip" placeholder="" required="">
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr class="my-4">

          <h4 class="mb-3">Данные для оплаты</h4>

          <div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required="">
              <label class="form-check-label" for="credit">Онлайн банковской картой</label>
            </div>
  
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required="">
              <label class="form-check-label" for="paypal">Наличные при получении</label>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Имя на карте</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required="">
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Номер карты</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required="">
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Срок действия</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr class="my-4">

          <button class="w-100 btn btn-primary btn-lg" type="submit">Оформить заказ</button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "OrderForm"
}
</script>