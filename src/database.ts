import { writable } from "svelte/store";

interface User {
    id: number;
    userEmail: string;
    userPassword: string;
}

const user: User = {
    id:1,
    userEmail: "admin",
    userPassword: "admin",
}

export const DatabaseStore = writable([user])