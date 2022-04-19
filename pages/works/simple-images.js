import React from 'react';
import Layout from "../../components/layouts/article";
import {Container, Heading, Link, List, ListItem} from "@chakra-ui/react";
import {Meta, Title, WorkVideo} from "../../components/work";
import P from "../../components/paragraph";
import {ExternalLinkIcon} from "@chakra-ui/icons";

const SimpleImages = () => {
	return (
		<Layout title={'BlockImage'}>
			<Container>
				<Title>BlockImages - Social Media NFT Platform</Title>
				<P>
					This project in testing mode, you can upload your photos, delete it, like and subscribe to other users, write comments under they photos.
					In the future we will add Direct Messages, Crypto Wallet, the ability to sell your pictures for the cryptocurrency.
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>
							Website (Test version)
						</Meta>
						<Link href="https://photogallery-bc9d2.web.app/">
							Click Here, it Test mode <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>
							Stack
						</Meta>
						<span>JavaScript, React, Redux, Redux-Thunk, CSS, Firebase, React-icons, 02Auth - firebase</span>
					</ListItem>
				</List>
				<Heading as={"h3"} mb={5} mt={10}>Commenting </Heading>
				<WorkVideo alt={'block_vid'} src={'/images/works/blockImage/comm.mov'} wide={true}/>
			</Container>
		</Layout>
	);
};

export default SimpleImages;