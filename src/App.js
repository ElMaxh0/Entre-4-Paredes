
import { Footer } from './view/components/Footer/footer';
import { Menu } from './view/components/menu/menu';
import Mergulharte from './view/idea/mergulharte/mergulharteApp';
import Room from './view/idea/mergulharte/mergulharteApp_home';
import ControlersApp from './view/controlers';
function App() {
  return (
      <div>
        <div>
          <Menu/>
          <Room/>
          <ControlersApp />
        </div>
      </div>
  );
  
}

export default App;
