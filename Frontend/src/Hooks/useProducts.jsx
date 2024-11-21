import axios from 'axios';
import { useQuery } from 'react-query';

const useProducts = () => {
    function getProducts(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
      }
      const response = useQuery({
        queryKey:['productsDetails'],
        queryFn:getProducts,
        refetchOnWindowFocus:false,
        refetchOnMount:false
      })
  return response
}

export default useProducts