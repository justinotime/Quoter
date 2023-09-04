import React from 'react'
import { Info } from 'react-feather'

function OptionsButtons({ settings, searchParameter, searchDifferentOption }) {


  return (
      <div className={settings ? 'options-button-container active' : 'options-button-container'}>
        <div>
          <button
          onClick={() => searchDifferentOption('definitions')} 
          className={searchParameter === 'definitions' ? 'option active' : 'option'}>Definitions</button>

          <button
          onClick={() => searchDifferentOption('examples')} 
          className={searchParameter === 'examples' ? 'option active' : 'option'}>Examples</button>

          <button
          onClick={() => searchDifferentOption('rhymes')} 
          className={searchParameter === 'rhymes' ? 'option active' : 'option'}>Rhymes</button>

          <button
          onClick={() => searchDifferentOption('synonyms')} 
          className={searchParameter === 'synonyms' ? 'option active' : 'option'}>Synonyms</button>

          <button
          onClick={() => searchDifferentOption('antonyms')} 
          className={searchParameter === 'antonyms' ? 'option active' : 'option'}>Antonyms</button>

          <button
          onClick={() => searchDifferentOption('syllables')} 
          className={searchParameter === 'syllables' ? 'option active' : 'option'}>syllables</button>

          <button
          onClick={() => searchDifferentOption('frequency')} 
          className={searchParameter === 'frequency' ? 'option active' : 'option'}>Frequency</button>

          <button
          onClick={() => searchDifferentOption('pronunciation')} 
          className={searchParameter === 'pronunciation' ? 'option active' : 'option'}>Pronunciation</button>
        </div>

        <span className='info'>
          <Info /> <p>Pick an option to find that information about the word you are searching.</p>
        </span>
      </div>
  )
}

export default OptionsButtons