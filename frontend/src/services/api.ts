import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies'
import { AuthTokenError } from '../errors/AuthTokenError'

export function setupAPIClient(ctx = undefined) {
    let cookies = parseCookies(ctx)

    const api = axios.create({
        baseURL: 'http://localhost:3003',
        headers: {
            Authorization: `Bearer ${cookies['token']}`
        }
    })

    api.interceptors.response.use(res => {
        return res
    }, (e: AxiosError) => {
        if (e.response?.status === 401) {
            if (typeof window !== undefined) {
                singOut()
            } else {
                return Promise.reject(new AuthTokenError())
            }
        }

        return Promise.reject(e)
    })

    return api
}