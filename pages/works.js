import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Section from "../components/section";
import {WorkGridItem} from "../components/grid-item";
import taswiqThumb from '../public/images/works/taswiq/taswiq-cover.jpg';
import kronaThumb from "../public/images/works/kronaevent/krona-cover.jpg";
import wbsThumb from "../public/images/works/wbs/wbs_01.jpg";
import tonThumb from "../public/images/works/ton-pay/ton_pay.jpeg";
import blockThumb from "../public/images/works/blockImage/block-cover.jpg";
import hedoAgThumb from "../public/images/works/hedoAgency/hedoAg_cover.jpg";
import thisThumb from "../public/images/works/this/this_cover.jpg";
import Layout from "../components/layouts/article";


const Works = () => {
	return (
		<Layout title={'Works'}>
			<Container>
				<Heading as={'h3'} fontSize={20} mb={4}>
					Works
				</Heading>
				<SimpleGrid columns={[1,1,2]} gap={6}>
					<Section>
						<WorkGridItem id={'simple-images'} title={'BlockImage - social media service'} thumbnail={blockThumb}>
							Social Media - in which users can upload ur photo, and sell it for crypto.
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id={'ton'} title={'Telegram Open Network - payment from API (In process)'} thumbnail={tonThumb}>
							Writing TON payment system, using TON API, and integrate it module to HEDO AGENCY web-site.
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id={'taswiq'} title={'Taswiq Studio'} thumbnail={taswiqThumb}>
							My first serious project with its own story
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id={'kronaevent'} title={'Kronaevent - Event agency'} thumbnail={kronaThumb}>
							Website development and design, content and marketing strategy
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id={'wbs'} title={'Webinar Lashes - Marketing site for course sales'} thumbnail={wbsThumb}>
							Bright and beautiful website with information about the upcoming webinar
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id={'hedo-agency'} title={'Hedo Agency - Amazing agency (SOON)'} thumbnail={hedoAgThumb}>
							WEB-SITES, PHONE-APP&apos;S, TELEGRAM WEB-BOTS
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id={'this-website'} title={'This website (If u want see tech stack)'} thumbnail={thisThumb}>
							SPOILER: React, JavaScript -&gt; Click to see more
						</WorkGridItem>
					</Section>
				</SimpleGrid>
			</Container>
		</Layout>
	)
}


export default Works;