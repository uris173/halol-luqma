<template>
  <div class="bg" :class="{'active': getBar.status == true}" style="z-index: 2;"></div>
  <div class="rightbar" :class="{'active': getBar.status == true}" style="z-index: 3;">
    <div class="rightbar__items">
      <button class="rightbar__close" @click="close">×</button>
      <div class="rightbar__user">
        <img :src="img" alt="" class="rightbar__user-img">
        <div class="rightbar__user-name">{{ name }}</div>
      </div>
      <div class="cart" v-if="getBar.kind === 1"> <!-- v-if="getBar.kind === 1" --> 
        <div class="cart__item">
          <div class="title">Моя корзина</div>
          <div class="cart__foods">
            <div class="cart__food" v-for="food, index in getCart" :key="index">
              <button class="cart__food-delete" @click="remove(food._id)">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="#323232" xmlns="http://www.w3.org/2000/svg"><path d="M16 9.5V19.5H8V9.5H16ZM14.5 3.5H9.5L8.5 4.5H5V6.5H19V4.5H15.5L14.5 3.5ZM18 7.5H6V19.5C6 20.6 6.9 21.5 8 21.5H16C17.1 21.5 18 20.6 18 19.5V7.5Z" fill="inherit"></path></svg>
              </button>
              <img :src="`${url}/${food.data[0].img[0].response.webp}`" alt="" class="cart__food-img">
              <div class="cart__food-title">
                <div class="name">{{ food.data[0].title }}</div>
                <div class="counter">
                  <button class="minus" @click="calcFood({_id: food._id, val: -1})">-</button>
                  <div class="count">{{ food.count }}</div>
                  <button class="plus" @click="calcFood({_id: food._id, val: 1})">+</button>
                </div>
              </div>
              <div class="cart__food-price">{{ food.data[0].price.toLocaleString() }} sum</div>
            </div>
          </div>
        </div>
        <div class="cart__bottom">
          <div class="cart__price">
            <div class="cart__price-item">
              <div class="text">Общая цена</div>
              <div class="price">{{ getTotalItemPrices.toLocaleString() }} sum</div>
            </div>
            <div class="cart__price-item">
              <div class="text">Регион</div>
                <select class="price" 
                :class="msg_class.region"
                v-model="selected" 
                @change="delivery(selected)">
                  <option value="" disabled>Выберите регион</option>
                  <option  v-for="delivery, index in getDelivery" 
                  :key="index" 
                  :value="delivery._id"
                  >{{ delivery.data[0].region }}</option>
                </select>
            </div>
            <div class="cart__price-item">
              <div class="text">Цена доставки</div>
              <div class="price">{{ getPrice.toLocaleString() }} sum</div>
            </div>
            <div class="cart__price-item">
              <div class="text">Спопоб оплаты</div>
                <select class="price" 
                :class="msg_class.payment"
                v-model="payment_method"
                @change="payment(payment_method)">
                  <option value="" disabled>Способ оплаты</option>
                  <option  v-for="payment, index in getPayment" 
                  :key="index" 
                  :value="payment.data[0].title"
                  >{{ payment.data[0].title }}</option>
                </select>
            </div>
            <div class="cart__price-total">
              <div class="text">Итоговая цена</div>
              <div class="price">{{ getTotalPrice.toLocaleString() }} sum</div>
            </div>
          </div>
          <div class="cart__checkout">
            <div class="cart__address">
              <div class="cart__address-text" v-show="edit === false">
                <div class="cart__address-title">Адрес доставки</div>
                <input class="cart__address-address" 
                :class="msg_class.address"
                :placeholder="`${cookie_address !== '' ? cookie_address : 'Небходимо указать адрес...'}`" 
                disabled>
              </div>
              <button class="cart__address-edit" @click="edit = true" v-show="edit === false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.3265 12.6355C13.6979 12.6355 14 12.9415 14 13.3178C14 13.6947 13.6979 14 13.3265 14H9.51979C9.14839 14 8.84631 13.6947 8.84631 13.3178C8.84631 12.9415 9.14839 12.6355 9.51979 12.6355H13.3265ZM10.6866 2.46604L11.6699 3.24719C12.0732 3.56251 12.342 3.97817 12.4339 4.41533C12.5401 4.8962 12.4269 5.36847 12.1085 5.77696L6.25093 13.3519C5.98211 13.6959 5.58594 13.8894 5.16148 13.8966L2.82693 13.9253C2.69959 13.9253 2.59348 13.8393 2.56518 13.7174L2.0346 11.417C1.94263 10.9942 2.0346 10.557 2.30343 10.2202L6.45609 4.84532C6.52683 4.75932 6.65417 4.7457 6.73906 4.80948L8.48644 6.19978C8.59963 6.29295 8.75526 6.34311 8.91797 6.32161C9.26462 6.27861 9.49807 5.96329 9.4627 5.62646C9.44148 5.45447 9.35659 5.31114 9.2434 5.20364C9.20802 5.17497 7.54554 3.84201 7.54554 3.84201C7.43943 3.75601 7.41821 3.59835 7.5031 3.49157L8.16102 2.63804C8.76941 1.85689 9.83057 1.78523 10.6866 2.46604Z" fill="#3F4765"/>
                </svg>
              </button>

              <input type="text" class="cart__address-inp"
                placeholder="Укажите адрес..."
                v-show="edit === true"
                v-model="cookie_address">
              <button class="cart__address-edit" @click="save" v-show="edit === true">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="20" height="20" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" fill="#3f4765" data-original="#000000" class=""></path></g></svg>
              </button>
            </div>
            <button class="cart__checkout-btn" @click="next">Заказать</button>
          </div>
        </div>
      </div>
  
      <div class="cart__end" v-if="getBar.kind === 2">
        <div class="cart__data">
          <div class="title">Данные заказа</div>
          <div class="cart__data-items">
            <div class="cart__data-input">
              <label for="username" :class="{'error': err_name}">Ваше имя.</label>
              <input type="text" class="input" id="username" v-model="username">
            </div>
            <div class="cart__data-input">
              <label for="number" :class="{'error': err_phone}">Ваш номер телефона.</label>
              <input type="tel" v-maska data-maska="+998 ## ###-####" class="input" id="number" v-model="number">
            </div>
            <div class="cart__data-item">
              <div class="cart__data-values">
                <div class="data__title">Наименование</div>
                <div class="data__count">Кол-во</div>
                <div class="data__price">Цена</div>
              </div>
              <div class="cart__data-food" v-for="food, index in getCart" :key="index">
                <div class="cart__data-title">{{ food.data[0].title }}</div>
                <div class="cart__data-count">{{ food.count }}</div>
                <div class="cart__data-price">{{ food.data[0].price.toLocaleString() }} sum</div>
              </div>
            </div>
          </div>
          <div class="cart__bottom">
            <div class="cart__price">
              <div class="cart__price-item">
                <div class="text">Общая цена</div>
                <div class="price">{{ getTotalItemPrices.toLocaleString() }} sum</div>
              </div>
              <div class="cart__price-item">
                <div class="text">Регион</div>
                <select class="price" v-model="selected" @change="delivery(selected)">
                  <option value="" disabled>Выберите регион</option>
                  <option  v-for="delivery, index in getDelivery" 
                  :key="index" 
                  :value="delivery._id"
                  >{{ delivery.data[0].region }}</option>
                </select>
              </div>
              <div class="cart__price-item">
                <div class="text">Адрес</div>
                <div class="price">{{ cookie_address }}</div>
              </div>
              <div class="cart__price-item">
                <div class="text">Цена доставки</div>
                <div class="price">{{ getPrice.toLocaleString() }} sum</div>
              </div>
              <div class="cart__price-item">
              <div class="text">Спопоб оплаты</div>
                <select class="price" 
                :class="msg_class.payment"
                v-model="payment_method"
                @change="payment(payment_method)">
                  <option value="" disabled>Способ оплаты</option>
                  <option  v-for="payment, index in getPayment" 
                  :key="index" 
                  :value="payment.data[0].title"
                  >{{ payment.data[0].title }}</option>
                </select>
            </div>
              <div class="cart__price-total">
                <div class="text">Итоговая цена</div>
                <div class="price">{{ getTotalPrice.toLocaleString() }} sum</div>
              </div>
            </div>
            <button class="cart__checkout-btn" @click="order">Оформить заказать</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { vMaska } from "maska"
export default {
  directives: { maska: vMaska },
  data() {
    return {
      edit: false,
      selected: '',
      cookie_address: '',
      address: '',
      name: 'Пользователь',
      payment_method: '',
      img: 'https://i.pinimg.com/564x/6f/dc/9a/6fdc9a381ca09eff70a473f0a25dc948.jpg',
      step: false,
      msg_class: {
        region: '',
        payment: '',
        address: ''
      },
      username: '',
      number: '+998',
      err_name: false,
      err_phone: false
    }
  },
  computed: {
    ...mapGetters([
      'getBar',
      'getCart',
      'url',
      'getTotalItemPrices',
      'getDelivery',
      'getPrice',
      'getTotalPrice',
      'url',
      'getPayment'
    ])
  },
  methods: {
    ...mapActions([
      'barAction',
      'apiAllDelivery',
      'apiDeliveryRegion',
      'apiOrder',
      'apiPaymentMethods'
    ]),
    ...mapMutations([
      'calcFood',
      'remove'
    ]),
    close() {
      this.barAction({status: false, kind: 0})
    },
    save() {
      if (this.$cookies.isKey('address')) {
        if (this.cookie_address === '') {
          this.edit = false
          return false
        }
        this.$cookies.set('address', this.cookie_address)
      } else {
        if (this.cookie_address === '') {
          this.edit = false
          return false
        }
        this.$cookies.set('address', this.cookie_address)
      }
      this.msg_class.address = ''
      this.edit = false
    },
    delivery(id) {
      this.apiDeliveryRegion(id)
      if (this.$cookies.isKey('region')) {
        this.$cookies.set('region', JSON.stringify(id))
      } else {
        this.$cookies.set('region', JSON.stringify(id))
      }
      this.msg_class.region = ''
    },
    payment(value) {
      this.payment_method = value
      this.msg_class.payment = ''
    },
    next() {
      if (this.selected == '') {
        this.msg_class.region = 'error__region'
        return false
      } else if (this.payment_method == '') {
        this.msg_class.payment = 'error__payment'
        return false
      } else if (this.$cookies.get('address') == null) {
        this.msg_class.address = 'error__address'
        return false
      }
      this.barAction({status: true, kind: 2})
    },
    order() {
      if (this.username.length < 5) {
        this.err_name = true
        return false
      } else if (this.number.length < 16) {
        this.err_phone = true
        return false
      } else if (this.payment_method == '') {
        console.log(this.payment_method);
        this.msg_class.payment = 'error__payment'
        console.log(this.msg_class.payment);
        return false
      }
      this.err_name = false
      this.err_phone = false
      this.msg_class.payment = ''
      let food = []
      this.getCart.forEach(foods =>{
        food.push({_id: foods._id, count: foods.count})
      })
      let data = {
        region: this.selected,
        address: this.cookie_address,
        payment: this.payment_method,
        products: food,
        phone: this.number,
        username: this.username,
      }
      this.apiOrder(data)
    }
  },
  created() {
    if (this.$cookies.isKey('address')) {
      this.cookie_address = this.$cookies.get('address')
    }
    if (this.$cookies.isKey('user')) {
      this.img = `${this.url}` + this.$cookies.get('user').avatar
      this.name = this.$cookies.get('user').user
    }
    if (this.$cookies.isKey('region')) {
      this.selected = JSON.parse(this.$cookies.get('region'))
      this.apiDeliveryRegion(JSON.parse(this.$cookies.get('region')))
    } else {
      this.selected = ''
    }
    this.apiAllDelivery()
    this.apiPaymentMethods()
  }
}
</script>

<style lang="scss">
  .bg {
    &.active {
      position: absolute;
      width: 100vw;
      height: 100vh;
      background: rgb(6 6 6 / 38%);
    }
  }
  .rightbar {
    width: 470px;
    transition: .3s;
    position: fixed;
    height: 100vh;
    right: -500px;
    white-space: nowrap;
    background-color: #fff;
    &.active {
      transition: .5s;
      display: block;
      width: 470px;
      right: 0;
    }
    &__close {
      border: 0;
      background: unset;
      position: absolute;
      right: 25px;
      top: 15px;
      font-size: 30px;
      color: #3F4765;
      transition: .3s;
      &:hover {
        transition: .3s;
        transform: rotate(90deg);
      }
    }
    &__items {
      position: relative;
      padding: 24px 32px;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    // &__item 
    &__user {
      display: flex;
      align-items: center;
      width: 200px;
      height: 48px;
      background: #FFFFFF;
      box-shadow: 0px 19px 56px rgba(49, 79, 124, 0.08);
      border-radius: 48px;
      &-img {
        margin-left: 5px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      &-name {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #3F4765;
        margin-left: 18px;
      }
    }
  }

  .cart {
    margin-top: 32px;
    height: 100%;
    display: flex;
    flex-direction: column;
    &__foods {
      margin-bottom: 32px;
    }
    &__food {
      display: flex;
      align-items: center;
      width: 100%;
      margin-top: 20px;
      &-delete {
        border: 0;
        background: unset;
        svg {
          path {
            transition: .3s;
            fill: #3F4765;
          }
        }
        &:hover {
          svg {
            path {
              transition: .3s;
              fill: #FF2400;
            }
          }
        }
      }
      &-img {
        margin-left: 8px;
        width: 56px;
        height: 56px;
        box-shadow: 0px 15px 27px rgba(14, 26, 51, 0.12);
        border-radius: 12px;
      }
      &-title {
        margin-left: 12px;
        .name {
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: #3F4765;
        }
        .counter {
          display: flex;
          padding-top: 2px;
          .minus, .plus {
            display: flex;
            align-items: center;
            justify-content: center;
            // font-size: 12px;
            color: #ACBBCC;
          }
          .count {
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
            padding: 0px 10px;
            font-feature-settings: 'liga' off;
            color: #222222;
          }
          button {
            width: 18px;
            height: 18px;
            background: #F8F8F9;
            border: 1.5px solid #D7E1ED;
            border-radius: 50%;
          }
        }
      }
      &-price {
        margin-left: auto;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #9398A8;
      }
    }
    &__bottom {
      margin-top: auto;
      margin-bottom: 80px;
    }
    &__price {
      &-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        // &:last-child {
          // }
        .text {
          font-weight: 400;
          font-size: 15px;
          line-height: 24px;
          font-feature-settings: 'liga' off;
          color: #606988;
        }
        .price {
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
          font-feature-settings: 'liga' off;
          color: #3F4765;
          border: 0;
          text-align: right;
          &.error__region, &.error__payment {
            color: #FF2400;
            option {
              color: #3F4765;
            }
          }
          &:focus {
            outline: none;
          }
        }
      }
      &-total {
        border-top: 1.5px dashed #C3CDE0;
        display: flex;
        justify-content: space-between;
        padding-top: 24px;
        .text {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          font-feature-settings: 'liga' off;
          color: #3F4765;
        }
        .price {
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          font-feature-settings: 'liga' off;
          color: #38C188;
        }
      }
    }
    &__checkout {
      margin-top: 32px;
      &-btn {
        border: 0;
        width: 100%;
        height: 56px;
        background: #FF6A49;
        box-shadow: 0px 19px 56px rgba(255, 106, 73, 0.2);
        border-radius: 56px;
        font-weight: 500;
        font-size: 18px;    
        line-height: 20px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    &__address {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-height: 80px;
      background: #FFFFFF;
      box-shadow: 0px 19px 56px rgba(49, 79, 124, 0.12);
      border-radius: 16px;
      padding: 20px 16px;
      margin-bottom: 55px;
      &-title {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        font-feature-settings: 'liga' off;
        color: #3F4765;
      }
      &-address {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        width: 310px;
        overflow: hidden;
        font-weight: 600;
        margin-top: 4px;
        font-size: 14px;
        line-height: 20px;
        font-feature-settings: 'liga' off;
        color: #3F4765;
        border: 0;
        background: unset;
        &.error__address {
          &::placeholder {
            color: #FF2400;
          }
        }
        &::placeholder {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-weight: 600;
          margin-top: 4px;
          font-size: 14px;
          line-height: 20px;
          font-feature-settings: 'liga' off;
          color: #3F4765;
        }
        &:focus {
          outline: none;
        }
      }
      &-inp {
        height: 30px;
        border: 0;
        width: 310px;
        color: #8488B7;
        font-size: 16px;
        font-weight: 400;
        &::placeholder {
          color: #8488B7;
          font-size: 16px;
          font-weight: 400;
        }
        &:focus {
          outline: none;
        }
      }
      &-edit {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        width: 40px;
        height: 40px;
        background: #FFFFFF;
        box-shadow: 0px 19px 56px rgba(49, 79, 124, 0.16);
        border-radius: 16px;
      }
    }
    &__end {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    &__data {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin-top: 35px;
      &-items {
        padding-top: 20px;
      }
      .cart__bottom {
        margin-bottom: 50px;
      }
      .cart__checkout-btn {
        margin-top: 20px;
      }
      &-input {
        display: grid;
        margin-top: 15px;
        label {
          color: #3F4765;
          font-size: 15px;
        }
        .error {
          color: #FF2400;
          font-size: 15px;
        }
        .input {
          margin-top: 5px;
          width: 100%;
          height: 35px;
          border: 1px solid #606988;
          border-radius: 14px;
          padding: 2px 10px;
          font-size: 17px;
          color: #3F4765;
          &:focus {
            outline: none;
          }
        }
      }
      &-values {
        display: flex;
        padding-top: 25px;
        .data__title {
          color: #3F4765;
          font-size: 16px;
          width: 33%;
        }
        .data__count {
          color: #3F4765;
          font-size: 16px;
          width: 33%;
          text-align: center;
        }
        .data__price {
          color: #3F4765;
          font-size: 16px;
          width: 33%;
          text-align: center;
        }
      }
      &-food {
        display: flex;
        padding-top: 10px;
      }
      &-title {
        width: 33%;
        color: #222222;
        font-size: 18px;
        font-weight: 600;
      }
      &-count {
        width: 33%;
        color: #222222;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
      }
      &-price {
        width: 33%;
        color: #38C188;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
      }
    }
  }

</style>