export interface WriteState {
  title: string
  content: string
  tags: string[]
  thumbnailURL: string
  summary: string
  category: 'dev' | 'study' | 'review'
  url: string
  series: number
}

export type WriteAction =
  | { type: 'SET_TITLE'; payload: string }
  | { type: 'SET_CONTENT'; payload: string }
  | { type: 'SET_TAGS'; payload: string[] }
  | { type: 'ADD_TAG'; payload: string }
  | { type: 'REMOVE_TAG'; payload: string }
  | { type: 'SET_THUMBNAIL_URL'; payload: string }
  | { type: 'REMOVE_THUMBNAIL_URL' }
  | { type: 'SET_SUMMARY'; payload: string }
  | { type: 'SET_CATEGORY'; payload: 'dev' | 'study' | 'review' }
  | { type: 'SET_URL'; payload: string }
  | { type: 'SET_SERIES'; payload: number }
  | { type: 'REMOVE_SERIES' }

export const initialState: WriteState = {
  title: '',
  content: '',
  tags: [],
  thumbnailURL: '',
  summary: '',
  category: 'dev',
  url: '',
  series: -1,
}

export const writeReducer = (state: WriteState, action: WriteAction): WriteState => {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload }
    case 'SET_CONTENT':
      return { ...state, content: action.payload }
    case 'SET_TAGS':
      return { ...state, tags: action.payload }
    case 'ADD_TAG':
      return state.tags.includes(action.payload)
        ? state
        : { ...state, tags: [...state.tags, action.payload] }
    case 'REMOVE_TAG':
      return { ...state, tags: state.tags.filter((tag) => tag !== action.payload) }
    case 'SET_THUMBNAIL_URL':
      return { ...state, thumbnailURL: action.payload }
    case 'REMOVE_THUMBNAIL_URL':
      return { ...state, thumbnailURL: '' }
    case 'SET_SUMMARY':
      return { ...state, summary: action.payload }
    case 'SET_CATEGORY':
      return { ...state, category: action.payload }
    case 'SET_URL':
      return { ...state, url: action.payload }
    case 'SET_SERIES':
      return { ...state, series: action.payload }
    case 'REMOVE_SERIES':
      return { ...state, series: -1 }
    default:
      throw new Error('Unhandled action')
  }
}
