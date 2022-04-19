import React from 'react';
import Layout from "../../components/layouts/article";
import {Container, Link, List, ListItem} from "@chakra-ui/react";
import {Meta, Title, WorkImage} from "../../components/work";
import P from "../../components/paragraph";
import {ExternalLinkIcon} from "@chakra-ui/icons";

const Kronaevent = () => {
	return (
		<Layout title={'Kronaevent'}>
			<Container>
				<Title>Kronaevent</Title>
				<P>
					Kronaevent - event agency with a loud name, it has a lot famous and prestige clients like a Tut.by,
					Specific-Group, Sellwin, Polimaster and other.
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://www.kronaevent.by/">
							https://www.kronaevent.by/ <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>JavaScript, HTML, CSS, JQUERY, PHP</span>
					</ListItem>
				</List>

				<WorkImage src="/images/works/kronaevent/krona-cover.jpg" alt="Kronaevent" />
				<WorkImage src="/images/works/kronaevent/krona_01.jpg" alt="Kronaevent" />
				<WorkImage src="/images/works/kronaevent/krona_02.jpg" alt="Kronaevent" />
				<WorkImage src="/images/works/kronaevent/krona_03.jpg" alt="Kronaevent" />
				<WorkImage src="/images/works/kronaevent/krona_04.jpg" alt="Kronaevent" />
				<WorkImage src="/images/works/kronaevent/krona_05.jpg" alt="Kronaevent" />
			</Container>
		</Layout>
	);
};

export default Kronaevent;