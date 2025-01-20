import type { ICommand } from '@uiw/react-md-editor'

export const Image: ICommand = {
  name: 'image',
  keyCommand: 'image',
  buttonProps: { 'aria-label': 'Insert image' },
  icon: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      className='md:w-7 md:h-7 fill-foreground'
    >
      <path d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z'></path>
    </svg>
  ),
  execute: (state, api) => {
    let modifyText = `![${state.selectedText}](url)`
    if (!state.selectedText) {
      modifyText = '![이미지 설명](url)'
    }

    api.replaceSelection(modifyText)
  },
}
