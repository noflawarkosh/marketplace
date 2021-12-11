<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Twelfth navbar example">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul class="navbar-nav">
            

            
            <li class="nav-item">
              <a class="nav-link" href="#">Горящие товары</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link disabled">Winter Sale</a>
            </li>
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown10" data-bs-toggle="dropdown" aria-expanded="false">Женщины</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown10">
                <li><a class="dropdown-item" href="#">ALL</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">ITEM</a></li>
                <li><a class="dropdown-item" href="#">ITEM</a></li>
                <li><a class="dropdown-item" href="#">ITEM</a></li>
              </ul>
            </li>
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown10" data-bs-toggle="dropdown" aria-expanded="false">Мужчины</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown10">
                <li><a class="dropdown-item" href="#">ALL</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">ITEM</a></li>
                <li><a class="dropdown-item" href="#">ITEM</a></li>
                <li><a class="dropdown-item" href="#">ITEM</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown10" data-bs-toggle="dropdown" aria-expanded="false">Дети</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown10">
                <li><a class="dropdown-item" href="#">ALL</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">ITEM</a></li>
                <li><a class="dropdown-item" href="#">ITEM</a></li>
                <li><a class="dropdown-item" href="#">ITEM</a></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: "FilterBar"
}
</script>