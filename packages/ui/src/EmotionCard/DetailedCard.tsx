import { color } from '@sinabro/design-token';
import { ReactNode, useState } from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import CustomText from '../Text/Text';
import { calculateWidth } from '@sinabro/util';

interface Props {
  onPress: () => void;
  children: ReactNode;
  isFocused: boolean;
}

const DetailedCard = ({ onPress, children }: Omit<Props, 'isFocused'>) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handlePress = () => {
    setIsFocused(!isFocused);
    onPress();
  };

  return (
    <StyledDetailedCard onPress={handlePress} isFocused={isFocused}>
      <CustomText fontType="B4" color={isFocused ? color.gray900 : color.white100}>
        {children}
      </CustomText>
    </StyledDetailedCard>
  );
};

export default DetailedCard;

const StyledDetailedCard = styled(Pressable)<{ isFocused: boolean }>`
  width: ${calculateWidth(159)}px;
  height: 64px;
  background-color: ${({ isFocused }: Props) =>
    isFocused ? color.white80 : color.glassWhite};
  border: 1px solid ${color.glassStroke};
  border-radius: 12px;
  padding-left: ${calculateWidth(16)}px;
  align-items: flex-start;
  justify-content: center;
`;
