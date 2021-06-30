import { Spacer, Text, Link, Button, Page } from '@geist-ui/react'

type LayoutProps = {
	children: React.ReactNode,
	fullScreen?: boolean
}

export default function Layout({ children, fullScreen=false }: LayoutProps) {
	return (
		<Page size={`${fullScreen ? '' : 'small'}`}>
			<Page.Header style={{ padding: '1em', display: `${fullScreen ? 'block' : 'none'}`}}>
				<Text b>
					cvfor.dev
				</Text>
			</Page.Header>
			<Page.Content>
				{children}
			</Page.Content>
			<Page.Footer style={{ 
				padding: '2em 0', 
				display: `${ fullScreen ? 'none' : 'flex'}`, 
				justifyContent: 'center',
				alignItems: 'center'
				}}>
				<Text b style={{ margin: '0'}}>
					Coded with  🖤  by  <Link color href='https://kndwin.dev'>kndwin</Link>
				</Text>
				<Spacer x={2} />
				<Text  b style={{ margin: '0'}}>
					Icons by <Link color href="https://simpleicon.org">simpleicon.org</Link>
				</Text>
			</Page.Footer>
		</Page>
	)
}
