import { useEffect, useState } from "react";
import { getListService } from "../services/getListService";

interface Element {
  id: string;
  name: string;
  avatar: string;
}

const useList = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getListByEp();
  }, []);

  const getListByEp = async () => {
    setLoading(true);
    const response = await getListService();
    setElements(response.data);
    setLoading(false);
  };

  return { elements, loading };
};

export default useList;
