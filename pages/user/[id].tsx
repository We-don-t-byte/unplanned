import React from "react";
import { GetServerSideProps } from "next";
import { prisma } from "../../lib/prisma";
import { Prisma,User } from "@prisma/client";
import { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";

const selectUser = Prisma.validator<Prisma.UserArgs>()({
    select: {
        image: true,
        name: true,
        email: true,
    }
});

type UserInfo = Prisma.UserGetPayload<typeof selectUser>;

export const getServerSideProps: GetServerSideProps<UserInfo> = async ({params}) => {


    if (!params || !params.id || Array.isArray(params.id)) {
        return {
            props: { image: null, email: null, name: null}
        }
    };
    const {id} = params;
    const user: UserInfo | null = await prisma.user.findUnique({
        where: {
            id: params.id 
        },
        ...selectUser
    })
    return {
        props: user || { image: null, email: null, name: null}
    }

}
const UserProfile: NextPage<UserInfo> = ({name, email,image}) => {
    const { data: session, status } = useSession();
    let after: JSX.Element = <h1>Loading...</h1>; 
    if (session) {
        after = 
                    (<button onClick={() => { signOut() }} >
                        Log out
                    </button>)
    }

    return (
        <div>
            <span>{name}</span><br/>
            <span>{email}</span>
            <img src={image || undefined}/>
            {after}
        </div>
    )
}

export default UserProfile;