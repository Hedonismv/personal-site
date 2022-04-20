import React from 'react';
import Layout from "../../components/layouts/article";
import {Container, Link, List, ListItem} from "@chakra-ui/react";
import {Meta, Title, WorkImage} from "../../components/work";
import P from "../../components/paragraph";
import {ExternalLinkIcon} from "@chakra-ui/icons";

const Wbs = () => {
	return (
		<Layout title={'Webinar Lashes'}>
			<Container>
				<Title>Webinar by Yulia Vorman</Title>
				<P>
					Sales Page to webinar \--_--/
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://www.yuliya_vorman.ru/">
							https://www.yulia_vorman.ru/ <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>React, HTML, Styled-Components, JavaScript, CSS</span>
					</ListItem>
				</List>

				<WorkImage src="/images/works/wbs/wbs_01.jpg" alt="wbs" />
				<WorkImage src={'/images/works/wbs/screen.gif'} alt={'wbs'}/>
				<WorkImage src="/images/works/wbs/wbs_03.jpg" alt="wbs" />
				<WorkImage src="/images/works/wbs/wbs_04.jpg" alt="wbs" />
			</Container>
		</Layout>
	);
};

export default Wbs;