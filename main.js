const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apiKey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

console.log(str.match(/\bf\w{1,}\b/g))