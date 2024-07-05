import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [theme, setTheme] = useState('theme1'); 
  const [records, setRecords] = useState([]);
  const themes = {
    theme1: 'bg-gradient-to-r from-blue-400 to-purple-500',
    theme2: 'bg-gradient-to-r from-green-400 to-blue-500',
    theme3: 'bg-gradient-to-r from-pink-400 to-red-500',
    theme4: 'bg-gradient-to-r from-yellow-300 to-yellow-500',
  };

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const handleReset = () => {
    setRecords((prevRecords) => [...prevRecords, time]);
    setTime(0);
  };

  const handleDelete = (index) => {
    setRecords((prevRecords) => prevRecords.filter((_, i) => i !== index));
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${themes[theme]}`}>
      <div className="relative h-64 w-64 bg-white rounded-full border-8 border-blue-500 flex items-center justify-center">

        <div className="text-2xl font-semibold">
          <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-4">
        {running ? (
          <button
            className="border rounded-lg py-1 px-2 bg-white text-blue-500 hover:bg-blue-100"
            onClick={() => setRunning(false)}
          >
            Stop
          </button>
        ) : (
          <button
            className="border rounded-lg py-1 px-2 bg-white text-blue-500 hover:bg-blue-100"
            onClick={() => setRunning(true)}
          >
            Start
          </button>
        )}
        <button
          className="border rounded-lg py-1 px-2 bg-white text-blue-500 hover:bg-blue-100"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      {/* theme change */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white mb-2">Select Theme:</h3>
        <div className="flex justify-center">
          <button
            className="mx-2 p-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
            onClick={() => handleThemeChange('theme1')}
          />
          <button
            className="mx-2 p-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
            onClick={() => handleThemeChange('theme2')}
          />
          <button
            className="mx-2 p-2 rounded-full bg-gradient-to-r from-pink-400 to-red-500"
            onClick={() => handleThemeChange('theme3')}
          />
          <button
            className="mx-2 p-2 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500"
            onClick={() => handleThemeChange('theme4')}
          />
        </div>
      </div>

      {/* Records Table */}
      {records.length > 0 && (
        <div className="mt-8 w-full max-w-md">
          <h2 className="text-xl font-semibold text-white mb-2">Record Times</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">#</th>
                <th className="py-2 px-4 border-b">Time</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">
                    {('0' + Math.floor((record / 60000) % 60)).slice(-2)}:
                    {('0' + Math.floor((record / 1000) % 60)).slice(-2)}:
                    {('0' + ((record / 10) % 100)).slice(-2)}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="border rounded-lg py-1 px-2 bg-red-500 text-white hover:bg-red-700"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
