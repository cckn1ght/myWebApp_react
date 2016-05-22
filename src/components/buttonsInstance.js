import { Button } from 'react-bootstrap';
import React from 'react';

const buttonsInstance = (
  <Button bsStyle="primary">Primary</Button>
);


var BsButton = React.createClass({
  render: function() {
    // buttonsInstance;
    return (
      // <div>buttonsInstance </div>
      buttonsInstance
    );
  }
});

// module.exports = buttonsInstance;

module.exports = BsButton;
