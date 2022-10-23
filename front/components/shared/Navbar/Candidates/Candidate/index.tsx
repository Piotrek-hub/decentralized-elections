import {Avatar, Card, Text, Button} from "@nextui-org/react";
import {ICandidate} from "../../../../../types/types";

export default function Candidate({addr, name, photo}:ICandidate) {
    return (
            <Card variant="bordered" css={{width: '250px'}}>
                <Card.Body>
                    <Avatar
                        src={`https://avatars.dicebear.com/api/adventurer-neutral/${addr}.svg`}
                        size={'lg'}
                        color="primary"
                        bordered
                    />
                    <Text b size={18}>{name}</Text>
                    <Text size={16} css={{lineHeight:'1.2', textAlign: 'justify', py: '5px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>

                </Card.Body>
                <Card.Divider/>
                <Card.Footer>
                    <Button color="primary" css={{width: '100%'}}>Vote</Button>
                </Card.Footer>
            </Card>
    )
}