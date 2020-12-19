import React from 'react';
import { EditIcon } from 'evergreen-ui';

import WriteFixButtonWrapper from './styled';
import theme from '@/theme';

interface Props {
  onClick: () => void;
}

const WriteFixButton = ({ onClick }: Props) => (
  <WriteFixButtonWrapper onClick={onClick}>
    <EditIcon color={theme.FIX_INNER} />
  </WriteFixButtonWrapper>
);

export default WriteFixButton;
