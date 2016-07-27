import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import setPropTypes from 'recompose/setPropTypes';
import IPropTypes from 'react-immutable-proptypes';
import setDisplayName from 'recompose/setDisplayName';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import { addIngestion } from '../../FoodActions';
import { Map } from 'immutable';

const enhance = compose(
  setDisplayName('FoodPage'),
  onlyUpdateForKeys(['ingestions']),
  setPropTypes({
    ingestions: IPropTypes.list,
    dispatch: PropTypes.func,
  })
);

const FoodPage = enhance(({
  // ingestions,
  dispatch,
}) => (
  <div className="food-page" onClick={() => dispatch(addIngestion(new Map()))}>
    Food page
  </div>
));


const mapStateToProps = state => ({
  ...(state.food.toObject()),
});

export default connect(mapStateToProps)(FoodPage);
