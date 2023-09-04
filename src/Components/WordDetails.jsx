import React, { useEffect } from 'react'
import { Info } from 'react-feather'

function WordDetails({ data, word, definitions, examples, closeWordDetails, 
  searchParameter, rhymes, synonyms, antonyms, syllables, frequency, pronunciation }) {

    useEffect(() => {
      console.log()
    }, [data])

    // const searchParameterTitle = searchParameter.charAt(0).toUpperCase() + searchParameter.slice(1)
  
  return (
    <div className='word-details'>
      <div className='close'>
        <p onClick={closeWordDetails}>close</p>
      </div>

      <h1>{word}</h1>
      <h2>{searchParameter}:</h2>
      <div className='search-results'>
          {definitions ? definitions.map((item, index) => (
              <div className='search-result' key={index}>
                  <h3>{item.definition}</h3>
                  <p>- {item.partOfSpeech}</p>
              </div>
          )) : ''}
        
          {examples ? examples.map((item, index) => (
              <div className='search-result' key={index}>
                  <h3>{item}</h3>
              </div>
          )) : ''}

          {rhymes ? rhymes.all.map((item, index) => (
              <div className='search-result rhymes' key={index}>
                  <h3>{item}</h3>
              </div>
          )) : ''}

          {synonyms ? synonyms.map((item, index) => (
              <div className='search-result synonyms' key={index}>
                  <h3>{item}</h3>
              </div>
          )) : ''}

          {antonyms ? antonyms.map((item, index) => (
              <div className='search-result antonyms' key={index}>
                  <h3>{item}</h3>
              </div>
          )) : ''}

          {syllables ? 
              <div className='search-result antonyms'>
                  <h3>{syllables.list ? syllables.list.map((syllable, index) => (
                      `${syllable}${index !== syllables.list.length - 1 ? ' - ' : ''}`
                  )) : ''}</h3>
                  <p>Syllables - {syllables.count}</p>
              </div> : ''}

          {frequency ? 
            <div className='frequency'>
              <span className='info'>
                <Info /> <p>Hover over each box to see an explanation each statistic.</p>
              </span>

              <div className='frequency-stats'>
                <div 
                  title='0-1 scale the shows the likelyhood of the word appearing in an English document that is part of a corpus.' 
                  className='search-result antonyms'>
                  <h3>Diversity: {frequency.diversity}</h3>
                </div> 

                <div 
                  title='The number of times the word is likely to appear in a corpus of one million English words.' 
                  className='search-result antonyms'>
                  <h3>Per Million: {frequency.perMillion}</h3>
                </div> 

                <div
                  title='A score indicating how common the word is in the English language, with a range of 1 to 7.' 
                  className='search-result antonyms'>
                  <h3>Zipf: {frequency.zipf}</h3>
                </div>
              </div>
            </div> : ''}

          {pronunciation ? 
              <div className='search-result pronunciation'>
                  <h2>- {pronunciation.all}</h2>
              </div> : ''}
      </div>
    </div>
  )
}

export default WordDetails