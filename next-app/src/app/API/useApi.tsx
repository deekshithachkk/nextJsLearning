import type { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { useEffect, useState } from "react";
interface DataProps{
    blog?:BlogDataProps
  }
export const useApi = (url: string, options?: AxiosRequestConfig<any>) => {
  const [data, setData] = useState<DataProps>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | unknown>(null);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response: AxiosResponse = await axios(url, options);
      setData(response.data);
      console.log("responseData",response.data.blog)
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};
