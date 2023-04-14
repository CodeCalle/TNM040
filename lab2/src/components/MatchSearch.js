const MatchSearch = (word, searchString) => {
  const lowerCaseWord = word.toLowerCase()
  const lowerCaseSearchString = searchString.toLowerCase()

  return lowerCaseWord.indexOf(lowerCaseSearchString) === 0
}

export default MatchSearch
