"use client";

type DataProp = {
  email: string;
  password: string;
};

export const signin = async (data: DataProp) => {
  try {
    const res = await fetch(`${process.env.FRONTEND_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (!res.ok) {
      const errorBody = await res.json().catch(() => null);
      throw new Error(errorBody?.message || "Login failed");
    }

    return res.json();
  } catch (err: any) {
    console.log("Signin error:", err.message);

    throw new Error(err.message || "Login failed");
  }
};
