import React from "react";

import { useSession, signOut } from "next-auth/react";
import PageModule from "../components/PageModule";
import ProfileCard from "../components/ProfileCard";

import { Button } from "@material-tailwind/react";

const UserProfile = () => {
  const { data: session, status } = useSession();

  console.log(session);

  return (
    <PageModule title="Perfil">
      <div className="container flex items-center justify-center justify-between text-blue-grey-900">
        <ProfileCard
          name={session?.user.name || ""}
          email={session?.user.email || ""}
          image={session?.user.image?.split("=", 1)[0] || ""}
        >
          <Button
            onClick={() => signOut()}
            color="green"
            variant="gradient"
            className="rounded-full self-center"
            size="md"
          >
            Cerrar sesión
          </Button>
        </ProfileCard>
      </div>
    </PageModule>
  );
};

export default UserProfile;
