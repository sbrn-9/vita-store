"use client";

import { Card, Button, Group, Text, Image } from "@mantine/core";


export default function TypeProduct(){
    return (

        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                    height={200}
                    width={200}
                    alt="Norway"
                />
            </Card.Section>

        </Card>
    );
}

            