<template>
  <section class="form" id="contact-us">
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
        </div>
      </div>

      <div class="form__send">
        <button
          type="submit"
          name="submit"
          class="button button--orange"
          @click.prevent="sendFrom()"
        >
          {{ consultation.button }}
        </button>
        <p class="form__agree" v-html="consultation.agree"></p>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      consultation: {
        title: "Оставить заявку на услугу",
        subtitle: "Наш менеджер свяжется с вами в течении 10 минут",
        button: "Отправить",
        agree:
          'Нажимая на кнопку отправить вы принимаете <a href="#">Пользовательское соглашение</a>',
      },
      form: {
        name: {
          value: "",
          label: "Ваше имя",
          type: "text",
          id: "questions-name",
          error: "",
        },
        phone: {
          value: "",
          label: "Телефон",
          type: "tel",
          id: "questions-phone",
          error: "",
        },
        file: {
          value: {},
        },
        accept: {
          value: true,
        },
        default: {},
        success_text: "",
        overlay: false,
      },
    };
  },
  methods: {
    async sendFrom() {
      if (!this.$validate(this.form)) {
        return;
      }

      const data = new FormData();
      for (let key in this.form) {
        if (typeof this.form[key].value !== "undefined") {
          data.append(key, this.form[key].value);
        }
      }

      data.append("method", "request");

      // const response = await axios.post('/api/', data).catch((error) => {
      //   console.log(error)
      // })

      // if (response.data.success) {
      // this.$store.commit('ReviewSuccessOpen')
      // }
    },
  },
};
</script>

<style></style>
