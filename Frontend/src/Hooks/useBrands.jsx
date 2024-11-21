import axios from 'axios'
import { useQuery } from 'react-query'

const useBrands = () => {

        function getBrands(){
            return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
        }
        const response=useQuery({
            queryKey:["brands"],
            queryFn:getBrands,
            refetchOnMount:false,
            refetchOnWindowFocus:false
        })
        return response
       
 
}

export default useBrands