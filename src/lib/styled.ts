import styled, { CreateStyled } from '@emotion/styled';
import theme from '../theme/index';

type Theme = typeof theme;

// 앞으로 사용하는 styled는 모두 여기서 참조
export default styled as CreateStyled<Theme>;
