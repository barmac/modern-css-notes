import Modeler from 'dmn-js/lib/Modeler';
import diagram from 'bundle-text:./performance.dmn';

import './styles.css';

const modeler = new Modeler({
  container: '#container'
});

modeler.importXML(diagram).then(console.log).catch(console.error);
