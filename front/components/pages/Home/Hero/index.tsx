import { Button, Container, Grid, Text, Card, Row } from '@nextui-org/react';
import Image from 'next/image';

export default function Hero() {
	return (
		<Grid.Container justify="center" css={{ mt: 40 }}>
			<Grid xs={6}>
				<Image src={'/assets/vote.gif'} width={900} height={675} />
			</Grid>
			<Grid
				xs={6}
				css={{
					display: 'grid',
					placeItems: 'center',
				}}
			>
				<Container>
					<Card
						css={{
							$$cardColor: '$colors$primary',
							width: '60%',
							my: 10,
						}}
					>
						<Card.Body>
							<Row justify="center" align="center">
								<Text h6 size={15} color="white" css={{ m: 0 }}>
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Quod vero quibusdam iusto
									assumenda delectus fuga illum et.
									Voluptatem, recusandae illo.
								</Text>
							</Row>
						</Card.Body>
					</Card>
					<Button flat>Connect to Metamask to continue!</Button>
				</Container>
			</Grid>
		</Grid.Container>
	);
}
