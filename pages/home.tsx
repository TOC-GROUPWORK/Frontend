import { Link, Typography } from "@mui/material"

const Home = () => {

    return (
        <>
            <Typography variant="h1">Home Screen</Typography>
            <Typography>Go learn <Link href="https://nextjs.org/docs/getting-started" target="_blank">Next.js</Link> and <Link href="https://mui.com/getting-started/installation/" target="_blank">MUI</Link></Typography>
        </>
    )
}

export default Home;