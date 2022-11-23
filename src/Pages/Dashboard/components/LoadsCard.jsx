import React from 'react'
import CardWithIcon from '../../../components/CardWithIcon/CardWithIcon';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function LoadsCard(props) {
    const {value, to} = props;
  return (
    <CardWithIcon
    to={to}
    icon={LocalShippingIcon}
    title={"Loads"}
    subtitle={value}
/>
  )
}

export default LoadsCard;