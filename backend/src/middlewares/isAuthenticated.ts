import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import dotenv from 'dotenv'


dotenv.config()

interface Payload {
    sub: string,
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction) {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).end()
    }

    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET as string
        ) as Payload

        return next()

    } catch (e: any) {
        res.status(401).end()
    }
}
