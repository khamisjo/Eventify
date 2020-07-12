import axios from 'axios'

export default axios.create({
    //baseURL:'https://api.postermywall.com/v1/templates',
    baseURL:'https://api.postermywall.com/v1/templates?client_id=oqyWQPGUu85SZ8WOSN0f6dBIXfmilNDq&keyword='
    // headers: {
    //     Authorization: 'Bearer oqyWQPGUu85SZ8WOSN0f6dBIXfmilNDq'
    // }
});

