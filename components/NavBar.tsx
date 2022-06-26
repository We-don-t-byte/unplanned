import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from "next-auth/react";


const NavBar: React.FC = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    let logAction: () => void;
    let logText;
    if (status === "loading") {
        logAction = () => { };
        logText = "Loading..."
    }
    if (session) {
        logAction = () => signOut()
        logText = "Log out"
    }
    else {
        logAction = () => router.push('/api/auth/signin');
        logText = "Log in"
    }
    return (
        <nav >
            <div >
                <Link href={"/"}>
                <span >Unplanned</span>
                </Link>
            </div>
            <div >
                <div >
                    <Link href={'/about'}>
                        <a >
                            about
                        </a>
                    </Link>
                    {session &&
                        (<Link href={'/favs'}>
                            <a href="#responsive-header" >
                                Favs
                            </a>
                        </Link>)
                    }
                    {session &&
                        (<Link href={'/navigate'}>
                            <a href="#responsive-header" >
                                Navigate
                            </a>
                        </Link>)
                    }
                </div>
                <div>
                    {session &&
                        (
                            <button onClick={() => { router.push(`/user/${session.user.id}`) }} >
                                {session.user.name}
                            </button>
                        )
                    }
                    <button onClick={() => { logAction() }} >
                        {logText}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar