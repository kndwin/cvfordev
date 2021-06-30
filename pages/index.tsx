import Head from 'next/head'
import { Layout } from 'components'
import Typist from 'react-text-typist'
import { BiPencil } from 'react-icons/bi'
import { Text, Row, Link, Button, Page } from '@geist-ui/react'

export default function Home () {
	return (
		<Layout>
			<Head>
			</Head>
			<Row justify='center' style={{ margin: '3em 0'}}>
				<Text h1>
					write resumes, get interviews
				</Text>
			</Row>
			<Row  justify='center' style={{ marginBottom: '5em'}}>
				<Text style={{ fontSize: '1.5em', width: '20em'} }>
					Markdown editor that helps
					<br />
					<Text b>
						<Typist 
							deletingSpeed={100}
							pauseTime={2500}
							cursorBlinkSpeed={1000} 
							typingSpeed={120} sentences={[
								'software engineers',  
								'full-stack engineers',
								'front-end engineers', 
								'developers', 
								'back-end engineer',  
							]} 
							loop={true}/>
					</Text> 
					<br />
					write resumes that get interviews
				</Text>
			</Row>
			<Row  justify='center' style={{ marginBottom: '3em'}}>
				<Link href='/editor'>
					<Button icon={<BiPencil />} auto size='large' type='secondary'>
						<Text b>
							Start writing
						</Text>
					</Button>
				</Link>
			</Row>
		</Layout>
	)
}
