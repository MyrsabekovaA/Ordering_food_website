<template>
  <header :class="{ 'scrolled-nav' : scrollPosition }">
    <nav>
      <div class="search-form" v-show="!mobile">
        <label class="search"> <input type="text" placeholder="Enter Food name" class="input_element">
        </label>
      </div>
      <a class="branding" v-show="!mobile">
        <img alt="Our Logo" src="../assets/logo.svg">
      </a>
      <ul class="navigation" v-show="!mobile">
        <li><a class="link"  href="#">Menu</a></li>
        <li><div class="auth-button">
          <div  class="auth_not-user">
            <i class="fa-solid fa-user"></i>
            <span>Sign In</span>
          </div>
        </div></li>
        <li><a class="busket-button"  href="#">
          <span></span>
          <i class="fa-solid fa-basket-shopping"></i>
        </a></li>
      </ul>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown">
          <div class="menu">
              <div class="menu-content">
                <div class="menu_items">
                <a class="item">Menu</a>
                <a class="item">Contacts</a>
                <a class="item">FAQ</a>
                <a class="item">About</a>
              </div>
                <div class="additional">
                <div class="socials">
                  <a href="#" class="social">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </div>
              </div>
          </div>
        </ul>
      </transition>
    </nav>
    <div class="mobile-nav" v-show="mobile">
      <div class="icon" @click="toggleMobileNav">
        <i class="fa-solid fa-bars" :class="{'icon-active': mobileNav}"></i>
      </div>
      <div class="branding-mobile">
        <img alt="Our Logo" src="../assets/logo.svg">
      </div>
      <div class="auth-button-mobile">
        <div  class="auth_not-user">
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MobileNav",
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen () {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <=800){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  background-color: #f5ebdc;
  border-bottom: 2px solid #f5ebdc;
  position: sticky;
  z-index: 99;
  width: 100%;
  top: 0;
  @media (max-width: 769px) {
    padding: 9px 16px;
  }

  nav{
    @media (min-width: 770px) {
      display: grid;
      grid-template-columns: 1fr 40px 1fr;
      align-items: center;
      padding: 12px 0;
      max-width: 1280px;
      margin: 0 auto;
    }
    @media (max-width: 769px) {
      padding: 0;
    }

    .search-form{
      align-items: center;
      display: flex;
      margin: 0 20px;
      width: 100%;
      position: relative;

      .search{
        height: auto;
        width: 100%;
        position: relative;
        display: block;

        input{
          padding: 8px 40px;
          font-size: 14px;
          line-height: 18px;
          border-radius: 60px;
          border-color: #d7c7b4;
          background-image: url("https://web-static.burgerkingrus.ru/master/17060/_nuxt/65f97f238bd7d39d6cf0036d33592a6a.svg");
          background-repeat: no-repeat;
          background-position: 10px;

          .input_element{
            height: 100%;
            width: 100%;
            appearance: none;
            border: 1px solid transparent;
            display: block;
            outline: none;
            color: #502314;
          }
        }
      }
    }

    ul, .link{
      list-style: none;
      text-decoration: none;
    }

    li{
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link{
      color: #502314;
      font-size: 14px;
      font-weight: 700;
      transition: color .3s ease-in-out;
      line-height: 19px;

      &:hover{
        color: #85321b;
      }
    }

    .auth-button{
      margin: 0 18px;
    }

    .auth_not-user{
      display: flex;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 700;
      line-height: 19px;
      cursor: pointer;
      align-items: center;
      color: #502314;
      @media (max-width: 768px) {
        margin: 0 18px;
      }

      i{
        width: 24px;
        height: 24px;
        flex-shrink: 0;
      }

      span{
        margin-left: 12px;
      }
    }

    .busket-button{
      background-color: #d7c7b4;
      pointer-events: none;
      border-radius: 31px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #f5ebdc;
      padding: 8px 0;
      width: 75px;
      font-size: 16px;
      line-height: 18px;
      text-decoration: none;
      position: relative;

      i{
        width: 14px;
        height: 16px;
      }
    }

    .branding{
      display: flex;
      align-items: center;


      img{
        width: 54px;
        height: 54px;
        //transition: .5s ease all;
      }
    }

    .navigation{
      display: flex;
      align-items: center;
      //flex: 1;
      justify-content: flex-end;
    }

    .icon{
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 70px;
      height: 100%;
      width: 30px;
      @media (max-width: 768px) {
        left: 20px;
        display: flex;
        align-items: center;
      }

      i{
        cursor: pointer;
        font-size: 24px;
        //transition: .8s ease all;
        //z-index: 100;
        color: #502314;
      }
    }

    .icon-active{
      transform: rotate(180deg);
    }

    .dropdown{
      background-color: #f5ebdc;
      padding: 16px;
      position: fixed;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100;
      backdrop-filter: blur(5px);
      bottom: 0;
      top:64px;
      //min-height: 100%;

      //flex-direction: column;
      //width: 100%;
      //max-width: 250px;
      //height: 100%;
      //@media (min-width: 768px) {
      //  top:64px;}
      //@media (min-width: 425px) {
      //  top:64px;}
      //@media (min-width: 375px) {
      //  top:64px;}

      .menu{
        overflow-y: auto;
        flex-grow: 1;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        display: flex;
        margin: 0 auto;

        .menu_items{
          width: 100%;
          margin-right: 0;
          grid-gap: 0;
          gap: 0;
          display: flex;
          flex-direction: column;
        }

        .item{
          font-size: 20px;
          line-height: 120%;
          font-family: 'Titan One', cursive;
          border-bottom: 1px solid #d7c7b4;
          padding: 16px 0;
          color: inherit;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .item:after{
          content: "";
          display: block;
          width: 9px;
          height: 14px;
          background-image: url("https://web-static.burgerkingrus.ru/master/17060/_nuxt/e5af6222a40c8fcea6748e0fd415820d.svg");
          background-size: contain;
          transform: rotate(180deg);
          opacity: .3;
        }
      }

      .menu-content{
        flex-direction: row;
        padding: 0;
        width: 100%;
        background-color: #f5ebdc;
        display: flex;
        flex-wrap: wrap;
        min-width: 220px;
        align-items: flex-start;
        grid-gap: 15px 0;
        gap: 15px 0;
      }

      li{
        margin-right: 0;
        .link{
          color: black;
        }
      }
    }
  }

  .mobile-nav{
    width: 100%;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .branding-mobile{
      margin-left: auto;
      margin-right: auto;
      img{
        width: 40px;
        height: 40px;
      }
    }

    .auth-button-mobile{
      display: flex;
      justify-content: flex-end;
    }
  }

  .additional{
    margin-right: 0;
    flex-direction: column;
    grid-gap: 20px;
    gap: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-self: flex-end;

    .socials{
      justify-content: center;
      align-items: center;
      display: grid;
      grid-column-gap: 12px;
      grid-template-columns: repeat(3, 32px);
      min-width: 50%;
    }

    .social{
      width: 32px;
      height: 32px;
      margin: 0;
      background-color: #87604f;
      border-radius:50px;
      display: flex;
      cursor: pointer;
      color: #f5ebdc;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>