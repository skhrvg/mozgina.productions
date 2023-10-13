<script setup lang="ts">
import profilePhoto from '@/assets/profile.jpg?url'
import InstagramIcon from '@/components/icons/InstagramIcon.vue'
import TelegramIcon from '@/components/icons/TelegramIcon.vue'
import HeroSection from '@/components/HeroSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import type { Props as HeroProps } from '@/components/HeroSection.vue'
import type { Props as PortfolioProps } from '@/components/PortfolioSection.vue'
import type { Props as ContactProps } from '@/components/ContactSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import TheCursor from '@/components/TheCursor.vue'
import profileSfx from '@/assets/profile-sfx.mp3'

const heroProps: HeroProps = {
  photo: profilePhoto,
  sfx: profileSfx,
  header: 'MOZGINA\nPRODUCTIONS',
  description: 'Продюсирование фото | видео съёмок в Москве и Петербурге,\nконсультация брендов',
  socialLinks: [
    {
      icon: InstagramIcon,
      href: 'https://instagram.com/olyamozgina',
    },
    {
      icon: TelegramIcon,
      href: 'https://t.me/olyamozgina',
    },
  ],
}

const portfolioProps: PortfolioProps = {
  carouselSections: [
    {
      header: 'Каталог',
      path: '/portfolio/catalog',
      itemsCount: 10,
      extension: 'jpg',
    },
    {
      header: 'Стрит',
      path: '/portfolio/street',
      itemsCount: 12,
      extension: 'jpg',
    },
    {
      header: 'Имидж',
      path: '/portfolio/image',
      itemsCount: 9,
      extension: 'jpg',
    },
    {
      header: 'Парные',
      path: '/portfolio/paired',
      itemsCount: 7,
      extension: 'jpg',
    },
    {
      header: 'Тематические',
      path: '/portfolio/thematic',
      itemsCount: 16,
      extension: 'jpg',
    },
  ],
}

const contactProps: ContactProps = {
  text: 'По вопросам сотрудничества пишите мне в Телеграм',
  buttonText: 'olyamozgina',
  buttonLink: 'https://t.me/olyamozgina',
  buttonIcon: TelegramIcon,
}
</script>

<template>
  <HeroSection v-bind="heroProps" />
  <PortfolioSection v-bind="portfolioProps" />
  <ContactSection v-bind="contactProps" />
  <TheCursor />
</template>
