import React from 'react';
import IconUser from './IconUser';
import IconLogout from './IconLogout';
import IconClose from './IconClose';
import Color from '../colors/Colors';
import IconRealtime from './IconRealtime';
import IconStyleGuide from './IconStyleGuide';
import IconMenu from './IconMenu';

export default function Icon(props: any) {

  const getSize = (key: string) => {
    switch (key) {
      case 'small':
        return 24
        break;
      case 'medium':
        return 48
        break;
      case 'large':
        return 128
        break;
      default:
        return 32 // normal size
        break;
    }
    return 80;
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
      break;
    case 'IconUser':
      return <IconUser {...data} />
      break;
    case 'IconLogout':
      return <IconLogout {...data} />
      break;
    case 'IconRealtime':
      return <IconRealtime {...data} />
      break;
    case 'IconStyleGuide':
      return <IconStyleGuide {...data} />
      break;
    case 'IconMenu':
      return <IconMenu {...data} />
      break;
    default:
      return <IconUser {...data} />
      break;
  }

}
