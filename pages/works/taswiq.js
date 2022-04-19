import {Container, Badge, Link, List, ListItem, Heading} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta, WorkVideo} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
	<Layout title="Taswiq Stuido">
		<Container>
			<Title>
				Taswiq Studio <Badge>2018-2020</Badge>
			</Title>
			<P>
				This studio was founded in 2018 after we started getting a lot of clients on freelance,
				and most of them were through recommendations from past clients. We had knowledge in design,
				programming and excellent knowledge in marketing, so we emphasized good marketing in the promotion of our company.
				Most of our sales were built on the addition of a service package, which means that when you order a design from us,
				you are more likely to order website development, and then also the marketing strategy and promotion of it.
				For this reason, we had large and good clients who could turn to us for a full package of services.
			</P>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Website</Meta>
					<Link href="https://www.taswiq-studio.com/">
						https://www.taswiq-studio.com/ <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>Next.js, LESS, Python (Django3)</span>
				</ListItem>
			</List>
			<Heading as={'h2'} mb={'10'} mt={'10'}>
				Taswiq Cases
			</Heading>

			<WorkVideo src="/images/works/taswiq/cofix_02.mp4" alt="Cofix" />
			<WorkImage src="/images/works/taswiq/t_krona_02.jpg" alt="Krona" br={""}/>
			<WorkImage src="/images/works/taswiq/t_krona_03.jpg" alt="Krona" br={""}/>
		</Container>
	</Layout>
)

export default Work;