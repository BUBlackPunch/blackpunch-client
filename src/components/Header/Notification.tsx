/** @jsx jsx */
import React from 'react';
import { NotificationsIcon, NotificationsUpdatedIcon, Button, Popover, Table } from 'evergreen-ui';
import { NotiProps } from './index';
import { jsx, css } from '@emotion/core';

const NotificationTable: React.SFC<NotiProps> = ({ data }: NotiProps) => {
  const count = data.filter((_d) => _d.isRead === true).length;
  return (
    <div
      css={css`
        & {
          width: 348px;
          height: 280px;
          padding: 0.3rem 0.3rem 0 0;
          justify-content: center;
          justify-items: center;
          text-justify: center;
        }
        & > p {
          font-size: 13px;
          text-align: center;
        }
      `}
    >
      <p> 총 {count}개의 새로운 알림이 있습니다.</p>
      <Table.Body height={250} marginTop="10px">
        {data.map((_d) => (
          <Table.Row intent={_d.isRead ? 'none' : 'success'} key={_d.key} isSelectable onSelect={() => alert(_d.link)}>
            <Table.Cell flexBasis={150} fontSize="12px">
              {_d.text}
            </Table.Cell>
            <Table.Cell fontSize="10px">{_d.date}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </div>
  );
};

function Notification(prop: NotiProps) {
  const { data } = prop;
  const count = data.filter((_d) => _d.isRead === true).length;
  return (
    <Popover content={<NotificationTable data={data} />}>
      <Button appearance="minimal" width="22" justifyContent="center" intent="none" marginLeft="auto">
        {count ? (
          <NotificationsUpdatedIcon size={20} color="white" marginRight="1em" />
        ) : (
          <NotificationsIcon size={20} color="white" marginRight="1em" />
        )}
      </Button>
    </Popover>
  );
}

Notification.defaultProps = {
  data: [
    { isRead: false, text: 'hola!', date: '10minutes ago', key: 3, link: 'https://www.naver.com' },
    { isRead: true, text: 'byebye!', date: '9minutes ago', key: 4, link: 'https://www.google.com' },
  ],
};
export default Notification;

class Noti extends React.PureComponent {}
