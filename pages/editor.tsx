import { Layout, Editor, Preview } from 'components'
import { Row, Col } from '@geist-ui/react'

export default function EditorPage (): JSX.Element {
	return (
		<Layout fullScreen>
			<Row gap={2} justify='center' style={{ 
				width: '100%', 
				height: '100%',
				padding: '0 2em 2em 0'
				}}>
				<Col span={12}>
					<Editor 
					/>
				</Col>
				<Col span={12}>
					<Preview />
				</Col>
			</Row>
		</Layout>
	)
}
