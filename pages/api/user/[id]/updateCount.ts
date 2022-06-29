import { prisma } from "../../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import globalAPICall from "../../../../lib/globalAPICall";

export default async function handle(req:NextApiRequest, res: NextApiResponse) {
    const userId = req.query.userId as string;
    async function POST() {
        await prisma.user.update({
            where: { id: userId },
            data: {
                numRecommendations: {
                    decrement: 1,
                },
            },
        }
        );
        res.status(200).send("OK");
    }

    async function GET() {
        const numRecommendations = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                numRecommendations: true,
            }
        });

        if (numRecommendations === null) {
            res.status(404).send("User not found");
            return;
        }

        res.status(200).json(numRecommendations.numRecommendations);
    }
    
    await globalAPICall(req, res, {GET,POST});
}