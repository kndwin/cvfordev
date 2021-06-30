import { Spacer, Text, Link, Page } from '@geist-ui/react'
import {useEffect, useState} from 'react'
import { BiPencil } from 'react-icons/bi'

type LayoutProps = {
	children: React.ReactNode,
	fullScreen?: boolean
}

export default function Layout({ children, fullScreen=false }: LayoutProps): JSX.Element {
	const [mounted, setMounted] = useState<boolean>(false)
	useEffect(() => {
		setMounted(true)
	},[])
	if (!mounted) { return null }

	return (
		<Page size={`${fullScreen ? '' : 'small'}`}>
			<Page.Header style={{ padding: '1em', display: `${fullScreen ? 'block' : 'none'}`}}>
				<Text b style={{ display: 'flex', alignItems: 'center'}}>
					<BiPencil style={{ marginRight: '0.5em'}} />
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
