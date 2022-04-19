import {Container, Box, Heading, Image, useColorModeValue, Link, Button, ListItem, List} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from 'next/link';
import {ChevronRightIcon} from "@chakra-ui/icons";
import {BioSection, BioYear} from "../components/bio";
import Layout from "../components/layouts/article";
import {
	IoLogoGithub,
	IoLogoInstagram,
} from "react-icons/io";
import {FaTelegramPlane} from "react-icons/fa";

import {GiCutDiamond} from "react-icons/gi";
import {MdAlternateEmail} from "react-icons/md";


import useFetch from "../hooks/useFetch";

const Index = () => {

	const {data, loading, error} = useFetch('https://min-api.cryptocompare.com/data/price?fsym=TONCOIN&tsyms=USD' )

	return (
		<Layout>
			<Container>
				<Box
					borderRadius={"lg"}
					bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')}
					p={3}
					mb={6}
					mt={10}
					align={'center'}
				>
					{loading && 'Loading...'}
					{error && error.message}
					{data && <Box display={"flex"} alignItems={"center"} justifyContent={"flex-start"}>
						<GiCutDiamond fontSize={'2rem'} color={'#9ac5db'} style={{marginRight: '1rem'}}/> TON Price: {data.USD.toFixed(2)} $
						</Box> }
				</Box>
				<Box display={{md: 'flex'}}>
					<Box flexGrow={1}>
						<Heading as={'h2'} variant={'page-title'}>
							Vitaly Klyhun
						</Heading>
						<p>Frontend-developer (React / JavaScript / TypeScript) </p>
						<p>NFT / Tokens investor </p>
						<p style={{display: "flex"}}><FaTelegramPlane style={{marginRight: "0.5rem"}} color={'#9ac5db'} fontSize={'1.5rem'}/> Telegram & <GiCutDiamond style={{margin: "0 0.5rem"}} fontSize={'1.5rem'} color={'#9ac5db'}/> TON believer</p>
					</Box>
					<Box
						flexShrink={0}
						mt={{base:4, md:0}}
						ml={{md: 6}}
						align={'center'}
					>
						<Image
							borderColor={"whiteAlpha.800"}
							borderWidth={2}
							borderStyle={"solid"}
							maxWidth={"100px"}
							borderRadius={"50%"}
							display={"inline-block"}
							src={"/images/new-avatar.jpg"}
							alt={'avatar'}
						/>
					</Box>
				</Box>
				<Section delay={0.1}>
					<Heading as={'h3'} variant={"section-title"}>
						Work
					</Heading>
					<Paragraph>
						Still working on it... Click button under then )
					</Paragraph>
					<Box align={'center'} my={4}>
						<NextLink href={'/works'} passHref>
							<Button
								rightIcon={<ChevronRightIcon/>}
								colorScheme={"teal"}>
								My portfolio
							</Button>
						</NextLink>
					</Box>
				</Section>

				<Section delay={0.2}>
					<Heading as="h3" variant="section-title">
						Bio
					</Heading>
					<BioSection>
						<BioYear>1999</BioYear>
						Born in Minsk, Belarus
					</BioSection>
					<BioSection>
						<BioYear>2019</BioYear>
						Completed the BCEUCC&apos;s Program in the Belorussian Commerce Economic University Customer Cooperation as
						a Marketing&Economic Specialist (College program)
					</BioSection>
					<BioSection>
						<BioYear>2018 - 2020</BioYear>
						Was a SEO of Taswiq Studio ( Digital & Event Marketing Agency, web-site designing and development )
					</BioSection>
					<BioSection>
						<BioYear>2019 - 2023</BioYear>
						Studying in BSEU - Belorussian State Economic University as a Marketing&Economic Specialist (Higher Education Program)
					</BioSection>
					<BioSection>
						<BioYear>2021 - present</BioYear>
						Working as a Freelancer
					</BioSection>
				</Section>

				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						My interests
					</Heading>
					<Paragraph>
						Blender Modeling
						, NFT, Crypto-Investing
					</Paragraph>
				</Section>
				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						My socials
					</Heading>
					<List>
						<ListItem>
							<Link href="https://github.com/hedonismv" target="_blank">
								<Button
									variant="ghost"
									colorScheme="teal"
									leftIcon={<IoLogoGithub />}
								>
									@hedonismv
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="https://instagram.com/jrgsisheb" target="_blank">
								<Button
									variant="ghost"
									colorScheme="teal"
									leftIcon={<IoLogoInstagram />}
								>
									@jrgsisheb
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="https://t.me/hedonismv" target="_blank">
								<Button
									variant="ghost"
									colorScheme="teal"
									leftIcon={<FaTelegramPlane/>}
								>
									@hedonismv
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="/">
								<Button
									variant="ghost"
									colorScheme="teal"
									leftIcon={<MdAlternateEmail/>}
								>
									klygun90@gmail.com
								</Button>
							</Link>
						</ListItem>
					</List>
				</Section>
			</Container>
		</Layout>
	);
};

export default Index;