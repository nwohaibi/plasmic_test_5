
import Homepage from './components/Homepage';
import GlobalContextsProvider from './components/plasmic/blank_website/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Homepage /></GlobalContextsProvider>);
}

export default App;
  