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

    </main>
  </div>
</template>

<script>
import push from '@/components/push';
import MenuBar from '@/components/Menu';

export default {
  name: 'HomePage',
  data() {
    return {
      menus: {
        push: { buttonText: 'Push' },
      },
      side: 'left',
      currentMenu: 'push'
    };
  },
  components: {
    push,
    Menu: MenuBar
  },
  methods: {
    changeMenu(menu) {
      this.currentMenu = menu.replace(/ +/g, '').toLowerCase();
      return this.currentMenu;
    },
  }
};
</script>

<style lang="scss" scoped>

html {
  height: 100%;
}

body {
  height: 100%;
  color: #fffce1;
  font-family: 'Raleway', Arial, sans-serif;
  margin: 0;
}

#home {
  height: 100%;
}

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
  padding: 3em 2em;
  text-align: center;
  background: #b4bad2;
  overflow: auto;
}

h1 {
  font-weight: 800;
  font-size: 3.75em;
}

.description {
  max-width: 20em;
  margin: 1.2em auto 1em;
  line-height: 1.3em;
  font-weight: 400;
}

//.demo-buttons {
//  font-size: 1em;
//  max-width: 1200px;
//  margin: 2em auto 3em;
//  padding: 0 10em;

  //a {
  //  display: inline-block;
  //  margin: 0.75em;
  //  padding: 1.35em 1.1em;
  //  width: 15em;
  //  background: #fffce1;
  //  text-transform: uppercase;
  //  letter-spacing: 1px;
  //  font-weight: 800;
  //  border-top-left-radius: 20px 50px;
  //  border-top-right-radius: 20px 50px;
  //  border-bottom-right-radius: 20px 50px;
  //  border-bottom-left-radius: 20px 50px;
  //  cursor: pointer;

    //&.currentDemo {
    //  background: #c94e50;
    //  color: #fffce1;
    //}
  //}

//.sideButton {
//  display: inline-block;
//  width: 5em;
//  height: 2.5em;
//  line-height: 2.5em;
//  cursor: pointer;
//  background: #fffce1;
//  text-transform: uppercase;
//  letter-spacing: 1px;
//  font-size: 0.8em;
//  font-weight: 800;
//
//  &.left {
//    border-top-left-radius: 10px;
//    border-bottom-left-radius: 10px;
//  }
//
//  &.right {
//    border-top-right-radius: 10px;
//    border-bottom-right-radius: 10px;
//  }
//
//  &.active {
//    background: #c94e50;
//    color: #fffce1;
//  }
//}
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

  h1 {
    padding-top: 1em;
    font-size: 2.5em;
  }

  .demo-buttons {
    max-width: 900px;
    padding: 0 2em;
  }
}

//
// Burger menu custom styles
//
.bm-burger-button {
  position: absolute;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
}

.right .bm-burger-button {
  left: initial;
  right: 36px;
}

.bm-burger-bars {
  background: #373a47;
}

.bm-morph-shape {
  fill: #373a47;
}

.bm-menu {
  background: #373a47;

  a {
    color: #b8b7ad;

    &:hover,
    &:focus {
      color: #c94e50;
    }
  }
}

//
// Mixins
//
.menu-1 {
  .bm-cross {
    background: #bdc3c7;
  }

  .bm-menu {
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
}

.menu-2 {
  .bm-cross {
    background: #999;
  }

  .bm-menu {
    padding: 3.4em 1em 0;
  }

  a {
    padding: 1em;
  }

  i {
    font-size: 1.7em;
    vertical-align: middle;
    color: #282a35;
  }
}

.menu-3 {
  .bm-cross {
    background: #888;
  }

  .bm-menu {
    padding: 2em 1em;
    font-size: 1.15em;
  }

  i {
    opacity: 0.5;
  }

  span {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.75em;
  }
}

.menu-4 {
  .bm-cross {
    background: #888;
  }

  h2 {
    margin: 0 auto;
    padding: 2em 1em;
    color: rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 -1px rgba(0, 0, 0, 0.2);

    i {
      margin-left: 0.2em;
    }

    span {
      font-size: 1.6em;
      font-weight: 700;
    }
  }

  a {
    padding: 1em;
    text-transform: uppercase;
    transition: background 0.3s, box-shadow 0.3s;
    box-shadow: inset 0 -1px rgba(0, 0, 0, 0.2);

    span {
      letter-spacing: 1px;
      font-weight: 400;
    }

    &:hover,
    &:focus {
      background: rgba(0, 0, 0, 0.2);
      box-shadow: inset 0 -1px rgba(0, 0, 0, 0);
      color: #b8b7ad;
    }
  }
}
</style>