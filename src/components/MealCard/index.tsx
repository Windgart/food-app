import { Flex, Card, Image, Text, Group, Badge, Button, Container } from '@mantine/core';
import { IconHeart } from '@tabler/icons';
import { v4 as UUID } from 'uuid';

interface RecipeCardProps {
  image: string;
  title: string;
  categories: string[];
}

function RecipeCard({ image, title, categories }: RecipeCardProps) {
  return (
    <Card shadow='sm' p='lg' radius='md' withBorder>
      <Card.Section>
        <Image height={170} src={image} alt={title} />
      </Card.Section>
      <Group position='apart' mt='md' mb='xs'>
        <Text sx={{ fontFamily: 'Oswald', fontWeight: 700, fontSize: 18 }}>{title}</Text>
        <IconHeart size={18} />
        <Flex direction='row' wrap='wrap'>
          {categories.length ? (
            categories.map((category) => (
              <Badge color='green' m={3} key={UUID()}>
                <Text size={8}>{category}</Text>
              </Badge>
            ))
          ) : (
            <Badge>
              <Text size={8}>no categories</Text>
            </Badge>
          )}
        </Flex>
        <Button fullWidth radius='xl' color='base.1'>
          Add to cart
        </Button>
      </Group>
    </Card>
  );
}

export default RecipeCard;
