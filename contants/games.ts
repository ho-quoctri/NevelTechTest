import type { IGameItem } from "~/components/pages/game/GameHotItem.vue"
import type { IGameHottesItem } from "~/components/pages/game/GameHottestCategoryItem.vue"

export const GAMES = [
  {
    name: 'Football',
    image: '/banner-1.png'
  },
  {
    name: 'Spider 2',
    image: '/banner-2.png'
  },
  {
    name: 'Desrasing 3',
    image: '/banner-3.png'
  }
]

export const GAME_MENU_BAR = [
  {
    name: 'Search',
    icon: 'search',
  },
  {
    name: 'Game Home',
    icon: 'game-home',
    path: 'gamesHome'
  },
  {
    name: 'Timeline',
    icon: 'time-line',
    path: 'timeline'

  },
  {
    name: 'All Games',
    icon: 'all-game',
    path: 'allGame'
  },
  {
    name: 'Filter',
    icon: 'filter',
  }
]

export const GAME_HOT: Array<IGameItem> = [
  {
    name: 'Mahjong Ways',
    imageBanner: 'game-1.png',
    imageLogo: 'game-1-logo.png',
    description: '4TECH™ has just launched their very first Mahjong inspired slot machine game'
  },
  {
    name: 'Mahjong Ways',
    imageBanner: 'game-2.png',
    imageLogo: 'game-1-logo.png',
    description: '4TECH™ has just launched their very first Mahjong inspired slot machine game'
  },
  {
    name: 'Mahjong OPX',
    imageBanner: 'game-2.png',
    imageLogo: 'game-1-logo.png',
    description: '4TECH™ has just launched their very first Mahjong inspired slot machine game'
  },
  {
    name: 'Mahjong OPX',
    imageBanner: 'game-2.png',
    imageLogo: 'game-1-logo.png',
    description: '4TECH™ has just launched their very first Mahjong inspired slot machine game'
  }
]

export const GAME_HOTTEST_CATEGORY :Array<IGameHottesItem> = [
  {
    title: 'Music',
    description:'Music makes everything better, and these games will grove to it!',
    icon:'music',
    imageGame: 'game-hot-1.png'
  },
  {
    title: 'Table Games',
    description:'The classic table games for the gentlemen and ladies.',
    icon:'poker',
    imageGame: 'game-hot-2.png'
  },{
    title: 'Music',
    description:'Music makes everything better, and these games will grove to it!',
    icon:'music',
    imageGame: 'game-hot-1.png'
  },
  {
    title: 'Table Games',
    description:'The classic table games for the gentlemen and ladies.',
    icon:'poker',
    imageGame: 'game-hot-2.png'
  }
]