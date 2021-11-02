export interface Utenti {
    "page": number,
    "per_page": number,
    "total": number,
    "total_pages": number,
    "data": Utente[]
}

export interface Utente{
    "id": number,
    "email": string,
    "first_name": string,
    "last_name": string,
    "avatar": string
}

export interface NuovoUtente{
    "id" : number,
    "name" : string,
    "job" : string
}