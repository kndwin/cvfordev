import create from 'zustand'

type MarkdownState = {
  text: string
  printRef: React.RefObject<HTMLDivElement>
  setPrintRef: (ref: React.RefObject<HTMLDivElement>) => void
  setText: (text: string) => void
}

const useMarkdownStore = create<MarkdownState>((set) => ({
  text: `# Start writing 📝
## or try one of our resume templates 📄
`,
  printRef: null,
  setPrintRef: (ref) => set({ printRef: ref }),
  setText: (text) => set({ text: text }),
}))

export default useMarkdownStore
