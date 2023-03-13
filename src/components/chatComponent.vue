<template>
  <!-- <div class="require__user" :class="{'active': have_user === false}">
    <div class="require__user-content">
      <input class="inp" type="text" placeholder="Введите своё имя..." v-model="name">
      <button class="btn" @click="create_user">Отправить</button>
    </div>
  </div> -->
  <div class="chat" :class="{'active': chat}">
    <button class="chat__close" 
    :style="have_user ? 'color: #fff;' : 'color: #FF6A49;'"
    @click="close">×</button>
    <button class="chat__logo" @click="open">
      <div class="svg">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 38 38" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g data-name="Layer 2"><path d="M28 5.64A3.66 3.66 0 0 0 24.35 2H4.65A3.66 3.66 0 0 0 1 5.64v13.7A3.66 3.66 0 0 0 4.65 23H5v5a1 1 0 0 0 .58.91A1.06 1.06 0 0 0 6 29a1 1 0 0 0 .65-.24L13.37 23h11A3.66 3.66 0 0 0 28 19.34zM13 17H7a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm9-4H7a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2zm0-4H7a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2z" fill="#fff" data-original="#fff" class=""></path><path d="M33.83 14H30v5.35A5.66 5.66 0 0 1 24.35 25H15v2.85A3.17 3.17 0 0 0 18.17 31h8.42l4.7 4.71A1 1 0 0 0 32 36a.84.84 0 0 0 .38-.08A1 1 0 0 0 33 35v-4h.83A3.17 3.17 0 0 0 37 27.84V17.16A3.17 3.17 0 0 0 33.83 14z" fill="#fff" data-original="#fff" class=""></path></g></g></svg>
      </div>
    </button>
    <!-- <div class="chat__title">Мы online</div> -->
    <div class="chat__user-form"
    :class="{'none': have_user === false}"
    v-show="have_user === false">
      <div class="chat__user-content">
        <div class="text">
          Для того чтобы продолжить диалог с нашим сотрудником, Вам необходимо ввести своё имя.
        </div>
        <div class="form-inp">
          <input class="inp" type="text" placeholder="Введите своё имя..." v-model="name">
        </div>
        <div class="form-btn">
          <button class="btn" @click="create_user">Отправить</button>
        </div>
      </div>
    </div>
    <div class="chat__inside" v-show="have_user" :class="{'active': have_user}">
      <div class="chat__inside-top">Напишите нам.</div>
      <div class="chat__content">
        <div class="chat__messages">
          <div class="chat__message" v-for="(msg, index) of getMessages.messages" :key="index" :class="msg.class">
            <!-- admin, user classes -->
            <div class="chat__message-top">
              <div class="chat__username">{{ msg.sender }}</div>
              <div class="chat__date">{{ msg.date }}</div>
            </div>
            <div class="chat__message-text">{{ msg.message }}</div>
          </div>
        </div>
      </div>
      <div class="inside__bottom">
        <div class="inside__bottom-form">
          <input class="input__message" type="text" placeholder="Напишите сообщение..." v-model="input" @keydown.enter="send_message">
          <button class="send__message" @click="send_message">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="26" height="26" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path fill="#ff6a49" d="M20.374 11.034c.835.364.835 1.568 0 1.932L4.446 19.91c-.972.424-1.868-.736-1.233-1.597L6.82 13.42a1.03 1.03 0 0 1 .724-.415l7.824-.796c.248-.025.248-.393 0-.418l-7.824-.796a1.03 1.03 0 0 1-.724-.415L3.213 5.687c-.635-.86.261-2.02 1.233-1.597z" data-original="#FF6A49" class=""></path></g></svg>
          </button>
          <div class="input__fileupload">
            <label for="file">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="22" height="22" x="0" y="0" viewBox="0 0 511.988 511.988" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M490.305 186.463c-8.354-8.309-21.861-8.272-30.17.081L203.687 444.379c-33.271 33.271-87.308 33.271-120.641-.045-33.308-33.325-33.308-87.362.004-120.674L347.089 58.234c20.772-20.771 54.543-20.771 75.375.045 20.826 20.826 20.826 54.593-.005 75.425l-218.732 218.73-.04.044c-8.333 8.287-21.8 8.276-30.116-.04-8.33-8.33-8.33-21.831 0-30.161l105.58-105.602c8.33-8.332 8.329-21.84-.003-30.17-8.332-8.33-21.84-8.329-30.17.003l-105.579 105.6c-24.991 24.991-24.991 65.507.002 90.499 24.992 24.992 65.508 24.992 90.501 0 .029-.029.052-.06.08-.089l218.646-218.646c37.494-37.494 37.494-98.276 0-135.77-37.499-37.472-98.277-37.472-135.749 0L52.84 293.53c-49.934 49.934-49.934 130.979.036 180.974 50.003 49.977 131.049 49.977 181.022.004l256.489-257.875c8.308-8.354 8.271-21.861-.082-30.17z" fill="#FF6A49" data-original="#FF6A49" class=""></path></g></svg>
            </label>
            <input id="file" name="file" type="file" multiple hidden>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
// import {io} from 'socket.io-client'
export default {
  data() {
    return {
      socket: null,
      chat: false,
      have_user: true,
      input: '',
      name: '',
      user_chatID: '',
      user_name: '',
    }
  },
  computed: {
    ...mapGetters([
      'getMessages',
    ])
  },
  methods: {
    ...mapActions([
      // 'authModalAction',
      'apiCreateChatUser',
      'msgAction',
      'apiGetChat',
      'apiMsgUser'
    ]),
    ...mapMutations([
      'setSokcetMessage'
    ]),
    open() {
      if (this.$cookies.isKey('user_login')) {
        this.user_chatID = this.$cookies.get('user_login').chatId
        this.apiGetChat(this.user_chatID)
        this.chat = true
      } else if (this.$cookies.isKey('user')) {
        this.user_chatID = this.$cookies.get('user').chatId
        this.apiGetChat(this.user_chatID)
        this.chat = true
      } else {
        this.chat = true
        this.have_user = false
      }
      // const element = document.querySelector('.chat__messages')
      // element.scrollToBottom
      // element.scrollTo(-1)
      // console.log(element.scrollHeight);
      // element.scrollTop = element.scrollHeight
    },
    close() {
      this.chat = false
    },
    create_user() {
      this.apiCreateChatUser({name: this.name})
      .then(res => {
        if (this.$cookies.isKey('user_login')) {
          this.$cookies.set('user_login', JSON.stringify({login: res.data.login, chatId: res.data.chatID, user: res.data.name}))
        }
        this.$cookies.set('user_login', JSON.stringify({login: res.data.login, chatId: res.data.chatID, name: res.data.name}))
        this.have_user = true
        this.chat = true
        this.user_chatID = res.data.chatID
        this.apiGetChat(res.data.chatID)
      })
    },
    send_message() {
      const message = {
        _id: this.user_chatID,
        user: this.user_name,
        message: this.input,
      }
      this.apiMsgUser(message)
      this.input = ''
    }
  },
  mounted() {
    // console.log(this.$soketio);
    if (this.$cookies.isKey('user_login')) {
      this.apiGetChat(this.$cookies.get('user_login').chatId)
      this.user_chatID = this.$cookies.get('user_login').chatId
      this.user_name = this.$cookies.get('user_login').user
    } else if (this.$cookies.isKey('user')) {
      this.apiGetChat(this.$cookies.get('user').chatId)
      this.user_chatID = this.$cookies.get('user').chatId
      this.user_name = this.$cookies.get('user').user
    }
    this.$socketio.on('message', message =>{
      // console.log(message);
      if (this.$cookies.isKey('user_login')) {
        if (this.$cookies.get('user_login').chatId == message._id) {
          // console.log(message, 'socket......');
          this.setSokcetMessage(message.messages.pop())
        }
      } else if (this.$cookies.isKey('user')) {
        // this.user_chatID = this.$cookies.get('user').chatId
        // console.log(this.user_chatID, 'user chat');
        // console.log(message._id, 'chat id');
        if (this.user_chatID === message._id) {
          this.setSokcetMessage(message.messages.pop())
        }
      }
    })
  }
}
</script>

<style lang="scss">
  .chat {
    position: fixed;
    z-index: 3;
    right: 35px;
    bottom: 25px;
    transition: .3s;
    width: 70px;
    height: 70px;
    background: #FF6A49;
    box-shadow: 0px 19px 56px rgba(255, 106, 73, 0.2);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    &__close {
      display: none;
      position: absolute;
      z-index: 4;
      right: 20px;
      top: 10px;
      border: 0;
      background: unset;
      font-size: 28px;
      // color: #FF6A49;
    }
    &.active {
      padding: 4px 4px 4px 4px;
      border-radius: 27px;
      width: 440px;
      height: 600px;
      .chat__close {
        // color: #FF6A49;
        display: block;
      }
      .chat__logo {
        display: none;
      }
      .chat__inside {
        display: block;
      }
    }
    &__logo {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 70px;
      height: 70px;
      border: 0;
      background: #FF6A49;
      .svg {
        svg {
          height: 35px;
          width: 35px;
          path: {
            fill: rgb(159, 168, 199);
          }
        }
      }
    }
    &__user-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 80px 15px 20px 15px;
    }
    &__user-form {
      // display: none;
      margin-top: auto;
      background: #f7f0f0;
      height: 100%;
      width: 100%;
      border-radius: 22px 22px 22px 22px;
      .text {
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        color: #FF6A49;
      }
      .form {
        &-inp {
          margin-top: 30px;
          display: flex;
          justify-content: center;
        }
        &-btn {
          display: flex;
          justify-content: center;
          margin-top: 15px;
        }
      }
      .inp {
        width: 100%;
        height: 40px;
        border: 2px solid #FF6A49;
        border-radius: 16px;
        padding: 0px 15px 0px 15px;
        color: #3F4765;
        font-size: 16px;
        font-weight: 500;
        background: unset;
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: #3F4765;
          font-size: 16px;
          font-weight: 500;
        }
      }
      .btn {
        width: 150px;
        height: 40px;
        // margin-left: 25px;
        border-radius: 16px;
        border: 2px solid #FF6A49;
        background: unset;
        transition: .3s;
        font-size: 17px;
        color: #FF6A49;
        font-weight: 600;
        &:focus {
          outline: none;
        }
        &:hover {
          transition: .3s;
          background: #FF6A49;
          color: #fff;
        }
      }
    }
    &__inside {
      display: none;
      margin-top: auto;
      background: #f7f0f0;
      height: 100%;
      width: 100%;
      border-radius: 22px 22px 22px 22px;
      .chat__inside-top {
        position: relative;
        color: #f7f0f0;
        border-radius: 18px 18px 0px 0px;
        font-size: 18px;
        background-color: #FF6A49;
        padding: 8px 0px 8px 15px;
        border-bottom: 5px solid #FF6A49;
      }
    }
    &__content {
      height: 85%;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar-track {
        border-radius: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background: #FF6A49; 
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: #FF6A49; 
      }
    }
    &__messages {
      padding: 0px 10px 10px 10px;
      display: flex;
      flex-direction: column;
    }
    &__message {
      width: 85%;
      margin-top: 16px;
      padding: 7px 10px;
      &-top {
        display: flex;
        margin-bottom: 8px;
      }
      &-text {
        font-size: 17px;
      }
      &.user {
        border-radius: 21px 21px 0px 21px;
        background: #FF6A49; 
        text-align: right;
        margin-left: auto;
        color: #f7f0f0;
        .chat__message-top {
          justify-content: end;
        }
      }
      &.admin {
        // border-radius: 0px 21px 21px 21px;
        // background: #9599c35c;
        border-radius: 21px 21px 21px 0px;
        color: #555555;
        background: rgb(254 202 190);;
        margin-right: auto;
        // &:first-child {
        //   border-radius: 21px 21px 21px 0px;
        // }
        // &:last-child {
        //   border-radius: 21px 21px 21px 21px;
        // }
      }
    }
    &__username {
      font-size: 16px;
      font-weight: 400;
    }
    &__date {
      padding-left: 15px;
      font-size: 12px;
      display: flex;
      align-items: end;
      font-weight: 400;
    }
    .inside {
      &__bottom {
        border-top: 4px solid #FF6A49;
        // padding: 12px 15px 10px 15px;
        &-form {
          display: flex;
          position: relative;
        }
        .input__message {
          width: 380px;
          height: 40px;
          background: unset;
          border: 0;
          padding: 0px 10px 0px 40px;
          font-size: 17px;
          color: #6b6b6b;
          font-weight: 500;
          &::placeholder  {
            font-size: 17px;
            color: #6b6b6b;
          }
          &:focus {
            outline: none;
          }
        }
        .send__message {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 40px;
          background: unset;
          border: unset;
          &:focus {
            outline: none;
          }
        }
        .input__fileupload {
          top: 8px;
          left: 10px;
          position: absolute;
        }
      }
    }
  }
</style>