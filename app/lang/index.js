import Vue from 'vue'
import VueI18n from 'vue-i18n'
import langEn from './en'
import langZhCN from './zh-CN'

Vue.use(VueI18n)

const i18n = new VueI18n({
	messages: {
		'en': langEn,
		'zh-CN': langZhCN
	}
})

export default i18n