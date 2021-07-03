import ReactMarkdown from 'react-markdown'
import useMarkdownStore from 'store/markdownStore'
import gfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import styles from './Preview.module.scss'
import { useEffect, useRef } from 'react'

export default function Preview(): JSX.Element {
  const { text, printRef, setPrintRef } = useMarkdownStore()
  const ref = useRef()

  useEffect(() => {
    setPrintRef(ref)
  }, [])

  return (
    <div ref={printRef} className={`${styles.printArea}`}>
      <ReactMarkdown
        className={`${styles.preview}`}
        remarkPlugins={[gfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {text}
      </ReactMarkdown>
    </div>
  )
}
