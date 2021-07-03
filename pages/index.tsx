import Head from 'next/head'
import { Layout } from 'components'
import Typist from 'react-text-typist'
import { BiPencil } from 'react-icons/bi'
import { Text, Row, Link, Button } from '@geist-ui/react'

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Head></Head>
      <Row justify="center" style={{ marginTop: '3em' }}>
        <Text h1 style={{ fontSize: '5em' }}>
          write resumes
        </Text>
      </Row>
      <Row justify="center" style={{ marginBottom: '3em' }}>
        <Text h1>that get interviews</Text>
      </Row>
      <Row justify="center" style={{ marginBottom: '5em' }}>
        <Text style={{ fontSize: '1.5em', width: '20em' }}>
          Markdown editor that helps
          <br />
          <Text b>
            <Typist
              deletingSpeed={65}
              pauseTime={2000}
              cursorBlinkSpeed={1000}
              typingSpeed={80}
              sentences={[
                'software engineers',
                'full-stack engineers',
                'front-end engineers',
                'developers',
                'back-end engineer',
              ]}
              loop={true}
            />
          </Text>
          <br />
          write resumes that get interviews
        </Text>
      </Row>
      <Row justify="center" style={{ marginBottom: '3em' }}>
        <Link href="/editor">
          <Button icon={<BiPencil />} auto size="large" type="secondary">
            <Text b>Start writing</Text>
          </Button>
        </Link>
      </Row>
    </Layout>
  )
}
