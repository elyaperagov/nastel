<template>
  <section class="form" id="contact-us">
    <div class="container">
      <form action="get" id="form-consultation" class="form__request">
        <h3>{{ consultation.title }}</h3>
        <p class="form__subtitle">{{ consultation.subtitle }}</p>
        <div class="form__fields-wrapper">
          <div class="form__field">
            <input
              :name="form.name.id"
              :id="form.name.id"
              :type="form.name.type"
              v-model="form.name.value"
              class="form__input"
              required="required"
              :class="{
                'form__input--error': form.name.error,
                'form__input--filled': form.name.value.length > 0,
              }"
            />
            <label
              :for="form.name.id"
              class="form__label"
              v-html="form.name.label"
            ></label>
            <template v-if="form.name.error">
              <svg
                class="icon icon-error"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <use xlink:href="#error"></use>
              </svg>
              <span class="form__error" v-html="form.name.error"></span>
            </template>
          </div>
          <div class="form__field">
            <input
              :name="form.phone.id"
              :id="form.phone.id"
              :type="form.phone.type"
              v-model="form.phone.value"
              class="form__input"
              required="required"
              :class="{
                'form__input--error': form.phone.error,
                'form__input--filled': form.phone.value.length > 0,
              }"
              v-mask="'+7 (###) ###-##-##'"
            />
            <label
              :for="form.phone.id"
              class="form__label"
              v-html="form.phone.label"
            ></label>
            <template v-if="form.phone.error">
              <svg
                class="icon icon-error"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <use xlink:href="#error"></use>
              </svg>
              <span class="form__error" v-html="form.phone.error"></span>
            </template>
          </div>
        </div>

        <div class="form__field">
          <textarea
            :name="form.message.id"
            :id="form.message.id"
            v-model="form.message.value"
            :maxlength="form.message.maxlength"
            cols="34"
            rows="10"
            class="form__textarea"
            required="required"
            :class="{
              'form__textarea--error':
                form.message.error ||
                form.message.value.length === form.message.maxlength,
              'form__textarea--filled': form.message.value.length > 0,
            }"
          ></textarea>
          <label
            :for="form.message.id"
            class="form__label"
            v-html="form.message.label"
          ></label>
          <template v-if="form.message.error">
            <svg
              class="icon icon-error"
              width="24"
              height="24"
              aria-hidden="true"
            >
              <use xlink:href="#error"></use>
            </svg>
            <span class="form__error" v-html="form.message.error"></span>
          </template>
        </div>
        <div class="form__file">
          <label class="form__file-label" for="attachement">
            <svg
              width="20"
              height="19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use xlink:href="#file" />
            </svg>
            <span v-if="form.file.value.name">{{ form.file.value.name }}</span>
            <span v-else>Прикрепить файл</span>
            <input
              ref="file"
              v-on:change="handleFiles()"
              type="file"
              id="attachement"
              name="attachement"
            />
          </label>
        </div>
        <div class="form__send">
          <p class="form__agree">
            {{ consultation.agree }}
          </p>
          <button
            type="submit"
            name="submit"
            class="button button--round button--white"
            @click.prevent="sendFrom()"
          >
            <p>{{ consultation.button }}</p>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      consultation: {
        title: 'Узнать стоимость дома по своему проекту',
        button: 'Отправить',
        agree:
          'Нажимая на кнопку, я подтверждаю, что согласен на обработку моих персональных данных, а также с Пользовательским соглашением ',
      },
      form: {
        name: {
          value: '',
          label: 'Ваше имя',
          type: 'text',
          id: 'questions-name',
          error: '',
        },
        phone: {
          value: '',
          label: 'Ваш телефон',
          type: 'tel',
          id: 'questions-phone',
          error: '',
        },
        message: {
          value: '',
          label: 'Сообщение',
          type: 'textarea',
          id: 'questions-message',
          maxlength: 150,
          error: '',
        },
        file: {
          value: {},
        },
        accept: {
          value: true,
        },
        default: {},
        success_text: '',
        overlay: false,
      },
    }
  },
  methods: {
    async sendFrom() {
      if (!this.$validate(this.form)) {
        return
      }

      const data = new FormData()
      for (let key in this.form) {
        if (typeof this.form[key].value !== 'undefined') {
          data.append(key, this.form[key].value)
        }
      }

      data.append('method', 'request')

      // const response = await axios.post('/api/', data).catch((error) => {
      //   console.log(error)
      // })

      // if (response.data.success) {
      // this.$store.commit('ReviewSuccessOpen')
      // }
    },
  },
}
</script>

<style></style>
