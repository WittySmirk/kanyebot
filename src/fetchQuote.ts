import axios from "axios"

const fetchQuote = async (): Promise<string> => {
    let quote: string = '';
    await axios.get('https://api.kanye.rest/')
    .then((response) => {
        quote = response.data.quote
    })
    .catch((e) => {
        console.log(e)
    })

    return quote;
}

export default fetchQuote;