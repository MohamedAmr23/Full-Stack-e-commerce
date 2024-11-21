import axios from 'axios'
import { useQuery } from 'react-query'

const useCategories = () => {
    function getCategories(){
      return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    }
    const response=useQuery({
        queryKey:["Categories"],
        queryFn:getCategories,
        refetchOnMount:false,
        refetchOnWindowFocus:false
    })
  return response
}

export default useCategories