import axios from 'axios'

export const getData = () => {
    return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
        return res;
      });
}
