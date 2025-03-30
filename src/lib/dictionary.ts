import 'server-only'

const dictionaries = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  sv: () => import('@/locales/sv.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  // Fallback to Swedish if language not supported
  const lang = locale in dictionaries ? locale : 'sv'
  return dictionaries[lang as keyof typeof dictionaries]()
}