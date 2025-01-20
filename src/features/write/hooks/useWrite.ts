import { useWriteContext } from '@/features/write/contexts/WriteContext'

export function useWrite() {
  const { state, dispatch } = useWriteContext()

  return {
    ...state,
    setTitle: (title: string) => dispatch({ type: 'SET_TITLE', payload: title }),
    setContent: (content: string) => dispatch({ type: 'SET_CONTENT', payload: content }),
    setTags: (tags: string[]) => dispatch({ type: 'SET_TAGS', payload: tags }),
    addTag: (tag: string) => dispatch({ type: 'ADD_TAG', payload: tag }),
    removeTag: (tag: string) => dispatch({ type: 'REMOVE_TAG', payload: tag }),
    setThumbnailURL: (url: string) => dispatch({ type: 'SET_THUMBNAIL_URL', payload: url }),
    removeThumbnailURL: () => dispatch({ type: 'REMOVE_THUMBNAIL_URL' }),
    setSummary: (summary: string) => dispatch({ type: 'SET_SUMMARY', payload: summary }),
    setCategory: (category: 'dev' | 'study' | 'review') =>
      dispatch({ type: 'SET_CATEGORY', payload: category }),
    setURL: (url: string) => dispatch({ type: 'SET_URL', payload: url }),
    setSeries: (series: string) => dispatch({ type: 'SET_SERIES', payload: series }),
    removeSeries: () => dispatch({ type: 'REMOVE_SERIES' }),
  }
}
