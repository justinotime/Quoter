import React from 'react';
import { useState, useEffect } from 'react';
import { Sliders } from 'react-feather';
import './index.css';
import './App.css';
import './darkMode.css'
import Header from './Components/Header';
import About from './Components/About';
import Alert from './Components/Alert';
import OptionsButtons from './Components/OptionsButtons';
import WordDetails from './Components/WordDetails';

function App() 
{ 
  const options = {
    method: 'GET',
    headers: { 
    'X-RapidAPI-Key': '5d9799702dmsh7bda659b7643479p1f377ejsn1aae24bf36c5',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
  };

  const [searchQuery, setSearchQuery] = useState('') 
  const [searchParameter, setSearchParameter] = useState('definitions')
  const [data, setData] = useState('')
  const [word, setWord] = useState('')
  const [wordDetails, setWordDetails] = useState(false)

  const [definitions, setDefinitions] = useState('')
  const [examples, setExamples] = useState('')
  const [rhymes, setRhymes] = useState('')
  const [synonyms, setSynonyms] = useState('')
  const [antonyms, setAntonyms] = useState('')
  const [syllables, setSyllables] = useState('')
  const [frequency, setFrequency] = useState('')
  const [pronunciation, setPronunciation] = useState('')

  const searchDifferentOption = (parameter) => {
    setSearchParameter(parameter)
  }

  useEffect(() => {
    fetchWord()
  }, [searchParameter])

  const url = 'https://wordsapiv1.p.rapidapi.com/words/' + searchQuery + '/' + searchParameter

  const [alert, setAlert] = useState(false)
  const [settings, setSettings] = useState(false)

  const closeWordDetails = () => setWordDetails(false)
  const showSettingsPanel = () => {
    setSettings(!settings)
  }

  const fetchWord = () => {
    if (searchQuery.length < 1) {
      setAlert(true)
      setTimeout(() => {setAlert(false)}, 3000)
    } else {
      fetch(url, options)
      .then (response => response.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
      setWordDetails(true)
    }
  }

  useEffect(() => {
    setWord(data.word)
    setDefinitions(data.definitions)
    setExamples(data.examples) 
    setRhymes(data.rhymes)
    setSynonyms(data.synonyms)
    setAntonyms(data.antonyms)
    setSyllables(data.syllables)
    setFrequency(data.frequency)
    setPronunciation(data.pronunciation)
  }, [data])

  const [about, setAbout] = useState(false)
  const [showAboutSection] = () => setAbout(true)
  const [hideAboutSection] = () => setAbout(false)

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  const setThemeOnRender = () => {
    const theme = localStorage.getItem('theme')
    if (theme === 'light') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  useEffect(() => {
    document.body.className = theme;
    setThemeOnRender()
  }, [theme])

  return (
    <div className='App'>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        showAboutSection={showAboutSection}
      />

      <alert
        alert={alert}
      />
      {wordDetails ? <WordDetails
        word={word}
        definitions={definitions}
        examples={examples}
        rhymes={rhymes}
        synonyms={synonyms}
        antonyms={antonyms}
        syllables={syllables}
        frequency={frequency}
        pronunciation={pronunciation}
        data={data}
        searchParameter={searchParameter}
        closeWordDetails={closeWordDetails}
      /> : <></>
      }

      <div className='search-bar'>
        <input
          placeholder='Search...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}></input>
          <div className='button-container'>
            <button className='submit' onClick={fetchWord}>Search Word</button>
            <button
              onClick={showSettingsPanel}
              title='Toggle Search Settings'
              className={settings ? 'settings active' : 'settings'}><Sliders /></button>
          </div>
      </div>
      
      <OptionsButtons
        settings={settings}
        searchParameter={searchParameter}
        searchDifferentOption={searchDifferentOption}
      />

      <About
        about={about}
        hideAboutSection={hideAboutSection}
      />
    </div>
  );
}

export default App