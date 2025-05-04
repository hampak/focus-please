"use client";

import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";

const Home = () => {
  const { user } = useKindeBrowserClient();

  if (!user?.id) return;

  return (
    <div className="space-y-10">
      <p>{user.id}</p>
      <LogoutLink>Logout</LogoutLink>
    </div>
  );
};

export default Home;
