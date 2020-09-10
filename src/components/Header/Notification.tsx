import React from 'react';
import { NotificationsIcon, Button } from 'evergreen-ui';

function Notification() {
  return (
    <Button appearance="minimal" intent="none" marginLeft="auto">
      <NotificationsIcon size={20} color="white" marginRight="1em" />
    </Button>
  );
}
export default Notification;
