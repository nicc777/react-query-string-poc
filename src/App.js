import React from 'react';
import useQueryParam from './useQueryParam';


function App() {
  const [target, setTarget] = useQueryParam('target', '/');

  return (
    <React.Fragment>
      <p>The requested target: {target}</p>
    </React.Fragment>
  );
}

export default App;
