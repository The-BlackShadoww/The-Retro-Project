import React from "react";
import { Button, Card, Container, Heading, Text } from "@radix-ui/themes";

const Exmple = () => {
    return (
        <Container size="4">
            <h1 className="text-red-500 font-bold text-2xl">
                This Tailwind heading1
            </h1>
            <h1> This Tailwind heading 2</h1>
            <Heading mt="5" size="6">
                This is Radix Heading
            </Heading>
            <Heading size="6" className="text-purple-900">
                This is Radix Heading with Tailwind classes
            </Heading>
            <Text size="2" className="text-teal-700 leading-normal">
                This is some text from radix ui. This is some text from radix ui
                . This is some text from radix ui . This is some text from radix
                ui This is some text from radix ui
            </Text>
            <p className="leading-8">
                {" "}
                This is some text from radix ui. This is some text from radix ui
                . This is some text from radix ui . This is some text from radix
                ui This is some text from radix ui
            </p>
            <Card mt="5" style={{ maxWidth: 250 }}>
                <Heading>This is card</Heading>
                This is some text from radix ui. This is some text from radix ui
                . This is some text from radix ui . This is some text from radix
                ui This is some text from radix ui
                <Button color="cyan" variant="surface"> Button</Button>
            </Card>
        </Container>
    );
};

export default Exmple;
