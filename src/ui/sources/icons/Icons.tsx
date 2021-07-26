import React from 'react';
import IconUser from './IconUser';
import IconLogout from './IconLogout';
import IconClose from './IconClose';
import IconRealtime from './IconRealtime';
import IconStyleGuide from './IconStyleGuide';
import IconMenu from './IconMenu';
import IconNextPlayLink from './IconNextPlayLink';
import Color from '../colors/Colors';

export default function Icon(props: any) {

  const getSize = (key: string) => {
    switch (key) {
      case 'small':
        return 24;
      case 'medium':
        return 48;
      case 'large':
        return 128;
      default:
        return 32; // normal size
    }
  }

  const propColor = (props.color) ? props.color : Color.text;
  const propSize = getSize(props.size);

  const data = {
    color: propColor,
    size: propSize
  }

  switch (props.icon) {
    case 'IconClose':
      return <IconClose {...data} />
    case 'IconUser':
      return <IconUser {...data} />
    case 'IconLogout':
      return <IconLogout {...data} />
    case 'IconRealtime':
      return <IconRealtime {...data} />
    case 'IconStyleGuide':
      return <IconStyleGuide {...data} />
    case 'IconMenu':
      return <IconMenu {...data} />
    case 'IconNextPlayLink':
      return <IconNextPlayLink {...data} />
    default:
      return <IconUser {...data} />
  }

}
