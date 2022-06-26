import * as React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { signOut, useSession } from "next-auth/react";
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar: React.FC = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    let logAction: () => void;
    let logText;
    let AvatarIcon = <AccountCircleIcon />;
    if (status === "loading") {
        logAction = () => { };
        logText = "Loading..."
    }
    if (session) {
        logAction = () => signOut()
        logText = "Log out"
        if (session.user.image) {
            AvatarIcon = (<Avatar>
                <Image src={session.user.image} width={40} height={40}/>
            </Avatar>)
        }
    }
    else {
        logAction = () => router.push('/api/auth/signin');
        logText = "Log in"
    }
    const routes: [string,string,JSX.Element][] = [
        ["Home", "/", <HomeIcon/>],
        ["Favorites", "/favorites", <FavoriteIcon/>],
        ["Profile", `/user/${session?.user?.id}`, AvatarIcon],
    ];
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        router.push(routes[newValue][1]);
        setValue(newValue);
    }
    return (
        <BottomNavigation showLabels value={value} onChange={handleChange}>
            {/* <BottomNavigationAction label="Home" icon = {<HomeIcon />}/>
            <BottomNavigationAction label="Favorites" icon = {<FavoriteIcon/>}/> */}
            {routes.map(([label, href, icon]) => (<BottomNavigationAction label={label} icon={icon}/>))}
            {/* <div >
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
            </div> */}
        </BottomNavigation>
    )
}

export default NavBar