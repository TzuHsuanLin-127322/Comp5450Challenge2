import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";

export type ContactMeItem = {
    id: number,
    name: string,
    email: string,
    phone: string,
    purpose: string,
    message: string,
}

export const useGuestbookViewHolder = () => {
    const db = useSQLiteContext();
    const [guestbook, setGuestbook] = useState<ContactMeItem[]>([]);

    const initDB = () => {
        db.execSync(`
          CREATE TABLE IF NOT EXISTS contact_me (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,  
            purpose TEXT NOT NULL,
            message TEXT NOT NULL
          );
        `)
      }
    
      useEffect(() => {
        initDB()
        const guestbook = db.getAllSync<ContactMeItem>('SELECT * FROM contact_me;');
        setGuestbook(guestbook)
      }, [])

    const deleteGuestBookItem = (id: number) => {
        db.execSync(`
            DELETE FROM contact_me WHERE id = ${id};
        `)
        setGuestbook(guestbook.filter((item) => item.id !== id))
    }
    return({
        guestbook,
        deleteGuestBookItem
    })
}