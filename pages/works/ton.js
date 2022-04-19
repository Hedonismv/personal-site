import React from 'react';
import Layout from "../../components/layouts/article";
import {Container, Link, List, ListItem} from "@chakra-ui/react";
import {Meta, Title, WorkImage} from "../../components/work";
import P from "../../components/paragraph";
import {ExternalLinkIcon} from "@chakra-ui/icons";

const Ton = () => {
	return (
		<Layout title={'Telegram Open Network'}>
			<Container>
				<Title>
					TON payment system
				</Title>
				<P>
					Telegram Open Network - TON, created an API, which developers can use to creating own payment systems and
					provide Telegram to wide community. In this block i will posting my code and progress of creating this system.
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website TON</Meta>
						<Link href="https://ton.org/">
							https://ton.org/ <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Stack Payment System</Meta>
						<span>React, Redux, JavaScript, TypeScript, Firebase, Chakra/UI</span>
					</ListItem>
				</List>

				<WorkImage src={'/images/works/ton-pay/ton_still.jpg'} alt={'ton'}/>
			</Container>
		</Layout>
	);
};

export default Ton;