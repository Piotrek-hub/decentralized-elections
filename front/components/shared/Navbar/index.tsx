import { Button, Navbar, Text, Tooltip } from '@nextui-org/react';
import { useState } from 'react';

export default function Nav() {
	const [isConnected, setIsConnected] = useState<boolean>(false);

	return (
		<Navbar variant={'sticky'}>
			<Navbar.Brand>
				<Text
					css={{
						fontFamily: 'JetBrains Mono',
						fontSize: '22px',
						fontWeight: '600',
					}}
				>
					Decentralized Elections
				</Text>
			</Navbar.Brand>
			<Navbar.Content enableCursorHighlight>
				<Navbar.Link>How To</Navbar.Link>
				<Navbar.Link>Candidates</Navbar.Link>
				<Navbar.Link>About</Navbar.Link>
			</Navbar.Content>
			<Navbar.Content>
				<Navbar.Item>
					<Tooltip content={'Disconnect Metamask'}>
						<Button
							color="primary"
							shadow={!isConnected}
							bordered={isConnected}
							onClick={() =>
								setIsConnected((isConnected) => !isConnected)
							}
						>
							{isConnected
								? 'Metamask connected'
								: 'Connect To Metamask'}
						</Button>
					</Tooltip>
				</Navbar.Item>
				{/* <Navbar.Item>
					<Button auto icon={<MdDarkMode fill="white" />} />
				</Navbar.Item> */}
			</Navbar.Content>
		</Navbar>
	);
}
