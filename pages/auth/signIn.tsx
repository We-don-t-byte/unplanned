import { GetServerSideProps, NextPage } from "next";
import { getProviders, signIn, getSession, } from "next-auth/react";
import PageModule from "../../components/PageModule";

import { Button } from "@material-tailwind/react";

type Props = {
    providers: Awaited<typeof getProviders>;
}
const signin: NextPage<Props> = ({providers}) => {
  return (
    <PageModule title="Iniciar Sesión">
    <div className="flex flex-col space-y-8">
         {Object.values(providers).map((provider) => (
        <div key={provider.name} className="w-full">
          <Button
            key={provider.name}
            onClick={() => signIn(provider.id)}
            color="light-green"
            variant="gradient"
            className="rounded-full w-full"
            size="sm"
          >
            {provider.name}
          </Button>
        </div>
      ))}
    </div>
    </PageModule>
  );
}

export const getServerSideProps: GetServerSideProps = async (context)  => {
    const session = await getSession(context);
    if (session) {
        return {
            redirect: {
                destination: "/",
                statusCode: 302,
            }
        }
    }
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default signin;