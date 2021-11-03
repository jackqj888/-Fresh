<template>
  <div class="home-footer wrap">
    <div class="foot">
      <div class="companyName">
        <div class="image">
          <img :src="footList.logo" alt="logo" class="logo"/>
        </div>
        <div class="name">
          <div class="company">{{footList.name}}</div>
          <div
              style="width: auto; display: block; text-align: left;"
              class="company1"
          >
<!--            {{footList.companyProfile}}-->
          </div>
        </div>
      </div>
      <div>
        <div class="scanCode">
          <div class="scanCode-left">
            <div class="QrCode" v-for="(item,index) in QrCode" :key="index">
              <img :src="item.pathSrc" alt="QrCode" class="QrCode-img"/>
              <div class="font">{{ item.name }}</div>
            </div>
            
          </div>
          <div class="scanCode-right">
            <div class="email">
              <img src="@/assets/mail.png" alt="logo" class="mail"/>
              <span>{{ footList.qqAccount }}</span>
            </div>
            <div class="telephone">
              <img src="@/assets/phone .png" alt="logo" class="phone"/>
              <span>{{ footList.telephone }}</span>
            </div>
          </div>
        </div>
        <div>
          <div class="safeCode">
            <span>公安备案号 - © {{ footList.ipcRecordNumber }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    footList: {
      type: Object,
      default() {
        return []
      },
    },
    QrCode: {
      type: Array,
      default() {
        return []
      },
    }
  },
  data() {
    return {}
  },
  created() {
    // console.log('vvv', this.footList);
    // console.log('bbb', this.QrCode)
  },
  methods: {},
}
</script>

<style scoped lang="stylus">
.home-footer
  background-color: #ffffff;
  color: #333;
  text-align: center;

  .companyName
    display: flex
    justify-content: center

    .name
      display flex
      flex-direction column
      justify-content center
      lign-items center

    .logo
      margin-top 25px

    .company
      font-size 35px
      margin-top 25px

    .company1
      font-size 13px
      margin-bottom: 10px
      line-height: 30px

    .image
      width 103px
      height 85px

      img
        max-width 100%
        max-height 100%

  .scanCode
    display: flex
    justify-content center
    margin-top 30px
    .scanCode-left
      width: 403px
      margin-right 403px
      display flex
      justify-content  center
      .QrCode
        width 84px
        height 84px
        .QrCode-img
          width 80px
          height 80px
      .font
       font-size 14px
       color: #E1E1E1
        
         
    .scanCode-right
      display flex
      flex-direction column
      justify-content center
      lign-items center

    .email
      display flex
      justify-content flex-start

      .mail
        margin-right 10px
        margin-bottom: 15px
        font-size: 18px

    .telephone
      display flex
      justify-content flex-start

      .phone
        font-size: 18px
        margin-right 10px

.safeCode {
  margin-top 63px
  padding-bottom 36px
  font-size 16px
  color: #464B70;
}
</style>
