<template>
  <div id="home">
    <component :is="currentMenu" :right="side === 'right' ? true: false">
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
    </component>
    <main id="page-wrap">
      <div class="about_part">
        <div class="about_text">
          <h1>About part</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos laborum maiores maxime pariatur porro praesentium quae rerum vitae, voluptates! Soluta?
          </p>
        </div>
        <section class="third-section">
          <div id="images-wrapper">
            <img class="piece section_3_06" src="@/assets/burger/bulochka_up.svg" />
            <img class="piece section_3_05" src="@/assets/burger/salad.svg" />
            <img class="piece section_3_04" src="@/assets/burger/tomato.svg" />
            <img class="piece section_3_03" src="@/assets/burger/cheese.svg" />
            <img class="piece section_3_02" src="@/assets/burger/cotlet.svg" />
            <img class="piece section_3_01" src="@/assets/burger/bulochka_down.svg" />
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import push from '@/components/push';
import MenuBar from '@/components/Menu';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import scrollmagic from '@/plugins/scrollmagic';
// import ScrollMagic from 'scrollmagic';
// import { TimelineMax, Power3 } from 'gsap/all';

export default {
  name: 'HomePage',
  data() {
    return {
      menus: {
        push: {buttonText: 'Push'},
      },
      side: 'left',
      currentMenu: 'push',
    };
  },
  components: {
    push,
    Menu: MenuBar
  },
  mounted: function () {
    this.startAnimations()
  },
  methods: {
    startAnimations: function () {

      gsap.to(".section_3_02", {
        scrollTrigger: {
          trigger: ".section_3_02",
          start: "top center",
          toggleActions: "restart pause reverse pause"
        },
        opacity: 1,
        y: 250,
        duration: 1,
        pin: true,
        scrub: true,
        })

      gsap.to(".section_3_01", {
        scrollTrigger: {
          trigger: ".section_3_01",
          start: "top center",
          toggleActions: "restart pause reverse pause"
        },
        opacity: 1,
        y: 0,
        duration: 1,
        pin: true,
        scrub: true,
      })

      gsap.to(".section_3_03", {
        scrollTrigger: {
          trigger: ".section_3_03",
          start: "top center",
          toggleActions: "restart pause reverse pause"
        },
        opacity: 1,
        y: 220,
        duration: 2,
        pin: true,
        scrub: true,
      })

      gsap.to(".section_3_04", {
        scrollTrigger: {
          trigger: ".section_3_04",
          start: "top center",
          toggleActions: "restart pause reverse pause"
        },
        opacity: 1,
        y: 190,
        duration: 2,
        pin: true,
        scrub: true,
      })

      gsap.to(".section_3_05", {
        scrollTrigger: {
          trigger: ".section_3_05",
          start: "top center",
          toggleActions: "restart pause reverse pause"
        },
        opacity: 1,
        y: 80,
        duration: 2,
        pin: true,
        scrub: true,
      })

      gsap.to(".section_3_06", {
        scrollTrigger: {
          trigger: ".section_3_06",
          start: "top center",
          toggleActions: "restart pause reverse pause"
        },
        opacity: 1,
        y: 120,
        duration: 2,
        pin: true,
        scrub: true,
      })
    },
  },
}

</script>

<style lang="scss" scoped>

html {
  height: 100%;
}

body {
  height: 100%;
  font-family: 'Titan One', cursive;
  margin: 0;
}

#home {
  height: 100%;
}

//.scroll-snap-container {
//  height: 500px;
//  width: 500px;
//}

//a {
//  color: #4e4a46;
//  text-decoration: none;
//
//  &:hover,
//  &:focus {
//    color: #c94e50;
//  }
//}

main {
  height: 100%;
  //padding: 3em 2em;
  text-align: center;
  background: #f5ebdc;
  //overflow: auto;
}

.about_part{
  //overflow: hidden;
  background-color: #502314;
  width: 100%;
  display: flex;
  text-align: center;
  height: 600px;
}
//
//h1 {
//  font-weight: 800;
//  font-size: 3.75em;
//}
//
.description {
  max-width: 20em;
  margin: 1.2em auto 1em;
  line-height: 1.3em;
  font-weight: 400;
}
//
////.demo-buttons {
////  font-size: 1em;
////  max-width: 1200px;
////  margin: 2em auto 3em;
////  padding: 0 10em;
//
//  //a {
//  //  display: inline-block;
//  //  margin: 0.75em;
//  //  padding: 1.35em 1.1em;
//  //  width: 15em;
//  //  background: #fffce1;
//  //  text-transform: uppercase;
//  //  letter-spacing: 1px;
//  //  font-weight: 800;
//  //  border-top-left-radius: 20px 50px;
//  //  border-top-right-radius: 20px 50px;
//  //  border-bottom-right-radius: 20px 50px;
//  //  border-bottom-left-radius: 20px 50px;
//  //  cursor: pointer;
//
//    //&.currentDemo {
//    //  background: #c94e50;
//    //  color: #fffce1;
//    //}
//  //}
//
////.sideButton {
////  display: inline-block;
////  width: 5em;
////  height: 2.5em;
////  line-height: 2.5em;
////  cursor: pointer;
////  background: #fffce1;
////  text-transform: uppercase;
////  letter-spacing: 1px;
////  font-size: 0.8em;
////  font-weight: 800;
////
////  &.left {
////    border-top-left-radius: 10px;
////    border-bottom-left-radius: 10px;
////  }
////
////  &.right {
////    border-top-right-radius: 10px;
////    border-bottom-right-radius: 10px;
////  }
////
////  &.active {
////    background: #c94e50;
////    color: #fffce1;
////  }
////}
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
    color: #502314;
    font-size: 20px;
    line-height: 120%;
    font-family: 'Titan One', cursive;
    border-bottom: 1px solid #d7c7b4;
    padding: 16px 5px;
    //color: inherit;
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
@media screen and (max-width: 40em) {
  main {
    font-size: 80%;
  }
//
//  h1 {
//    padding-top: 1em;
//    font-size: 2.5em;
//  }
//
//  .demo-buttons {
//    max-width: 900px;
//    padding: 0 2em;
//  }
}
//
////
//// Burger menu custom styles
////
.bm-burger-button {
  position: absolute;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
}
//
//.right .bm-burger-button {
//  left: initial;
//  right: 36px;
//}
//
.bm-burger-bars {
  background: #373a47;
}
//
//.bm-morph-shape {
//  fill: #373a47;
//}
//
//.bm-menu {
//  background: #373a47;
//
//  a {
//    color: #b8b7ad;
//
//    &:hover,
//    &:focus {
//      color: #c94e50;
//    }
//  }
//}
//
////
//// Mixins
////
//.menu-1 {
//  .bm-cross {
//    background: #bdc3c7;
//  }
//
//  .bm-menu {
//    padding: 2.5em 1.5em 0;
//    font-size: 1.15em;
//  }
//}
//
//.menu-2 {
//  .bm-cross {
//    background: #999;
//  }
//
//  .bm-menu {
//    padding: 3.4em 1em 0;
//  }
//
//  a {
//    padding: 1em;
//  }
//
//  i {
//    font-size: 1.7em;
//    vertical-align: middle;
//    color: #282a35;
//  }
//}
//
//.menu-3 {
//  .bm-cross {
//    background: #888;
//  }
//
//  .bm-menu {
//    padding: 2em 1em;
//    font-size: 1.15em;
//  }
//
//  i {
//    opacity: 0.5;
//  }
//
//  span {
//    text-transform: uppercase;
//    letter-spacing: 1px;
//    font-size: 0.75em;
//  }
//}
//
//.menu-4 {
//  .bm-cross {
//    background: #888;
//  }
//
//  h2 {
//    margin: 0 auto;
//    padding: 2em 1em;
//    color: rgba(0, 0, 0, 0.4);
//    box-shadow: inset 0 -1px rgba(0, 0, 0, 0.2);
//
//    i {
//      margin-left: 0.2em;
//    }
//
//    span {
//      font-size: 1.6em;
//      font-weight: 700;
//    }
//  }
//
//  a {
//    padding: 1em;
//    text-transform: uppercase;
//    transition: background 0.3s, box-shadow 0.3s;
//    box-shadow: inset 0 -1px rgba(0, 0, 0, 0.2);
//
//    span {
//      letter-spacing: 1px;
//      font-weight: 400;
//    }
//
//    &:hover,
//    &:focus {
//      background: rgba(0, 0, 0, 0.2);
//      box-shadow: inset 0 -1px rgba(0, 0, 0, 0);
//      color: #b8b7ad;
//    }
//  }
//

//.image-container {
//  overflow: hidden;
//  height: 100%;
//}
//  .third-section {
//    width: 100%;
//    height: 150vh;
//    display: flex;
//    align-items: center;
//    flex-direction: column;
//    text-align: center;
//    position: relative;
//  }
//
//  .third-section .images-wrapper {
//    margin-top: 300px;
//    display: flex;
//    flex-direction: column;
//    align-items: center;
//  }
//
//  .third-section .images-wrapper img {
//    position: absolute;
//  }
.images-wrapper{
  height: 100%;
  width: 100%;
}
.third-section {
  height: 100%;
  width: 50%;
  padding: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.piece:not(.section_3_01) {
  position: absolute;
  //bottom: 20px;
}
.section_3_03 {
  z-index: 3;
  width: 432px;
  opacity: 0;
}
.section_3_02 {
  opacity: 0;
  z-index: 2;
  height: 200px;
  width: 432px;
}
.section_3_01 {
  width: 410px;
  height: 200px;
  z-index: 1;
  top: 50%;
  bottom: 50%;
  position: relative;
  opacity: 0;
}
.section_3_04{
  z-index: 4;
  width: 410px;
  opacity: 0;
}
.section_3_05{
  width: 410px;
  z-index: 5;
  opacity: 0;
}
.section_3_06{
  z-index: 6;
  opacity: 0;
  width: 440px;
  right: 25px;
}

.about_text{
  width: 50%;
  align-items: center;
  text-align: center;
  font-family: 'Titan One', cursive;

  h1{
    padding-top: 200px;
    color: #f5ebdc;
    font-size: 40px;
    text-transform: uppercase;
  }

  p{
    padding-top: 40px;
    color: #e2d8ca;
  }
}
</style>