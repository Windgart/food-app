import {
  Flex,
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  Rating,
  useMantineTheme,
  ActionIcon,
} from '@mantine/core';
import { IconHeart } from '@tabler/icons';
import { v4 as UUID } from 'uuid';

interface MealCardProps extends MealModel {
  onAddToCart: ActionWithIdSignature;
  onClickFavorite: ActionWithIdSignature;
  alreadyOnCart: boolean;
}

function RecipeCard({
  image,
  title,
  categories,
  rating,
  isFavorite,
  onAddToCart,
  id,
  alreadyOnCart,
  onClickFavorite,
}: MealCardProps) {
  const { colors } = useMantineTheme();

  const handleAddToCart = () => onAddToCart(id);
  const handleClickFavorites = () => onClickFavorite(id);

  return (
    <Card bg='gray.0' shadow='sm' p='lg' radius='md'>
      <Card.Section>
        <Image height={170} src={image} alt={title} />
      </Card.Section>
      <Group position='apart' mt='md' mb='xs'>
        <Text h={50} color='base.5' size={21} weight={700} ff='Oswald'>
          {title}
        </Text>
        <Rating w='100%' readOnly value={rating} fractions={10} />
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
          <Button onClick={handleAddToCart} fullWidth radius='xl' color='base.1' mr={6}>
            {alreadyOnCart ? 'Remove from cart' : 'Add to cart'}
          </Button>
          <ActionIcon onClick={handleClickFavorites} variant='transparent'>
            <IconHeart
              color={colors.base[0]}
              fill={isFavorite ? colors.base[0] : 'transparent'}
              size={25}
            />
          </ActionIcon>
        </Flex>
      </Group>
    </Card>
  );
}

export default RecipeCard;
