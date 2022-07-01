import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import router from "next/router";

const NoPlaces = () => {
    const [index, setIndex] = useState(0)
    return (
        <div>
            <h2 className="text-2xl font-bold font-nunito text-green-700 dark:text-white sm:text-4xl">
                No se encontraron coincidencias
            </h2>
            <Button
                key={index}
                onClick={() => router.push("/")}
                color="light-green"
                variant="gradient"
                className="rounded-full"
                size="sm"
            >
                {"Regresar"}
            </Button>
        </div>
    );
}
export default  NoPlaces;