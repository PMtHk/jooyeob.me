import { ICommand } from '@uiw/react-md-editor'

export const Quote: ICommand = {
  name: 'quote',
  keyCommand: 'quote',
  buttonProps: { 'aria-label': 'Insert blockquote' },
  icon: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      className='md:w-7 md:h-7 fill-foreground'
    >
      <path d='M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z'></path>
    </svg>
  ),
  execute: (state, api) => {
    let modifyText = `> ${state.selectedText}`
    if (!state.selectedText) {
      modifyText = '> '
    }

    api.replaceSelection(modifyText)
  },
}

export const Link: ICommand = {
  name: 'link',
  keyCommand: 'link',
  buttonProps: { 'aria-label': 'Insert link' },
  icon: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      className='md:w-7 md:h-7 fill-foreground'
    >
      <path d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'></path>
    </svg>
  ),
  execute: (state, api) => {
    let modifyText = `[${state.selectedText}](url)`
    if (!state.selectedText) {
      modifyText = '[텍스트](url)'
    }

    api.replaceSelection(modifyText)
  },
}

export const CodeBlock: ICommand = {
  name: 'codeblock',
  keyCommand: 'codeblock',
  buttonProps: { 'aria-label': 'Insert code block' },
  icon: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      className='md:w-7 md:h-7 fill-foreground'
    >
      <path d='M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z'></path>
    </svg>
  ),
  execute: (state, api) => {
    let modifyText = `\`\`\`\n${state.selectedText}\n\`\`\``
    if (!state.selectedText) {
      modifyText = '```\n코드\n```'
    }

    api.replaceSelection(modifyText)
  },
}
