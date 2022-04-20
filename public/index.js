const vm_wrapper = new Vue({
  el: '#wrapper',
  data: {
    message: `页面加载于${new Date().toLocaleString()}`,
    count: 0,
    langType: 'zh',
  },
  computed: {
    text() {
      if (this.count < 3) {
        return 'Hello, World';
      } else {
        return (this.langType === 'zh' ? '您已经浏览此网页' : "You've hold on this page for ") + this.getDay(this.count, this.langType);
      }
    }
  },
  methods: {
    getDay(s, langType = 'zh') {
      const timeDesc = {
        zh: {
          s: '秒',
          m: '分',
          h: '小时',
          d: '天',
          multi: '',
        },
        en: {
          s: 'second',
          m: 'minute',
          h: 'hour',
          d: 'day',
          multi: 's',
        },
      };
      let result = '';
      const ss = s % 60;
      const ms = Math.floor(s / 60);
      const hs = Math.floor(s / 60 / 60);
      const ds = Math.floor(s / 60 / 60 / 24);
      if (ds) {
        result += ds + timeDesc[langType].d;
        if (ds > 1) {
          result += timeDesc[langType].multi;
        }
      }
      if (hs) {
        result += hs + timeDesc[langType].h;
        if (hs > 1) {
          result += timeDesc[langType].multi;
        }
      }
      if (ms) {
        result += ms + timeDesc[langType].m;
        if (ms > 1) {
          result += timeDesc[langType].multi;
        }
      }
      if (ss) {
        result += ss + timeDesc[langType].s;
        if (ss > 1) {
          result += timeDesc[langType].multi;
        }
      }
      return result;
    },
    handleChangeLanguage() {
      this.langType = this.langType === 'en' ? 'zh' : 'en';
    }
  }
});

window.setInterval(() => {
  vm_wrapper.count++;
}, 1000)
