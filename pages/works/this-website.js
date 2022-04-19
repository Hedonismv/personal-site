import React from 'react';
import Layout from "../../components/layouts/article";
import {Container, Link, List, ListItem} from "@chakra-ui/react";
import {Meta, Title} from "../../components/work";
import P from "../../components/paragraph";
import {ExternalLinkIcon} from "@chakra-ui/icons";

const ThisWeb = () => {
	return (
		<Layout title={'My Personal Site'}>
			<Container>
				<Title>My Personal Site</Title>
				<P>
					I made this site to make it easier to collect information about myself.
					To combine most of the projects I like into one section.
					If you want me to work for your company or your team, just contact me and we will definitely discuss it :)
					Or if you are HR and you are here after my resume, then do not hesitate,
					you will not regret to get me on your team )
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="/">
							Homepage <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>React, JavaScript, Next.js, Chakra.UI, React-icons</span>
					</ListItem>
				</List>

			</Container>
		</Layout>
	);
};

export default ThisWeb;