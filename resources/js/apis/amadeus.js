import axios from 'axios'
import qs from 'qs';

const client_id = 'DEoXpcuHVV2NcNo7fcGXC8AtGFqG3ejG'
const client_secret = 'GpuMR3MlKhsytRwX'
const base_url = 'https://test.api.amadeus.com/v1/'
let accessToken = null
let Authorization = `Bearer ${accessToken}`
let amadeus = null

const data = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id, client_secret,
});

const config = {
  method: 'post',
  url: base_url + 'security/oauth2/token',
  data: data.toString(),
};

async function fetchAccessToken () {
    try {
        let response = await axios(config)
        accessToken = response.data.access_token
        Authorization = `Bearer ${accessToken}`
        setAmadeus()
        return accessToken
    }
    catch (err) {
        return null
    }
}
if (accessToken === null) {
    fetchAccessToken()
}
function setAmadeus() {
    amadeus = axios.create({
        baseURL: base_url,
        headers: { 
            'content-type': 'application/x-www-form-urlencoded',
            Authorization
        }
    });
}
export default {
    fetchAccessToken,
    fetchAirportDirectDestinations: async (params) => {
        let res = { data: { data: [] }}
        try {
            res = await amadeus.get('/airport/direct-destinations', { params })
        } catch (err) {
            await fetchAccessToken()
        }
        return res
    },
}