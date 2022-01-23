import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api";
const KEY = "24356529-6185a224b0d5bc228eaca8b03";

async function PixabayApi(searchСategory, page) {
  const response = await axios.get(
    `/?q=${searchСategory}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
}

export default PixabayApi;
