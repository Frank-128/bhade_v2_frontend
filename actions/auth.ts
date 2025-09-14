"use client";

type DataProp = {
  email: string;
  password: string;
};

export const signin = async (data: DataProp) => {
  try {
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include"
    });

    return res.json();
  } catch (err: any) {
      console.log("Signin error:",  err.message);
      
    return {
      success: false,
      error: err.response?.data?.message || "Login failed",
      status: err.response?.status,
    };
  }
};
