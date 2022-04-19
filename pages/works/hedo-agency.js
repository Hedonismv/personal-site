import React from 'react';
import Layout from "../../components/layouts/article";
import {Container, Link, List, ListItem} from "@chakra-ui/react";
import {Meta, Title, WorkImage} from "../../components/work";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import P from "../../components/paragraph";

const HedoAgency = () => {
	return (
		<Layout>
			<Container>
				<Title>Hedo Agency Web-Site</Title>
				<P>A studio that can develop stylish and high-quality websites for you.
					Also telegram bots on the new API with new functionality</P>
				<List my={4} ml={4}>
					<ListItem>
						<Meta>Website (in Process)</Meta>
						<Link href="#" target={'_blank'}>
							We are working on it <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>React, TypeScript, JavaScript, Firebase, Redux, Next.js</span>
					</ListItem>
				</List>

				<WorkImage src={'/images/works/hedoAgency/hedo_proc.jpg'} alt={'hedo'}/>
			</Container>
		</Layout>
	);
};

export default HedoAgency;