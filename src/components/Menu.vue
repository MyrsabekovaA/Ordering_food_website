<template>
<!--  <div>-->
<!--    <div ref="sideNav" class="bm-menu">-->
<!--      <nav class="bm-item-list">-->
<!--        <slot></slot>-->
<!--      </nav>-->
<!--      <span class="bm-cross-button cross-style" @click="closeMenu" :class="{ hidden: !crossIcon }">-->
<!--                <span v-for="(x, index) in 2" :key="x" class="bm-cross" :style="{ position: 'absolute', width: '3px', height: '14px',transform: index === 1 ? 'rotate(45deg)' : 'rotate(-45deg)'}">-->
<!--                </span>-->
<!--            </span>-->
<!--    </div>-->

<!--    <div ref="bmBurgerButton" class="bm-burger-button" @click="openMenu" :class="{ hidden: !burgerIcon }">-->
<!--      <span class="bm-burger-bars line-style" :style="{top:20 * (index * 2) + '%'}" v-for="(x, index) in 3" :key="index"></span>-->
<!--    </div>-->

<!--  </div>-->


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
    </nav>
    <div class="mobile-nav" v-show="mobile">
      <div>
        <div ref="sideNav" class="bm-menu">
          <nav class="bm-item-list">
            <slot>
            </slot>
          </nav>
          <span class="bm-cross-button cross-style" @click="closeMenu" :class="{ hidden: !crossIcon }">
                <span v-for="(x, index) in 2" :key="x" class="bm-cross" :style="{ position: 'absolute', width: '3px', height: '14px',transform: index === 1 ? 'rotate(45deg)' : 'rotate(-45deg)'}">
                </span>
            </span>
        </div>

        <div ref="bmBurgerButton" class="bm-burger-button" @click="openMenu" :class="{ hidden: !burgerIcon }">
          <span class="bm-burger-bars line-style" :style="{top:20 * (index * 2) + '%'}" v-for="(x, index) in 3" :key="index"></span>
        </div>

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
  name: 'MenuBar',
  data() {
    return {
      isSideBarOpen: false,
        scrollPosition: null,
        mobile: null,
        mobileNav: null,
        windowWidth: null
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      required: false
    },
    right: {
      type: Boolean,
      required: false
    },
    width: {
      type: [String],
      required: false,
      default: '300'
    },
    disableEsc: {
      type: Boolean,
      required: false
    },
    noOverlay: {
      type: Boolean,
      required: false
    },
    onStateChange: {
      type: Function,
      required: false
    },
    burgerIcon: {
      type: Boolean,
      required: false,
      default: true
    },
    crossIcon: {
      type: Boolean,
      required: false,
      default: true
    },
    disableOutsideClick: {
      type: Boolean,
      required: false,
      default: false
    },
    closeOnNavigation: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    openMenu() {
      this.$emit('openMenu');
      this.isSideBarOpen = true;

      if (!this.noOverlay) {
        document.body.classList.add('bm-overlay');
      }
      if (this.right) {
        this.$refs.sideNav.style.left = 'auto';
        this.$refs.sideNav.style.right = '0px';
      }
      this.$nextTick(function() {
        this.$refs.sideNav.style.width = this.width
            ? this.width + 'px'
            : '300px';
      });
    },

    closeMenu() {
      this.$emit('closeMenu');
      this.isSideBarOpen = false;
      document.body.classList.remove('bm-overlay');
      this.$refs.sideNav.style.width = '0px';
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
    },

    closeMenuOnEsc(e) {
      e = e || window.event;
      if (e.key === 'Escape' || e.keyCode === 27) {
        this.closeMenu();
      }
    },
    documentClick(e) {
      let element = this.$refs.bmBurgerButton;
      let target = null;
      if (e && e.target) {
        target = e.target;
      }

      if (
          element &&
          element !== target &&
          !element.contains(target) &&
          !this.hasClass(target,'bm-menu') &&
          this.isSideBarOpen &&
          !this.disableOutsideClick
      ) {
        this.closeMenu();
      } else if (
          element &&
          this.hasClass(target,'bm-menu') &&
          this.isSideBarOpen &&
          this.closeOnNavigation
      ) {
        this.closeMenu();
      }
    },
    hasClass(element, className) {
      do {
        if (element.classList && element.classList.contains(className)) {
          return true;
        }
        element = element.parentNode;
      } while (element);
      return false;
    },
  },

  mounted() {
    if (!this.disableEsc) {
      document.addEventListener('keyup', this.closeMenuOnEsc);
    }
  },
  created: function() {
    document.addEventListener('click', this.documentClick);

    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  unmounted: function() {
    document.removeEventListener('keyup', this.closeMenuOnEsc);
    document.removeEventListener('click', this.documentClick);
  },
  watch: {
    isOpen: {
      deep: true,
      immediate: true,
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          if (!oldValue && newValue) {
            this.openMenu();
          }
          if (oldValue && !newValue) {
            this.closeMenu();
          }
        });
      }
    },
    right: {
      deep: true,
      immediate: true,
      handler(oldValue, newValue) {
        if (oldValue) {
          this.$nextTick(() => {
            this.$refs.bmBurgerButton.style.left = 'auto';
            this.$refs.bmBurgerButton.style.right = '36px';
            this.$refs.sideNav.style.left = 'auto';
            this.$refs.sideNav.style.right = '0px';
            document.querySelector('.bm-burger-button').style.left = 'auto';
            document.querySelector('.bm-burger-button').style.right = '36px';
            document.querySelector('.bm-menu').style.left = 'auto';
            document.querySelector('.bm-menu').style.right = '0px';
            document.querySelector('.cross-style').style.right='250px';
          });
        }
        if (newValue) {
          if (
              this.$refs.bmBurgerButton.hasAttribute('style')
          ) {
            this.$refs.bmBurgerButton.removeAttribute('style');
            this.$refs.sideNav.style.right = 'auto';
            document
                .querySelector('.bm-burger-button')
                .removeAttribute('style');
            document.getElementById('sideNav').style.right = 'auto';
            document.querySelector('.cross-style').style.right='0px';
          }
        }
      }
    }
  }
};
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


.bm-burger-button {
  display: flex;
  align-items: center;
  position: absolute;
  width: 20px;
  height: 20px;
  left: 36px;
  top: 21px;
  cursor: pointer;
}
.bm-burger-button.hidden {
  display: none;
}
.bm-burger-bars {
  background-color: #373a47;
}
.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  background: black;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-cross-button.hidden {
  display: none;
}
.bm-menu {
  //background-color: #f5ebdc;
  //padding: 16px;
  //position: fixed;
  //left: 0;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //z-index: 100;
  //backdrop-filter: blur(5px);
  //bottom: 0;
  //top:64px;

  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #f5ebdc;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
.bm-item-list {
  color: #b8b7ad;
  margin-left: 5%;
  font-size: 20px;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}
</style>
