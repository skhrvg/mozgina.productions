import { useMediaQuery } from '@vueuse/core'
import type { Ref } from 'vue'
import { computed } from 'vue'

export default function useTailwindBreakpoints() {
  const isNarrowerThanSM: Ref<boolean> = useMediaQuery('(max-width: 640px)')
  const isNarrowerThanMD: Ref<boolean> = useMediaQuery('(max-width: 768px)')
  const isNarrowerThanLG: Ref<boolean> = useMediaQuery('(max-width: 1024px)')
  const isNarrowerThanXL: Ref<boolean> = useMediaQuery('(max-width: 1280px)')
  const isNarrowerThan2XL: Ref<boolean> = useMediaQuery('(max-width: 1536px)')

  const isWiderThanSM: Ref<boolean> = useMediaQuery('(min-width: 640px)')
  const isWiderThanMD: Ref<boolean> = useMediaQuery('(min-width: 768px)')
  const isWiderThanLG: Ref<boolean> = useMediaQuery('(min-width: 1024px)')
  const isWiderThanXL: Ref<boolean> = useMediaQuery('(min-width: 1280px)')
  const isWiderThan2XL: Ref<boolean> = useMediaQuery('(min-width: 1536px)')

  const isMobile = computed(() => isNarrowerThanSM.value)
  const isTablet = computed(() => isWiderThanSM.value && isNarrowerThanMD.value)
  const isDesktop = computed(() => isWiderThanMD.value && isNarrowerThanLG.value)
  const isLargeDesktop = computed(() => isWiderThanLG.value)

  return {
    isNarrowerThanSM,
    isNarrowerThanMD,
    isNarrowerThanLG,
    isNarrowerThanXL,
    isNarrowerThan2XL,
    isWiderThanSM,
    isWiderThanMD,
    isWiderThanLG,
    isWiderThanXL,
    isWiderThan2XL,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  }
}
