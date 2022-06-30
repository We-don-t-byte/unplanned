import { prisma } from "../../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import globalAPICall from "../../../../lib/globalAPICall";
import { handleClientScriptLoad } from "next/script";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    async function POST() {
        await prisma.user.update({
            where: {
                id: id as string, 
            },
            data: {
                dislikeCount: {
                    increment: 1,
                }
            }


        });
        res.status(200).json({ message: "Success" });
    }


    await globalAPICall(req, res, {POST});
}