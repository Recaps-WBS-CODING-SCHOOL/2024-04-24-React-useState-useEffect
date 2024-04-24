import { useState } from 'react';
import './App.css';
import EffectExample from './EffectExample';
import { useEffect } from 'react';

function App() {
  // let firstName = 'Garrett';
  const [toggle, setToggle] = useState(false);

  const [firstName, setFirstName] = useState('Garrett');

  const [hue, setHue] = useState(142);

  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });

  const fullName = formData.firstName + ' ' + formData.lastName;

  // useEffect(() => {
  //   // setFullname();
  // }, [formData.firstName, formData.lastName]);

  const randomizeColor = () => {
    const randNum = Math.floor(Math.random() * 360);
    setHue(randNum);
  };

  const handleFormChange = (e) => {
    console.log(e.target.value);
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
  };

  return (
    <div className='body' style={{ backgroundColor: `oklch(50%, 0.6, ${hue})` }}>
      <h1>useState & useEffect</h1>
      <div className='card'>
        <p>Full Name: {formData.firstName + ' ' + formData.lastName}</p>

        <button
          onClick={() => {
            setFirstName('Thomas');
          }}
        >
          Change Name to Thomas
        </button>
      </div>
      <div className='card'>
        <button onClick={randomizeColor}>Random Color</button>
      </div>

      <div className='card'>
        <form>
          <label>
            First Name
            <input type='text' name='firstName' value={formData.firstName} onChange={handleFormChange} />
          </label>
          <br />
          <label>
            Last Name
            <input type='text' name='lastName' value={formData.lastName} onChange={handleFormChange} />
          </label>
          <br />
          <label>
            Email
            <input type='email' name='email' value={formData.email} onChange={handleFormChange} />
          </label>
          <br />
        </form>
      </div>

      <button onClick={() => setToggle((p) => !p)}>Mount Example</button>
      {toggle && <EffectExample />}
    </div>
  );
}

export default App;
