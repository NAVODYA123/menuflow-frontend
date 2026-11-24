const API_BASE = "http://localhost:5000/api";

export const getPublicMenu = async (restaurantId: string) => {
  const res = await fetch(`${API_BASE}/public/menu/${restaurantId}`);
  return res.json();
};

export const getAdminMenu = async (token: string) => {
  const res = await fetch(`${API_BASE}/admin/menu`, {
    headers: {
      Authorization: token,
    },
  });
  return res.json();
};
