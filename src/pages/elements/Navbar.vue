 <template>
  <div class="main">
    <div class="navbar">
      <div v-bind:class="saLogic" v-on:click="navToggle"></div>
      <div v-bind:class="navpaneLogic">
        <button v-bind:class="HomeLogic" v-on:click="navToggle(); $router.push('/')">Home</button>
        <button v-bind:class="WorkLogic" v-on:click="navToggle(); $router.push('/register')">Register</button>
        <a href="https://www.screenartstudios.com"><button v-bind:class="ContactLogic" v-on:click="navToggle();">Main Site</button></a>
      </div>
    </div>
    <div class="slidebox">
      <transition name="slide"><div class="slide1" v-if="show === 0"></div></transition>
      <transition name="slide"><div class="slide2" v-if="show === 1"></div></transition>
      <transition name="slide"><div class="slide3" v-if="show === 2"></div></transition>
      <transition name="slide"><div class="slide4" v-if="show === 3"></div></transition>
      <transition name="slide"><div class="slide5" v-if="show === 4"></div></transition>
      <transition name="slide"><div class="slide6" v-if="show === 5"></div></transition>
    </div>
  </div>
</template>

<script>
let x = false
export default {
  name: 'navbar',
  props: ['loggedIn', 'user'],
  created () {
    let vue = this
    function toggleShow () {
      if (vue.show === 0) {
        vue.show = 1
      } else if (vue.show === 1) {
        vue.show = 2
      } else if (vue.show === 2) {
        vue.show = 3
      } else if (vue.show === 3) {
        vue.show = 4
      } else if (vue.show === 4) {
        vue.show = 5
      } else if (vue.show === 5) {
        vue.show = 0
      }
    }
    setInterval(toggleShow, 4000)
  },
  computed: {
    saLogic: function () {
      return {
        sa: true,
        navButtonAnimation: this.isToggled,
        navButtonAnimationExit: !this.isToggled && !this.first
      }
    },
    navpaneLogic: function () {
      return {
        navpane: this.first,
        navpaneAnimation: this.isToggled,
        navpaneAnimationExit: !this.isToggled && !this.first
      }
    },
    HomeLogic: function () {
      return {
        Home: this.isToggled || this.first,
        hidden: !this.isToggled && !this.first
      }
    },
    WorkLogic: function () {
      return {
        Work: this.isToggled || this.first,
        hidden: !this.isToggled && !this.first
      }
    },
    ContactLogic: function () {
      return {
        Contact: this.isToggled || this.first,
        hidden: !this.isToggled && !this.first
      }
    },
    InfoLogic: function () {
      return {
        Info: this.isToggled || this.first,
        hidden: !this.isToggled && !this.first
      }
    },
    LoginLogic: function () {
      return {
        Login: this.isToggled || this.first,
        hidden: !this.isToggled && !this.first
      }
    }
  },
  data () {
    return {
      show: 0,
      showWork: false,
      isToggled: false,
      first: true
    }
  },
  methods: {
    navToggle: function () {
    // Nav button functionality
      if (x === false) {
        x = true
        this.isToggled = true
        this.first = false
      } else if (x === true) {
        x = false
        this.isToggled = false
      }
    }
  }
}
</script>

<style scoped lang='less'>
  @base-font:'Pathway Gothic One', sans-serif;

  .navpane {
    display: none;
    overflow: hidden;
  }

  .sa {
    margin-top: 20px;
    width: 100%;
    height: 100%;
    grid-column: 3;
    z-index: 8;
    background-repeat: no-repeat;
    background-image: url("../../assets/logoAnimation.svg");
    -webkit-filter: drop-shadow(1px 2px 2px #000);
    filter: drop-shadow(1px 2px 2px #000);
    align-items: center;
  }

  .navbar {
    width: 100%;
    height: 135px;
    background:rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 11;
    text-align: center;
    line-height: 70px;
    font-family: @base-font;
    font-weight: lighter;
    display: grid;
    grid-template-columns: repeat(2, 1fr) 220px repeat(2,1fr);
    grid-template-rows: 100px;
    box-shadow: 2px 2px 4px #000;
  }

  @keyframes navButtonAnimation {
    100% {background-position: -1980px;}
  }

  @keyframes navButtonAnimationReverse {
    0% {background-position: -1980px;}
    100% {background-position: 0px;}
  }

  @keyframes navpaneAnimation {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes navpaneAnimationReverse {
    0% { opacity: 1; }
    99% { opacity: 0; }
    100% { opacity: 0;}
  }

  .navButtonAnimation {
    animation: navButtonAnimation .4s steps(9);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .navButtonAnimationExit {
    animation: navButtonAnimationReverse .5s steps(9);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .navpaneAnimation {
    animation: navpaneAnimation .4s steps(9);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    grid-column-start: 2;
    grid-column-end: 5;
    z-index: 10;
    width: 100%;
    height: 240px;
    margin-top: 60px;
    background:rgba(0,0,0,0.8);
    border-radius: 12px;
    box-shadow: 2px 2px 4px #000;
    color: #fff;
  }

  .navpaneAnimationExit {
    animation: navpaneAnimationReverse .5s steps(9);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    grid-column: 3;
    z-index: 10;
    width: 100%;
    height: 0px;
    margin-top: 40px;
    background:rgba(0,0,0,0.6);
    border-radius: 12px;
    box-shadow: 2px 2px 4px #000;
    color: #fff;
  }

  .Home {
    box-shadow: none;
    grid-column: 1;
    background-color: transparent;
    border: none;
    color: #fff;
    font-family: @base-font;
    font-size: 2.5em;
    width: 100%;
    text-shadow: 2px 2px 3px black;
    grid-column: 1;
    width: 100%;
  }
  .Work {
    background-color: transparent;
    width: 100%;
    text-shadow: 2px 2px 3px black;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 2.5em;
  }

  .Contact {
    background-color: transparent;
    width: 100%;
    text-shadow: 2px 2px 3px black;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 2.5em;
  }

  .Info {
    background-color: transparent;
    width: 100%;
    text-shadow: 2px 2px 3px black;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 2.5em;
  }

  .Login {
    background-color: transparent;
    width: 100%;
    text-shadow: 2px 2px 3px black;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 2.5em;
  }

  .slidebox {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: -1;
    height: 135px;
    opacity: 1;
  }

  .slide1 {
    background-image: url("../../assets/SeasonsMobile.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    width: 100%;
    height: 140px;
    margin: 0;
    padding: 0;
    top: 0;
    z-index: -6;
    opacity: 1;
  }

  .slide2 {
    background-image: url("../../assets/birdsMobile.jpg");
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 140px;
    margin: 0;
    padding: 0;
    top: 0;
    z-index: -5;
    opacity: 1;
  }

  .slide3 {
    background-image: url("../../assets/mountainsMobile.jpg");
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 140px;
    margin: 0;
    padding: 0;
    top: 0;
    z-index: -4;
    opacity: 1;
  }
  .slide4 {
    background-image: url("../../assets/grateMobile.jpg");
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 140px;
    margin: 0;
    padding: 0;
    top: 0;
    z-index: -3;
    opacity: 1;
  }

  .slide5 {
    background-image: url("../../assets/humansMobile.jpg");
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 140px;
    margin: 0;
    padding: 0;
    top: 0;
    z-index: -2;
    opacity: 1;
  }
  .slide6 {
    background-image: url("../../assets/windowMobile.jpg");
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 140px;
    margin: 0;
    padding: 0;
    top: 0;
    z-index: -1;
    opacity: 1;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .50s ease;
    opacity: 1;
  }

  .slide-enter {
    transform: translateX(2000px);
    opacity: 0;
  }

  .slide-leave-to {
    transform: translateX(-2000px);
    opacity: 0;
  }
</style>
