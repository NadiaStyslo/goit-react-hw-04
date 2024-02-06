import axios from "axios";

const fetchArticles = async (query, page) => {
    const accessKey = 'eRi2GbVGvwlS64LHi0_aI-k6DHTxAlhEcalokt2n68E'
 const response = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${accessKey}`, {
        params: {
            query,
            page,
            per_page: 10,
        },
    });
    return response.data;
}

export default fetchArticles