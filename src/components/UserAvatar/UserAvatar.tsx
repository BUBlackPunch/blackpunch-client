/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { UserIcon } from 'evergreen-ui';

interface Props {
  image?: string;
  size?: number;
  color?: string;
}
const UserAvatar = ({ image, size = 30 }: Props): JSX.Element => {
  return (
    <div
      css={css`
        &,
        & > img {
          display: inline-block;
          width: ${size};
          height: ${size};
          background-color: #ddd;
          border-radius: 50%;
        }
      `}
    >
      {image ? <img src={image} alt="profile" /> : <UserIcon size={size} color="muted" fill={'#ddd'} />}
    </div>
  );
};
export default UserAvatar;
