import data from '@emoji-mart/data'
import { init, Data } from '../config'
import { SearchIndex } from '../helpers'

const customEmoji = (id) => ({
  id,
  name: id,
  keywords: [id],
  skins: [{ src: `https://example.com/${id}.png` }],
})

describe('init', () => {
  test('custom emojis removed from props are no longer resolvable', async () => {
    await init({
      data,
      custom: [{ emojis: [customEmoji('foo'), customEmoji('bar')] }],
    })

    expect(SearchIndex.get('foo')).toBeDefined()
    expect(SearchIndex.get('bar')).toBeDefined()

    await init({
      data,
      custom: [{ emojis: [customEmoji('foo')] }],
    })

    expect(SearchIndex.get('foo')).toBeDefined()
    expect(SearchIndex.get('bar')).toBeUndefined()
    // Built-in emojis must survive
    expect(Data.emojis['+1']).toBeDefined()
  })
})
