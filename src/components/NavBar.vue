<template>
  <header>
    <nav class="content-wrapper">
      <a href="#container" class="logo">
        <img alt="Our Logo" src="../assets/logo.svg">
      </a>
      <div class="search-form">
        <label class="search"> <input type="text" placeholder="Enter Food name" class="input_element">
        </label>
      </div>
      <div class="navigation">
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link">Menu</a>
        <a href="#" class="nav-link"><img alt="Busket" src="../assets/navbar/shop-svgrepo-com.svg" style="width: 25px"></a>
        <div class="auth">
          <div class="auth-not-reg">
            <img alt="Busket" src="../assets/navbar/man-svgrepo-com.svg" style="width: 23px">
            <span>Sign In</span>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
header{
  font-family: 'Lato', sans-serif;
  border-bottom: 2px solid #E6CDB4FF;
  position: sticky;
  background-color: #E6CDB4FF;
  top: 0;
  z-index: 10;
  display: block;
  height: 90px;
}

.content-wrapper{
  display: grid;
  grid-template-columns: 70px auto 1fr;
  gap: 100px;
  align-items: center;
  padding: 11px 0;
  height: 100%;
  margin: 0 auto;
  max-width: 1280px;
}

.search-form{
  display: flex;
  align-items: center;
  margin: 0 20px;
  width: 100%;
  position: relative;
}

.search{
  height: auto;
  width: 100%;
  position: relative;
  display: block;
}

.input_element{
  padding: 8px 40px;
  border-radius: 60px;
  border-color: antiquewhite;
  background-image: url("https://web-static.burgerkingrus.ru/master/17060/_nuxt/65f97f238bd7d39d6cf0036d33592a6a.svg");
  background-repeat: no-repeat;
  background-position: 10px;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  height: 100%;
  width: 100%;
  border: 1px solid transparent;
  display: block;
  outline: none;
  color: sienna;
}

.navigation{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.nav-link{
  color: sienna;
  text-decoration: none;
  text-transform: uppercase;
  transition: color .3s ease-in-out;
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  order: -1;
}

.nav-link+.nav-link{
  margin-left: 19px;
}

.auth{
  margin: 0 18px;
}

.auth-not-reg{
  display: flex;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  align-items: center;
}

.auth-not-reg span{
  margin-left: 10px;
  color: sienna;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
}

.auth-not-reg span:hover{
  color: #BB9683FF;
}

.nav-link:hover{
  color: #BB9683FF;
}

@media (max-width: 1024px) {
  .content-wrapper{
    padding: 11px 10px;
    height: 100%;
    margin: 0 auto;
    max-width: 1024px;
  }
}

/*@media (max-width: 768px) {*/
/*  .content-wrapper{*/
/*    position: fixed;*/
/*    inset: 0 0 30%;*/
/*    background-color: #E6CDB4FF;*/
/*  }*/
/*  .blur {*/
/*    position: absolute;*/
/*    width: 100%;*/
/*    height: 2000px;*/
/*    z-index: 1;*/
/*    backdrop-filter: blur(2px);*/
/*    background: rgba(0,0,0,.23);*/
/*}*/

</style>