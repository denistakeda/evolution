import React from 'react';
import { connect } from 'react-redux';

const FoodPage = () => {
  return <div>Success!!</div>;
};


const mapStateToProps = state => ({
  food: state.food,
});

export default connect(mapStateToProps)(FoodPage);
