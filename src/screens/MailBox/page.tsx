import React from 'react';
import { color } from '@sinabro/design-token';
import { IconMailBox } from '@sinabro/icon';
import { Calender, Column } from '@sinabro/ui';
import { flex } from '@sinabro/util';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { Header } from 'components/common';

const MailBoxPage = () => {
  return (
    <StyledMailBoxPage colors={[color.sinabroBlue, color.sinabroSkyBlue]}>
      <Header title="우편함" option="MAIL" />
      <ContentContainer>
        <Column alignItems="center" gap={15}>
          <IconMailBox width={144} height={135} />
          <Calender />
        </Column>
      </ContentContainer>
    </StyledMailBoxPage>
  );
};

export default MailBoxPage;

const StyledMailBoxPage = styled(LinearGradient)`
  flex: 1;
`;

const ContentContainer = styled.View`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 100%;
  top: 147px;
  bottom: 66px;
`;
