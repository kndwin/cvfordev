import Head from 'next/head'
import { AutoComplete, Row, Button, Text, Link } from '@geist-ui/react'
import { templateOptions } from 'lib'
import { Suspense, useEffect, useState } from 'react'
import utils from 'styles/utils.module.scss'
import useMarkdownStore from 'store/markdownStore'
import { useReactToPrint } from 'react-to-print'
import { Canvas } from '@react-three/fiber'
import { Model } from 'components'

type LayoutProps = {
  children: React.ReactNode
  fullScreen?: boolean
}

export default function Layout({
  children,
  fullScreen = false,
}: LayoutProps): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false)
  const [options, setOptions] = useState([])
  const { setText, printRef } = useMarkdownStore()

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const allOptions = templateOptions.map(({ label }) => {
    return {
      label: label,
      value: label,
    }
  })
  const searchHandler = (currentValue: string) => {
    if (!currentValue) {
      setOptions(allOptions)
    } else {
      const relatedOptions = allOptions.filter((item) =>
        item.label.includes(currentValue)
      )
      setOptions(relatedOptions)
    }
  }

  const selectedOption = (value: string) => {
    const { content } = templateOptions.filter(
      (template) => template.label == value
    )[0]
    setText(content)
  }

  return (
    <div className={`${utils.layoutContainer}`}>
      <div
        className={`${utils.layout} ${fullScreen && utils.layoutFullscreen}`}
      >
        <Head>
          <title>resumes for dev</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="Resumes builder for developers" />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content="Resumes for dev" />
          <meta
            property="og:description"
            content="Resumes builder for developers"
          />
          <meta property="og:url" content="https://kndwin.dev/" />
          <meta property="og:type" content="website" />
        </Head>

        <header className="noPrintArea">
          {fullScreen && (
            <Row
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Link href="/">
                <Text
                  b
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Canvas
                    style={{ height: '2em', width: '3em' }}
                    orthographic
                    camera={{ zoom: 2 }}
                  >
                    <ambientLight intensity={1} />
                    <Suspense fallback={null}>
                      <Model />
                    </Suspense>
                  </Canvas>
                  resumesfor.dev
                </Text>
              </Link>
              <AutoComplete
                clearable
                size="large"
                type="secondary"
                options={options}
                onSearch={(e) => searchHandler(e)}
                onSelect={(e) => selectedOption(e)}
                placeholder="Search for resume template"
              />
              <Button type="secondary" auto onClick={() => handlePrint()}>
                <Text b>Print</Text>
              </Button>
            </Row>
          )}
        </header>
        <main>{children}</main>
        <footer className={fullScreen && utils.displayNone}>
          <Text b>
            coded with 🖤 by{' '}
            <Link color href="https://kndwin.dev">
              kndwin
            </Link>
          </Text>
        </footer>
      </div>
    </div>
  )
}
