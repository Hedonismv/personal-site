import React from 'react';
import Layout from "../../components/layouts/article";
import {Container, Heading, Link, List, ListItem} from "@chakra-ui/react";
import {Meta, Title, WorkImage} from "../../components/work";
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
				<Heading as={"h3"} mb={5} mt={10}>Like, Subscribe </Heading>
				<WorkImage
					src={'/images/works/blockImage/all_func_sm.gif'}
					alt={'comm_gif'}
				/>

				<Heading as={"h3"} mb={5} mt={10}>Upload & Delete </Heading>
				<WorkImage
					src={'/images/works/blockImage/deleting_uploading_sm.gif'}
					alt={'comm_gif'}
				/>

				<Heading as={"h3"} mb={5} mt={10}>Commenting </Heading>
				<WorkImage
					src={'/images/works/blockImage/comm_sm.gif'}
					alt={'comm_gif'}
				/>
			</Container>
		</Layout>
	);
};

export default SimpleImages;