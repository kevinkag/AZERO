const ICONS_ASSETS_PATH = '/icons'

const iconMap = {
  'arrow-right': 'arrow-right',
  'arrow-left': 'arrow-left',
}

export const mapType = (type) => `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`
//export const mapSize = (type) => null
