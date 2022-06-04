import axios from 'axios'
import qs from 'qs';

const client_id = 'DEoXpcuHVV2NcNo7fcGXC8AtGFqG3ejG'
const client_secret = 'GpuMR3MlKhsytRwX'
const base_url = 'https://test.api.amadeus.com/v1/'
const accessToken = 'H7Mb6Atkw7A1qlCLFUfv4hrPsAad'
const Authorization = `Bearer ${accessToken}`

const data = qs.stringify({
    grant_type: 'client_credentials',
    client_id, client_secret,
});

const config = {
  method: 'post',
  url: base_url + 'security/oauth2/token',
  data,
};


const amadeus = axios.create({
    baseURL: base_url,
    headers: { 
        'content-type': 'application/x-www-form-urlencoded',
        Authorization
    }
});

export default {
    fetchAccessToken: async () => {
        try {
            let response = await axios(config)
            return response.data.access_token
        }
        catch (err) {
            return null
        }
    },
}