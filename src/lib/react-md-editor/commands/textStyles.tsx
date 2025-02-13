import type { ICommand } from '@uiw/react-md-editor'

export const Bold: ICommand = {
  name: 'bold',
  keyCommand: 'bold',
  buttonProps: { 'aria-label': 'Insert bold text' },
  icon: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      className='fill-foreground md:h-7 md:w-7'
    >
      <path d='M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z'></path>
    </svg>
  ),
  execute: (state, api) => {
    let modifyText = `**${state.selectedText}**`
    if (!state.selectedText) {
      modifyText = '**텍스트**'
    }

    api.replaceSelection(modifyText)
  },
}

export const Italic: ICommand = {
  name: 'italic',
  keyCommand: 'italic',
  buttonProps: { 'aria-label': 'Insert bold text' },
  icon: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      className='fill-foreground md:h-7 md:w-7'
    >
      <path d='M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z'></path>
    </svg>
  ),
  execute: (state, api) => {
    let modifyText = `_${state.selectedText}_`
    if (!state.selectedText) {
      modifyText = '_텍스트_'
    }

    api.replaceSelection(modifyText)
  },
}

export const Strikethrough: ICommand = {
  name: 'strikethrough',
  keyCommand: 'strikethrough',
  buttonProps: { 'aria-label': 'Insert strikethrough text' },
  icon: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      className='fill-foreground md:h-7 md:w-7'
    >
      <path d='M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z'></path>
    </svg>
  ),
  execute: (state, api) => {
    let modifyText = `~~${state.selectedText}~~`
    if (!state.selectedText) {
      modifyText = '~~텍스트~~'
    }

    api.replaceSelection(modifyText)
  },
}
