<template>
  <section class="faq" id="faq">
    <div class="container">
      <h2>{{ title }}</h2>
      <ul class="faq__items">
        <li
          class="faq__item"
          v-for="(item, index) in faqItems"
          :key="index"
          @click="toggleBlock(index)"
          :class="{ 'faq__item--active': item.showOptions}"
        >
          <div class="faq__item-content">
            <p class="faq__item-question">{{ item.text }}</p>

          </div>
          <slide-up-down
            :active="item.showOptions"
            v-bind:class="{ show: item.show }"
          >
            <div class="faq__item-text">
              <p>{{ item.answer }}</p>
            </div>
          </slide-up-down>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Faq',
  data() {
    return {
      active: true,
      showOptions: false,
      duration: 500,
      mobileBreakpoint: 768,
      windowWidth: window.innerWidth,
      isMobile: false,
      title: 'FAQ',
      faqItems: [
        {
          text: 'Что такое модульный дом?',
          answer:
            'Vulputate eget nibh netus mi nunc amet, morbi egestas. Donec at vulputate fermentum, sit sit iaculis lectus felis. Laoreet morbi diam ut ultricies posuere. Lectus imperdiet morbi semper viverra bibendum. Phasellus velit id bibendum tincidunt leo turpis urna diam. Adipiscing libero tortor aliquet arcu. In tellus dolor duis commodo faucibus lorem amet, maecenas sed. Ultrices tristique et sed cras et vitae neque, amet neque. Sit lacus, donec praesent facilisis eget nisl, eget nam. Tortor auctor facilisis sollicitudin fermentum. Semper at nisl id lacus bibendum porta at facilisi aliquet. ',
          showOptions: false,
        },
        {
          text: 'Как происходит установка модульного дома?',
          answer:
            'Vulputate eget nibh netus mi nunc amet, morbi egestas. Donec at vulputate fermentum, sit sit iaculis lectus felis. Laoreet morbi diam ut ultricies posuere. Lectus imperdiet morbi semper viverra bibendum. Phasellus velit id bibendum tincidunt leo turpis urna diam. Adipiscing libero tortor aliquet arcu. In tellus dolor duis commodo faucibus lorem amet, maecenas sed. Ultrices tristique et sed cras et vitae neque, amet neque. Sit lacus, donec praesent facilisis eget nisl, eget nam. Tortor auctor facilisis sollicitudin fermentum. Semper at nisl id lacus bibendum porta at facilisi aliquet. ',
          showOptions: false,
        },
        {
          text: 'Необходимо ли подготавливать участок для установки постройки?',
          answer:
            'Vulputate eget nibh netus mi nunc amet, morbi egestas. Donec at vulputate fermentum, sit sit iaculis lectus felis. Laoreet morbi diam ut ultricies posuere. Lectus imperdiet morbi semper viverra bibendum. Phasellus velit id bibendum tincidunt leo turpis urna diam. Adipiscing libero tortor aliquet arcu. In tellus dolor duis commodo faucibus lorem amet, maecenas sed. Ultrices tristique et sed cras et vitae neque, amet neque. Sit lacus, donec praesent facilisis eget nisl, eget nam. Tortor auctor facilisis sollicitudin fermentum. Semper at nisl id lacus bibendum porta at facilisi aliquet. ',
          showOptions: false,
        },
        {
          text: 'Какие требования к участку размещения постройки?',
          answer:
            'Vulputate eget nibh netus mi nunc amet, morbi egestas. Donec at vulputate fermentum, sit sit iaculis lectus felis. Laoreet morbi diam ut ultricies posuere. Lectus imperdiet morbi semper viverra bibendum. Phasellus velit id bibendum tincidunt leo turpis urna diam. Adipiscing libero tortor aliquet arcu. In tellus dolor duis commodo faucibus lorem amet, maecenas sed. Ultrices tristique et sed cras et vitae neque, amet neque. Sit lacus, donec praesent facilisis eget nisl, eget nam. Tortor auctor facilisis sollicitudin fermentum. Semper at nisl id lacus bibendum porta at facilisi aliquet. ',
          showOptions: false,
        },
        {
          text: 'Сколько времени занимает строительство?',
          answer:
            'Vulputate eget nibh netus mi nunc amet, morbi egestas. Donec at vulputate fermentum, sit sit iaculis lectus felis. Laoreet morbi diam ut ultricies posuere. Lectus imperdiet morbi semper viverra bibendum. Phasellus velit id bibendum tincidunt leo turpis urna diam. Adipiscing libero tortor aliquet arcu. In tellus dolor duis commodo faucibus lorem amet, maecenas sed. Ultrices tristique et sed cras et vitae neque, amet neque. Sit lacus, donec praesent facilisis eget nisl, eget nam. Tortor auctor facilisis sollicitudin fermentum. Semper at nisl id lacus bibendum porta at facilisi aliquet. ',
          showOptions: false,
        },
        {
          text: 'Насколько автономным будет строение?',
          answer:
            'Vulputate eget nibh netus mi nunc amet, morbi egestas. Donec at vulputate fermentum, sit sit iaculis lectus felis. Laoreet morbi diam ut ultricies posuere. Lectus imperdiet morbi semper viverra bibendum. Phasellus velit id bibendum tincidunt leo turpis urna diam. Adipiscing libero tortor aliquet arcu. In tellus dolor duis commodo faucibus lorem amet, maecenas sed. Ultrices tristique et sed cras et vitae neque, amet neque. Sit lacus, donec praesent facilisis eget nisl, eget nam. Tortor auctor facilisis sollicitudin fermentum. Semper at nisl id lacus bibendum porta at facilisi aliquet. ',
          showOptions: false,
        },
        {
          text: 'Как происходит установка модульного дома?',
          answer:
            'Vulputate eget nibh netus mi nunc amet, morbi egestas. Donec at vulputate fermentum, sit sit iaculis lectus felis. Laoreet morbi diam ut ultricies posuere. Lectus imperdiet morbi semper viverra bibendum. Phasellus velit id bibendum tincidunt leo turpis urna diam. Adipiscing libero tortor aliquet arcu. In tellus dolor duis commodo faucibus lorem amet, maecenas sed. Ultrices tristique et sed cras et vitae neque, amet neque. Sit lacus, donec praesent facilisis eget nisl, eget nam. Tortor auctor facilisis sollicitudin fermentum. Semper at nisl id lacus bibendum porta at facilisi aliquet. ',
          showOptions: false,
        },
      ],
    }
  },
  methods: {
    toggleBlock(i) {
      this.faqItems[i].showOptions = !this.faqItems[i].showOptions
      this.faqItems.forEach((element, key) => {
        if (key !== i) {
          element.showOptions = false
        }
      })
    },
    toggleSlideUpDown() {
      if (this.$root.width > 767) {
        this.showOptions = true
      }
    },
    handleResize() {
      this.toggleMobile()
    },
    toggleMobile() {
      if (window.innerWidth <= this.mobileBreakpoint) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
  },
  computed: {},
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.toggleMobile()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    this.toggleMobile()
  },
}
</script>

<style></style>
