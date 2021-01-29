import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          'Client-ID 8JBbDWY47663BIjg-Rwuc9QV2Fx1x5tZK--eGNhcEqw',
    }
})