import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View } from 'react-native';

interface CategoryIcons {
  category: string,
  color: string,
  size: number
}

export const CategoryIcons: React.FC<CategoryIcons> = ({ category, color, size }) => {
  return (
    <View>
      {category === 'furniture' ? (
        <MaterialIcons name="chair-alt" size={size} color={color} />
      ) : null}

      {category === 'body' ? (
        <Ionicons name="body" size={size} color={color} />
      ) : null}

      {category === 'electronics' ? (
        <MaterialIcons name="radio" size={size} color={color} />
      ) : null}

      {category === 'kitchen' ? (
        <MaterialIcons name="kitchen" size={size} color={color} />
      ) : null}

      {category === 'textile' ? (
        <MaterialIcons name="dry-cleaning" size={size} color={color} />
      ) : null}

      {category === 'cleaning' ? (
        <MaterialIcons
          name="cleaning-services"
          size={size}
          color={color}
        />
      ) : null}

      {category === 'hobby' ? (
        <MaterialIcons name="sports-tennis" size={size} color={color} />
      ) : null}

      {category === 'indoors' ? (
        <MaterialIcons name="house" size={size} color={color} />
      ) : null}

      {category === 'outdoors' ? (
        <MaterialIcons name="outdoor-grill" size={size} color={color} />
      ) : null}
      {category === 'vermin' ? (
        <MaterialCommunityIcons
          name="bug-outline"
          size={size}
          color={color}
        />
      ) : null}

      {category === 'jewelry' ? (
        <MaterialCommunityIcons
          name="necklace"
          size={size}
          color={color}
        />
      ) : null}
      {category === 'clothes' ? (
        <MaterialCommunityIcons
          name="tshirt-crew-outline"
          size={size}
          color={color}
        />
      ) : null}

      {category === 'animals' ? (
        <MaterialCommunityIcons name="dog" size={size} color={color} />
      ) : null}

      {category === 'bathroom' ? (
        <MaterialCommunityIcons
          name="bathtub-outline"
          size={size}
          color={color}
        />
      ) : null}

      {category === 'christmas' ? (
        <MaterialCommunityIcons
          name="pine-tree"
          size={size}
          color={color}
        />
      ) : null}

      {category === 'sickness' ? (
        <MaterialCommunityIcons
          name="emoticon-sick-outline"
          size={size}
          color={color}
        />
      ) : null}

      {category === 'food' ? (
        <MaterialCommunityIcons
          name="food-outline"
          size={size}
          color={color}
        />
      ) : null}

      {category === 'plants' ? (
        <MaterialCommunityIcons
          name="flower-tulip-outline"
          size={size}
          color={color}
        />
      ) : null}
    </View>
  );
};
