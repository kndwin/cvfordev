import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import styles from './Editor.module.scss'
import useMarkdownStore from "store/markdownStore";
import {useMemo} from "react";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false })

export default function Editor (): JSX.Element {

	const { text, setText } = useMarkdownStore()
	const delay = 1000

	const options = useMemo(() => {
		return {
			autosave: { 
				enabled: true,
				uniqueId: "uniqId",
				delay
			},
			status: false,
			toolbar: false,
			autofocus: true, 
			spellChecker: false,
		} 
	}, [delay])

	return (
		<div style={{ height: '100%'}}>
			{
				<SimpleMDE
					className={styles.editor}
					value={text}
					onChange={setText}
					options={options}
				/>
			}
		</div>
	)
}
