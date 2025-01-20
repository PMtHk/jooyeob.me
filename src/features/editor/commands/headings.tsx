import type { ICommand } from '@uiw/react-md-editor'

export const Heading1: ICommand = {
  name: 'heading1',
  keyCommand: 'heading1',
  buttonProps: { 'aria-label': 'Insert heading1' },
  icon: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      className='md:w-7 md:h-7 fill-foreground'
    >
      <path d='M11 7h2v10h-2v-4H7v4H5V7h2v4h4V7zm6.57 0c-.594.95-1.504 1.658-2.57 2v1h2v7h2V7h-1.43z' />
    </svg>
  ),
  execute: (state, api) => {
    let modifyText = `# ${state.selectedText}`
    if (!state.selectedText) {
      modifyText = '# '
    }

    api.replaceSelection(modifyText)
  },
}

export const Heading2: ICommand = {
  name: 'heading2',
  keyCommand: 'heading2',
  buttonProps: { 'aria-label': 'Insert heading1' },
  icon: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      className='md:w-7 md:h-7 fill-foreground'
    >
      <rect x='0' fill='none' width='24' height='24' />
      <g>
        <path
          xmlns='http://www.w3.org/2000/svg'
          d='M9 7h2v10H9v-4H5v4H3V7h2v4h4V7zm8 8c.51-.41.6-.62 1.06-1.05.437-.4.848-.828 1.23-1.28.334-.39.62-.82.85-1.28.2-.39.305-.822.31-1.26.005-.44-.087-.878-.27-1.28-.177-.385-.437-.726-.76-1-.346-.283-.743-.497-1.17-.63-.485-.153-.99-.227-1.5-.22-.36 0-.717.033-1.07.1-.343.06-.678.158-1 .29-.304.13-.593.295-.86.49-.287.21-.56.437-.82.68l1.24 1.22c.308-.268.643-.502 1-.7.35-.2.747-.304 1.15-.3.455-.03.906.106 1.27.38.31.278.477.684.45 1.1-.014.396-.14.78-.36 1.11-.285.453-.62.872-1 1.25-.44.43-.98.92-1.59 1.43-.61.51-1.41 1.06-2.16 1.65V17h8v-2h-4z'
        />
      </g>
    </svg>
  ),
  execute: (state, api) => {
    let modifyText = `## ${state.selectedText}`
    if (!state.selectedText) {
      modifyText = '## '
    }

    api.replaceSelection(modifyText)
  },
}

export const Heading3: ICommand = {
  name: 'heading3',
  keyCommand: 'heading3',
  buttonProps: { 'aria-label': 'Insert heading3' },
  icon: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      className='md:w-7 md:h-7 fill-foreground'
    >
      <rect x='0' fill='none' width='24' height='24' />
      <g>
        <path
          xmlns='http://www.w3.org/2000/svg'
          d='M14.11 14.218c.355.287.75.523 1.17.7.434.18.9.273 1.37.27.484.017.965-.086 1.4-.3.333-.146.55-.476.55-.84.003-.203-.05-.403-.15-.58-.123-.19-.3-.34-.51-.43-.32-.137-.655-.228-1-.27-.503-.073-1.012-.106-1.52-.1v-1.57c.742.052 1.485-.07 2.17-.36.37-.164.615-.525.63-.93.026-.318-.12-.627-.38-.81-.34-.203-.734-.3-1.13-.28-.395.013-.784.108-1.14.28-.375.167-.73.375-1.06.62l-1.22-1.39c.5-.377 1.053-.68 1.64-.9.608-.224 1.252-.336 1.9-.33.525-.007 1.05.05 1.56.17.43.1.84.277 1.21.52.325.21.595.495.79.83.19.342.287.73.28 1.12.01.48-.177.943-.52 1.28-.417.39-.916.685-1.46.86v.06c.61.14 1.175.425 1.65.83.437.382.68.94.66 1.52.005.42-.113.835-.34 1.19-.23.357-.538.657-.9.88-.408.253-.853.44-1.32.55-.514.128-1.04.192-1.57.19-.786.02-1.57-.106-2.31-.37-.59-.214-1.126-.556-1.57-1l1.12-1.41zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z'
        />
      </g>
    </svg>
  ),
  execute: (state, api) => {
    let modifyText = `### ${state.selectedText}`
    if (!state.selectedText) {
      modifyText = '### '
    }

    api.replaceSelection(modifyText)
  },
}
