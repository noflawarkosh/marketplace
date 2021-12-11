<template>
  <div id="app">
    
      <header class="py-3 mb-3 border-bottom">
        <div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr 2fr;">
          <div class="dropdown">
            <a href="#" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle" id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">
              <img src = "../src/assets/logo-text.png" class='rounded float-start' height="30px">
            </a>
            
            <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownNavLink" style="">
              <li><a class="dropdown-item active" href="/" aria-current="page">Главная</a></li>
              <li><a class="dropdown-item" href="/catalog">Каталог</a></li>
              <li><a class="dropdown-item" href="/sales">Акции</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/about">О нас</a></li>

            </ul>
          </div>

          <div class="d-flex align-items-center">
            <form class="w-100 me-3">
              <input type="search" class="form-control" placeholder="Поиск..." aria-label="Search">
            </form>

            <div class="flex-shrink-0 dropdown">
              <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
              </a>
              <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                <li><a class="dropdown-item" href="/cart">Корзина</a></li>
                <li><a class="dropdown-item" href="/orders">Мои заказы</a></li>
                <li><a class="dropdown-item" href="/showcase">Моя витрина</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="/profile">Профиль</a></li>
                <li><a class="dropdown-item" href="/settings">Настройки</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Выйти</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
        

      <router-view/>

       

      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
            </a>
            <span class="text-muted">© 2021 MARKETPLACE</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
            <img src = "../src/assets/logo.png" class='rounded float-start' height="30px">
          </ul>
        </footer>
      </div>
      
  </div>
</template>






