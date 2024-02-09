import axios from "axios";

const fetchArticles = async (query, page) => {
    const accessKey = 'eRi2GbVGvwlS64LHi0_aI-k6DHTxAlhEcalokt2n68E'
 const response = await axios.get(
     `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`, {
     params: {
                page,
            query,
            per_page: "20"
        },
    });
    return response.data;
}

export default fetchArticles