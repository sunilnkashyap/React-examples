import logo from './logo.svg';
import styles from './app.scss';
import { TestComponent } from './components/TestComponent'

function App() {
  return (
    <div className="App">
      <h1 className={styles.AppLink}>Header</h1>

      <h1>Content</h1>

      <h1>footer</h1>
    </div>
  );
}

export default App;
