import Head from 'next/head'
import Link from 'next/link'
export default function Category() {
    return (
        <div>
            <Head>
                <title>category</title>
                <meta name="description" content="category" />
            </Head>
            <h1>category</h1>
            <ul>
          <li><Link href="/article">article</Link></li>
        </ul>
        </div>
    )
}