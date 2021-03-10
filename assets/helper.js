import { take, get } from 'lodash'

export function attributesFromEvents (_events, _tags) {
  const colors = ['blue', 'orange', 'yellow', 'teal', 'indigo', 'green', 'red', 'purple', 'pink', 'gray']
  const tags = take(_tags, 10).map(t => t.tag)
  let attributes = []
  attributes.push({ key: 'today', dates: new Date(), highlight: { color: 'green', fillMode: 'outline' } })

  function getColor (event) {
    const color = { class: 'vc-rounded-full', color: 'blue', fillMode: 'normal' }
    const tag = get(event, 'tags[0]')
    if (!tag) { return color }
    const idx = tags.indexOf(tag)
    if (idx < 0) { return color }
    color.color = colors[idx]
    return color
  }

  attributes = attributes.concat(_events
    .filter(e => !e.multidate)
    .map(e => {
      return {
        key: e.id,
        dot: getColor(e),
        dates: new Date(e.start_datetime * 1000)
      }
    }))

  attributes = attributes.concat(_events
    .filter(e => e.multidate)
    .map(e => ({
      key: e.id,
      highlight: getColor(e),
      dates: { start: new Date(e.start_datetime * 1000), end: new Date(e.end_datetime * 1000) }
    })))

  return attributes
}
