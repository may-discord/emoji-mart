// @ts-nocheck
import { Store } from '../helpers'

let List: string[] | null = null

function add(emoji: { id: string }) {
  List || (List = Store.get('favorites') || [])

  const emojiId = emoji.id || emoji
  if (!emojiId) return

  if (List.includes(emojiId)) return

  List.push(emojiId)
  Store.set('favorites', List)
}

function remove(emoji: { id: string }) {
  List || (List = Store.get('favorites') || [])

  const emojiId = emoji.id || emoji
  if (!emojiId) return

  const index = List.indexOf(emojiId)
  if (index === -1) return

  List.splice(index, 1)
  Store.set('favorites', List)
}

function toggle(emoji: { id: string }): { added: boolean } {
  const emojiId = emoji.id || emoji
  if (has(emojiId)) {
    remove(emoji)
    return { added: false }
  } else {
    add(emoji)
    return { added: true }
  }
}

function get(): string[] {
  List || (List = Store.get('favorites') || [])
  return [...List]
}

// Force-reload the cached list from localStorage, e.g. after an external
// (cross-tab) edit is detected via the `storage` event.
function sync() {
  List = Store.get('favorites') || []
}

function has(emojiId: string): boolean {
  List || (List = Store.get('favorites') || [])
  return List.includes(emojiId)
}

function set(emojiIds: string[]) {
  List = emojiIds.slice(0, MAX_FAVORITES)
  Store.set('favorites', List)
}

export default { add, remove, toggle, get, has, set, sync }
