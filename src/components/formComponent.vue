<template>
  <div class="form" :class="{'active': getAuthModal}">
    <div class="form__contents" :class="{'active': getAuthModal}">
      <button class="close" @click="close">×</button>
      <div class="form__content">
        <div class="form__title">{{ sign_in.title }}</div>
        <div class="form__message" :class="message.status">{{ message.msg }}</div>
        <div class="form__signin" :class="{'active': sign_in.status === true}">
          <div class="input">
            <input class="inp" type="email" placeholder="Логин..."
            v-model="signin_login" required>
          </div>
          <div class="input">
            <input class="inp" type="password" placeholder="Пароль..."
            v-model="signin_pass" required>
          </div>
        </div>
        <div class="form__signup" :class="{'active': sign_in.status === false}">
          <div class="input">
            <input class="inp" type="text" placeholder="Имя..."
            v-model="signup_name">
          </div>
          <div class="input">
            <input class="inp" type="text" placeholder="Логин..."
            v-model="signup_login">
          </div>
          <div class="input">
            <input class="inp" type="email" placeholder="Email..."
            v-model="singup_email">
          </div>
          <div class="input">
            <input class="inp" type="password" placeholder="Пароль..."
            v-model="signup_pass">
          </div>
        </div>
        <div class="form__bottom">
          <div class="form__btn">
            <button type="submit" @click="sign(sign_in.status)">{{ sign_in.title }}</button>
          </div>
          <div class="form__kind">
            <button class="signin" @click="change">{{ sign_in.text }}</button>
          </div>
          <!-- <div class="form__services-title">С помощью соцсетей</div> -->
          <div class="form__services">
            <div class="google">
              <router-link to="/">
                <div class="svg">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="26" height="26" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="m492.668 211.489-208.84-.01c-9.222 0-16.697 7.474-16.697 16.696v66.715c0 9.22 7.475 16.696 16.696 16.696h117.606c-12.878 33.421-36.914 61.41-67.58 79.194L384 477.589c80.442-46.523 128-128.152 128-219.53 0-13.011-.959-22.312-2.877-32.785-1.458-7.957-8.366-13.785-16.455-13.785z" style="" fill="#167ee6" data-original="#167ee6" class=""></path><path d="M256 411.826c-57.554 0-107.798-31.446-134.783-77.979l-86.806 50.034C78.586 460.443 161.34 512 256 512c46.437 0 90.254-12.503 128-34.292v-.119l-50.147-86.81c-22.938 13.304-49.482 21.047-77.853 21.047z" style="" fill="#12b347" data-original="#12b347" class=""></path><path d="M384 477.708v-.119l-50.147-86.81c-22.938 13.303-49.48 21.047-77.853 21.047V512c46.437 0 90.256-12.503 128-34.292z" style="" fill="#0f993e" data-original="#0f993e" class=""></path><path d="M100.174 256c0-28.369 7.742-54.91 21.043-77.847l-86.806-50.034C12.502 165.746 0 209.444 0 256s12.502 90.254 34.411 127.881l86.806-50.034c-13.301-22.937-21.043-49.478-21.043-77.847z" style="" fill="#ffd500" data-original="#ffd500" class=""></path><path d="M256 100.174c37.531 0 72.005 13.336 98.932 35.519 6.643 5.472 16.298 5.077 22.383-1.008l47.27-47.27c6.904-6.904 6.412-18.205-.963-24.603C378.507 23.673 319.807 0 256 0 161.34 0 78.586 51.557 34.411 128.119l86.806 50.034c26.985-46.533 77.229-77.979 134.783-77.979z" style="" fill="#ff4b26" data-original="#ff4b26" class=""></path><path d="M354.932 135.693c6.643 5.472 16.299 5.077 22.383-1.008l47.27-47.27c6.903-6.904 6.411-18.205-.963-24.603C378.507 23.672 319.807 0 256 0v100.174c37.53 0 72.005 13.336 98.932 35.519z" style="" fill="#d93f21" data-original="#d93f21" class=""></path></g></svg>
                </div>
                <div class="text">Google</div>
              </router-link>
            </div>
            <div class="telegram">
              <router-link to="/">
                <div class="svg">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="26" height="26" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><linearGradient id="a" x1="-1980.761" x2="-1980.761" y1="6242.157" y2="6241.649" gradientTransform="matrix(1000 0 0 -1000 1981017 6242157)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aabee"></stop><stop offset="1" stop-color="#229ed9"></stop></linearGradient><g fill-rule="evenodd" clip-rule="evenodd"><circle cx="256" cy="256" r="256" fill="url(#a)" data-original="url(#a)" class=""></circle><path fill="#ffffff" d="M115.88 253.298c74.629-32.515 124.394-53.951 149.293-64.307 71.094-29.57 85.867-34.707 95.495-34.877 2.118-.037 6.853.488 9.92 2.977 4.55 3.692 4.576 11.706 4.071 17.01-3.853 40.48-20.523 138.713-29.004 184.051-3.589 19.184-10.655 25.617-17.495 26.246-14.866 1.368-26.155-9.825-40.554-19.263-22.531-14.77-35.26-23.964-57.131-38.376-25.275-16.656-8.89-25.81 5.514-40.771 3.77-3.915 69.271-63.494 70.539-68.899.159-.676.306-3.196-1.191-4.526s-3.706-.876-5.3-.514c-2.26.513-38.254 24.304-107.982 71.372-10.217 7.016-19.471 10.434-27.762 10.255-9.141-.197-26.723-5.168-39.794-9.417-16.032-5.211-28.774-7.967-27.664-16.817.578-4.611 6.926-9.325 19.045-14.144z" data-original="#ffffff" class=""></path></g></g></svg>
                </div>
                <div class="text">Телегам</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
  export default {
    data() {
      return {
        sign_in: {
          status: true,
          title: 'Войти',
          text: 'Нет аккаунта? Создайте аккаунт.'
        },
        message: {
          status: '',
          msg: ''
        },
        signin_login: '',
        signin_pass: '',
        signup_login: '',
        signup_name: '',
        singup_email: '',
        signup_pass: '',
      }
    },
    methods: {
      ...mapActions([
        'authModalAction',
        'apiAuthRegistration',
        'apiAuthSignin'
      ]),
      change() {
        this.sign_in.status = !this.sign_in.status
        this.sign_in.title = this.sign_in.status === true ? this.sign_in.title = 'Войти' : 'Регистрация'
        this.sign_in.text = this.sign_in.status === true ? this.sign_in.text = 'Нет аккаунта? Создайте аккаунт.' : 'Есть аккаунт? Войдите в систему.'
      },
      close() {
        this.authModalAction(false)
      },
      sign(boolean) {
        if (boolean === true) {
          if (this.signin_login.length <= 4) {
            this.message = {status: 'error', msg: 'Ошибка при заполнении логина!'}
            return false
          } else if (this.signin_pass.length <= 4) {
            this.message = {status: 'error', msg: 'Ошибка при заполнении пароля!'}
            return false
          }
          this.apiAuthSignin({login: this.signin_login, password: this.signin_pass})
          .then(res => {
            console.log(res.data);
            if (res.data.message === 'Wrong password!') {
              this.message = {status: 'error', msg: 'Неверный пароль!'}
            } else if (res.data.message === 'User is not found!') {
              this.message = {status: 'error', msg: 'Пользователь не найден!'}
            } else {
              this.$cookies.set('user', {
                // token: res.data.token, 
                _id:  res.data.user.id,
                user: res.data.user.name,
                login: res.data.user.login,
                avatar: res.data.user.avatar,
                chatId: res.data.user.chatId
              })
              this.signin_login = ''
              this.signin_pass = ''
              this.authModalAction(false)
            }
          })
        } 
        else if (boolean === false) {
          if (this.signup_name.length <= 4) {
            this.message = {status: 'error', msg: 'Ошибка при заполнении имени!'}
            return false
          } else if (this.signup_login.length <= 4) {
            this.message = {status: 'error', msg: 'Ошибка при заполнении логина!'}
            return false
          } else if (this.singup_email.length <= 4) {
            this.message = {status: 'error', msg: 'Ошибка при заполнении email!'}
            return false
          } else if (this.signup_pass.length <= 4) {
            this.message = {status: 'error', msg: 'Ошибка при заполнении пароля!'}
            return false
          }
          this.apiAuthRegistration({login: this.signup_login, name: this.signup_name, password: this.signup_pass, email: this.singup_email})
          .then(res =>{
            if (res.data.message === 'This username is already taken!') {
              this.message = {status: 'error', msg: `"${this.signup_login}" уже занят!`}
            } else {
              console.log(res.data);
              this.$cookies.set('user', JSON.stringify({
                // token: res.data.token,
                _id:  res.data.user._id,
                user: res.data.user.name,
                login: res.data.user.login,
                avatar: res.data.user.avatar,
                chatId: res.data.user.chatId
              }))
              this.signup_login = ''
              this.signup_name = ''
              this.singup_email = ''
              this.signup_pass = ''
              this.authModalAction(false)
            } 
          })
        }
      }
    },
    mounted() {
      // let user = this.$cookies.get('user')
      // console.log(user);
    },
    computed: {
      ...mapGetters([
        'getAuthModal'
      ])
    },
  }
</script>

<style lang="scss">
  .form {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100vw;
    z-index: 4;
    &.active {
      // opacity: 1;
      // position: absolute;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.233);
      margin: auto;
    }
    &__contents {
      padding: 30px 35px;
      top: -600px;
      position: fixed;
      transition: .5s;
      width: 420px;
      height: 490px;
      background-color: #fff;
      border-radius: 20px;
      z-index: 5;
      &.active {
        transition: .5s;
        position: fixed;
        z-index: 5;
        top: 150px;
      }
      .close {
        position: absolute;
        background: unset;
        border: 0;
        font-size: 28px;
        color: #3F4765;
        top: 10px;
        right: 20px;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    &__title {
      text-align: center;
      color: #3F4765;
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
    }
    &__message {
      text-align: center;
      // margin-top: 10px;
      font-size: 16px;
      color: #3F4765;
      font-weight: 600;
      &.error {
        color: rgba(255, 0, 0, 0.651);
      }
      &.success {
        color: #4BB543;
      }
    }
    &__signin, &__signup {
      margin-top: 25px;
      width: 100%;
      display: none;
      &.active {
        display: block;
      }
      .input {
        width: 100%;
        display: flex;
        margin-top: 20px;
        .inp {
          width: 100%;
          height: 40px;
          border: 2px solid rgb(159, 168, 199);
          border-radius: 16px;
          padding: 0px 15px 0px 15px;
          color: #3F4765;
          font-size: 16px;
          font-weight: 500;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #3F4765;
            font-size: 16px;
            font-weight: 500;
          }
        }
        // &:first-child {
        //   margin-top: 0;
        // }
      }
    }
    &__bottom {
      margin-top: auto;
    }
    &__btn {
      margin-top: 25px;
      width: 100%;
      display: flex;
      justify-content: center;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #FF6A49;
        border: 2px solid #FF6A49;
        border-radius: 22px;
        color: #fff;
        font-size: 17px;
        width: 160px;
        height: 50px;
        transition: .2s;
        font-weight: 600;
      }
    }
    &__kind {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      .signin {
        background: unset;
        border: unset;
        font-size: 15px;
        font-weight: 500;
        color: #3F4765;
      }
    }
    &__services-title {
      text-align: center;;
      margin-top: 28px;
      font-size: 17px;
      color: #3F4765;
    }
    &__services {
      display: flex;
      justify-content: center;
      margin-top: 15px;
      .google, .telegram {
        padding: 0px 10px;
        a {
          display: flex;
          align-items: center;
        }
        .text {
          padding-left: 5px;
          color: #3F4765;
        }
      }
    }
  }
</style>