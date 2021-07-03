import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import styles from './Editor.module.scss'
import useMarkdownStore from "store/markdownStore";
import {useEffect, useMemo} from "react";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false })

export default function Editor (): JSX.Element {

	const { text, setText } = useMarkdownStore()
	
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const localText = localStorage.getItem('resume') || text
			setText(localText)
		}
	}, [])

	const delay = 1000
	const textHanlder = (value: string) => {
		localStorage.setItem('resume', value)
		setText(value)
	}

	const options = useMemo(() => {
		return {
			autosave: { 
				enabled: true,
				uniqueId: "uniqId",
				delay
			},
			status: false,
			toolbar: false,
			spellChecker: false,
		} 
	}, [delay])

	return (
		<div style={{ height: '100%'}}>
			{
				<SimpleMDE
					className={styles.editor}
					value={text}
					onChange={(value) => textHanlder(value)}
					options={options}
				/>
			}
		</div>
	)
}
