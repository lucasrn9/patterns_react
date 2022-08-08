import React from 'react'
import './App.css'
// import Button from './components/HOC/Button';
// import Title from './components/HOC/Title';

// import ToggleRender from './components/RenderProp/ToggleRender';
// import Button from './components/RenderProp/Button';
// import Title from './components/RenderProp/Title';

// import Button from './components/Hooks/Button';
// import Title from './components/Hooks/Title';

import ClickCounter from './components/HOC/counter/ClickCounter'
import HoverCounter from './components/HOC/counter/HoverCounter'

function App() {
  return (
    <div className="App">
      <h1>Reutilize logic and variables/state values</h1>
      <p>
        Those patterns should be used when 2 or more components with different
        'views', reutilize the same 'logic'. HOC and Render props are used in
        dumb components, when you want components to receive props
      </p>
      <p>
        view = the returned jsx, the visual part of the component, the return
      </p>
      <p>logic = 'logic... :)'</p>
      {/* <Button />
      <Title /> */}

      {/* <ToggleRender render={(isOpen,toggle)=><Button isOpen={isOpen} toggle={toggle} />} />
      <ToggleRender render={(isOpen,toggle)=><Title isOpen={isOpen} toggle={toggle} />} /> */}
      {/* <Button />
  <Title /> */}
      <ClickCounter />
      <HoverCounter />
    </div>
  )
}

export default App
