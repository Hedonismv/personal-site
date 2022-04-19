import NextLink from 'next/link'
import {Heading, Box, Image, Link, Badge, AspectRatio} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
	<Box>
		<NextLink href="/works">
			<Link>Works</Link>
		</NextLink>
		<span>
      {' '}
			<ChevronRightIcon />{' '}
    </span>
		<Heading display="inline-block" as="h3" fontSize={20} mb={4}>
			{children}
		</Heading>
	</Box>
)

export const WorkImage = ({ src, alt, br = "lg" }) => (
	<Image borderRadius={br} w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
	<Badge colorScheme="green" mr={2}>
		{children}
	</Badge>
)

export const WorkVideo = ({ src, alt, loop=true, muted=true, autoPlay=true, wide=false}) => {
	return (
		<AspectRatio ratio={wide ? 16/9 : 9/16} mb={'5'}>
			<video
				title={alt}
				autoPlay={autoPlay}
				loop={loop}
				muted={muted}
			>
				<source src={src} type={'video/mp4'}/>
			</video>
		</AspectRatio>
	)
}