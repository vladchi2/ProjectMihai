import { useRouter } from 'next/router'
import Head from 'next/head'

let Car= () => {

}

export default Car = ( {car}) => {
    const router = useRouter()
    const { id } = router.query

    return (<>
        <Head>
            <title>fafa {car.color}</title>
        </Head>
        <h1>Hello {id}</h1>
    </>)
}

export async function getStaticProps({params}) {
    const req = await fetch(`http://localhost:3000/lambo.json`)
    const data = await req.json();

    return {
        props: { car: data },
    }
}

export async function getStaticPaths() {
    const req = await fetch(`http://localhost:3000/cars.json`)

}

// export default Car({getStaticProps})

