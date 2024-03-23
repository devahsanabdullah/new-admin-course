import axios from 'axios'
import { AxiosRequestConfig } from 'axios'


export const useAxios = () => {
 



  const instance = axios.create({
    baseURL: 'http://localhost:4000/api/v1'
  })

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      
      return Promise.reject(error) // Pass the error along to the .catch() block
    }
  )

  /**
   * @param token
   */
  const setBearerToken = (token: string) => {
    // token = '39|SLjXACJQx4t9XEfC4ICnBjyoVZMvKpZbfUZ33YW3'
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
  /**
   * @param token
   */

  
  /**
   * @param url
   * @param formData
   * @param config Optional configuration for the request
   */
  const post = (
    url: string,
    formData: object,
    config?: AxiosRequestConfig
  ): Promise<any> => {
    return instance.post(url, formData, config)
  }

  /**
   * @param url
   * @param formData
   */
  const put = (url: string, formData: object): Promise<any> => {
    return instance.put(url, formData)
  }

  /**
   * @param url
   * @param formData
   */
  const patch = (url: string, formData: object): Promise<any> => {
    return instance.patch(url, formData)
  }

  /**
   * @param url
   */
  const get = (url: string): Promise<any> => {
    return instance.get(url)
  }

  /**
   * @param url
   */
  const deleteRequest = (url: string): Promise<any> => {
    return instance.delete(url)
  }

  return {
    post,
    put,
    get,
    patch,
    deleteRequest,
    setBearerToken
  }
}
