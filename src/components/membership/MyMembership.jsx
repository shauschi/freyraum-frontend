'use strict';
import React, {Component} from 'react';
import compose from 'recompose/compose';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {findById} from './../../utils/RamdaUtils';
import {DATE_FORMAT} from './../../utils/Format';
import IconBatteryFull from '@material-ui/icons/BatteryFull';
import IconBatteryHigh from '@material-ui/icons/Battery90';
import IconBatteryMid from '@material-ui/icons/Battery50';
import IconBatteryLow from '@material-ui/icons/Battery20';
import IconGift from '@material-ui/icons/CardGiftcard';
import IconHeart from '@material-ui/icons/Favorite';
import {green, red, yellow} from '@material-ui/core/colors';
import {PRIMARY, SECONDARY} from './../../theme';
import moment from 'moment';

export const getMembershipIcon = key => getIcon(100, 0, key);

export const getIcon = (maxParticipations, participations, key) => {
  if (key === undefined || key === null) {
    return key;
  }

  const style = {marginRight: '0px'};
  if (key === 'TRIAL') {
    return <IconGift size={24} style={{color: SECONDARY, ...style}}/>;
  } else if (key === 'SUBSCRIPTION') {
    return <IconHeart size={24} style={{color: PRIMARY, ...style}}/>;
  }

  const p = participations / maxParticipations;
  if (p > 0.75) {
    return <IconBatteryLow size={24} style={{color: red.A200, ...style}}/>
  } else if (p > 0.5) {
    return <IconBatteryMid size={24} style={{color: yellow.A200, ...style}}/>
  } else if (p > 0.25) {
    return <IconBatteryHigh size={24} style={{color: green.A200, ...style}}/>
  } else {
    return <IconBatteryFull size={24} style={{color: green.A200, ...style}}/>
  }
};

const geParticipationtText = (maxParticipations, participations, key) => {
  if (key === 'SUBSCRIPTION') {
    return "Du hast dich bisher für " + participations + " Kurse angemeldet";
  }
  return maxParticipations - participations + " von " + maxParticipations + " frei";
};

const getValidityText = validity => {
  const from = moment(validity.from).format(DATE_FORMAT);
  const to = validity.to ? moment(validity.to).format(DATE_FORMAT) : "unbestimmt";
  return "Gültigkeit: " + from + " - " + to;
};

class MyMembership extends Component {

  render() {
    const {membership, membershipTypes} = this.props;
    const {participationCount, validity} = membership;
    const {
      key,
      name,
      maxParticipations
    } = findById(membershipTypes.data, membership.membershipTypeId) || {};

    const icon = getIcon(maxParticipations, participationCount, key);

    return (
      <ListItem
        button
        onClick={() => {}}>
        {
          icon
          ? <ListItemIcon>
              {icon}
            </ListItemIcon>
          : undefined
        }
        <div style={{flex: '1 1 auto', padding: '0 16px', minWidth: '0'}}>
          <Typography variant='subtitle1'>{name}</Typography>
          <Typography variant='caption'>{geParticipationtText(maxParticipations, participationCount, key)}</Typography>
          <Typography variant='caption'>{getValidityText(validity)}</Typography>
        </div>
      </ListItem>
    );
  };
}

const mapStateToProps = state => ({
  membershipTypes: state.membershipTypes,
});

export default compose(
  connect(mapStateToProps)
)(MyMembership);