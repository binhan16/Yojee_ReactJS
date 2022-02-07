import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Because bootstrap.min.css has thousands class, we not use all of them
// so working with scss help us import used modules easier
// => remove this
// import 'bootstrap/dist/css/bootstrap.min.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(<App />, document.getElementById('root')
);
