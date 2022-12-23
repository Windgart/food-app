import { Flex, Card, Image, Text, Group, Badge, Button, Rating } from '@mantine/core';
import { IconHeart } from '@tabler/icons';
import { v4 as UUID } from 'uuid';

function RecipeCard({ image, title, categories, rating }: MealModel) {
  return (
    <Card bg='gray.0' shadow='sm' p='lg' radius='md'>
      <Card.Section>
        <Image height={170} src={image} alt={title} />
      </Card.Section>
      <Group position='apart' mt='md' mb='xs'>
        <Text h={50} color='base.5' sx={{ fontFamily: 'Oswald', fontWeight: 700, fontSize: 21 }}>
          {title}
        </Text>
        <Rating readOnly value={rating} fractions={10} />
        <Flex direction='row' wrap='wrap'>
          {categories.length ? (
            categories.map((category) => (
              <Badge color='green' m={1} key={UUID()}>
                <Text size={8}>{category}</Text>
              </Badge>
            ))
          ) : (
            <Badge>
              <Text size={8}>no categories</Text>
            </Badge>
          )}
        </Flex>
        <Flex w='100%' direction='row' justify='space-between' align='center'>
          <Button fullWidth radius='xl' color='base.1' mr={6}>
            Add to cart
          </Button>
          <IconHeart size={25} />
        </Flex>
      </Group>
    </Card>
  );
}

export default RecipeCard;
