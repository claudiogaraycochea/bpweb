import React from 'react';
import IconUser from './IconUser';
import IconLogout from './IconLogout';
import Color from '../colors/Colors';

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

  const propColor = (props.color) ? props.color : Color.primary;
  const propSize = getSize(props.size);

  const data = {
    color: propColor,
    size: propSize
  }

  switch (props.icon) {
    case 'IconUser':
      return <IconUser {...data} />
      break;
    case 'IconLogout':
      return <IconLogout {...data} />
      break;
    default:
      return <IconUser {...data} />
      break;
  }

}
