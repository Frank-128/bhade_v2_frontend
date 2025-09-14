"use server";

import {api} from "@/lib/axios";

export const getMyUserDetail = async () => {
  try {
    const { data } = await api.get(`/account/my-detail`);
    return data;
  } catch (err: any) {
    console.log(err);
    return { success: false, message: err?.response?.data?.message };
  }
};

export const getUserDetail = async (userId: number) => {
  try {
    const { data } = await api.get(`/account/${userId}`);
    return data;
  } catch (err: any) {
    console.log(err);
    return { success: false, message: err?.response?.data?.message };
  }
};
