import Head from "next/head";
import NavBar from "../navbar";
import {Box, Container} from "@chakra-ui/react";
import Footer from "../footer";


//Main contains in self info about (meta) - (content) - and structure of prod (navBar, Cont, Footer, children)
const Main = ({children, router}) => {
	return (
		<Box as={"main"} pb={8}>
			<Head>
				<meta name="description" content="Vitaly's website" />
				<meta name="author" content="Vitaly Klyhun" />
				<meta name="author" content="hedonismv" />
				<meta name="author" content="hedo agency" />
				<meta name={'viewport'} content={"width=device-width, initial-scale=1"}/>
				<title>Vitaly Klyhun - Homepage</title>
			</Head>
			<NavBar path={router.asPath}/>
			<Container maxW={"container.md"} pt={14}>
				{/*<NoSsr>*/}
				{/*	<VoxelObj/>*/}
				{/*</NoSsr>*/}
				{children}
				<Footer/>
			</Container>
		</Box>
	)
}

export default Main;