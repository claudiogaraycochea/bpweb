import React from 'react';
import './NextPlayLink.css';
import { Color, Icon } from '../../ui/ui';

function NextPlayLink() {
  return (
    <div className="next-play-link">
      <div><Icon icon='IconNextPlayLink' color={Color.white} size='medium' /></div>
    </div>
  );
}

export default NextPlayLink