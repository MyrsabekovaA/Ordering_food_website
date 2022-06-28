<template>

  <div id="app">
    <MobileNav />
  </div>
<!--  <div id="app">-->
<!--    <Mobile-nav />-->
<!--    <div class="content" :class="{'open':showNav}">-->
<!--      <div class="top-bar">-->
<!--        <div id="navigation-icon" v-if="mobileView"-->
<!--             @click="showNav = !showNav">-->
<!--          <a href="#container" class="logo">-->
<!--            <img class="logo" alt="Our Logo" src="../assets/logo.svg">-->
<!--          </a>-->
<!--          <img class="bars" src="../assets/navbar/bars-svgrepo-com.svg" style="width: 25px">-->
<!--        </div>-->
<!--        <NavBar v-if="!mobileView" />-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
// import NavBar from "@/components/NavBar";
import MobileNav from "@/components/MobileNav";
export default {
  name: "HomePage",
  components: {MobileNav},
  // data: () => {
  //   return{
  //     mobileView: true,
  //     showNav: false
  //   }
  // },
  // methods: {
  //   handleView() {
  //     this.mobileView = window.innerWidth <= 768;
  //   }
  // },
  // created() {
  //   this.handleView();
  //   window.addEventListener('resize', this.handleView);
  // }
}
</script>

<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
//body {
//  width: 100%;
//  height: 100vh;
//  margin: 0;
//  padding: 0;
//}
//#app{
//  position: relative;
//  //width: calc(100% - 20px);
//  //height: calc(100vh - 20px);
//  //color: #333;
//  overflow: hidden;
//}
//
//.top-bar {
//  width: 100%;
//}
//
////.home-content{
////  height: 100%;
////  width: 100%;
////}
////
////.about{
////  background-color: #502314;
////  height: 100%;
////}
//#mob-nav-icon{
//  display: flex;
//  //font-family: 'Lato', sans-serif;
//  //top: 0;
//  //z-index: 10;
//  //height: 60px;
//  //background-color: #E6CDB4FF;
//  //border-bottom: 2px solid #E6CDB4FF;
//  //position: sticky;
//  //padding: 8px 20px;
//  //align-items: center;
//  //justify-content: space-between;
//
//  .logo{
//    width: 45px;
//  }
//}

//.content {
//  position: absolute;
//  //top: 10px;
//  //width: calc(100% - 60px);
//  //height: calc(100vh - 60px);
//  //padding: 20px;
//  //background-color: #fff;
//  //border-radius: 30px;
//  //box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
//  //transition: 1s transform cubic-bezier(0,.12,.14,1);
//}
//
//.open {
//  transform: translateX(300px);
//}
</style>
