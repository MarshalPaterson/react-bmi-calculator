import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16
  }
};

const RadioButtonGroups = () => (
  <div>
    <RadioButtonGroup name="shipSpeed" defaultSelected="0">
      <RadioButton
        value="0"
        label="Female"
        style={styles.radioButton}
      />
      <RadioButton
        value="1"
        label="Male"
        style={styles.radioButton}
      />
    </RadioButtonGroup>
  </div>
);

export default RadioButtonGroups;