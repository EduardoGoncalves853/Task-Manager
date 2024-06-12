import { useQuery } from "@tanstack/react-query";
import { API } from "../configs/api";
import { AxiosPromise } from "axios";

export function useQueryUser() {
  const query = useQuery({
    queryKey: ["userData"],
    queryFn: async (): AxiosPromise => await API.get("/user"),
  });
  return {
    ...query,
    data: query.data?.data,
  };
}
