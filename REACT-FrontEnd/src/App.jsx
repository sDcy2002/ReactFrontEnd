import Contact from './assets/Contact';
import Hello from './assets/Hello';
import Counter from './assets/Counter';

function App() {
  const helloData = [
    { name: 'Friend', message: 'Hi there' },
    { name: 'Sens', message: 'Hello..' }
  ];

  return (
    <div className='App'>
      < Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="Sendarcy@email.com" phone ="0628423579" />
    </div>
  );
}

export default App;
