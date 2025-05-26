import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";


export default function useAboutMeViewHolder() {
    const db = useSQLiteContext();
    const [featuredCars, setFeaturedCars] = useState<{imagePath: string}[]>([]);
    const [aboutMe, setAboutMe] = useState<{header: string, paragraph: string}[]>([]);

    const initAboutMeText = () => {
        db.execSync(`
            CREATE TABLE IF NOT EXISTS about_me_text (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              header TEXT,
              paragraph TEXT
            );
          `)
          const existing = db.getAllSync('SELECT * FROM about_me_text;');
          if (existing.length === 0) {
            db.execSync(`
              INSERT INTO about_me_text (header, paragraph) VALUES
              ('My Journey', 'With over 5 years in the automotive industry, I specialize in connecting people with the perfect vehicle for their lifestyle. I’ve helped more than 500 happy clients find their ideal cars while providing top-notch customer service and after-sales support.');
            `);
            db.execSync(`
              INSERT INTO about_me_text (header, paragraph) VALUES
              ('Education & Training', '🎓 MBA Student at Lakehead University\n📘 Certified in Automotive Sales & Customer Relations');
            `);
          
            db.execSync(`
              INSERT INTO about_me_text (header, paragraph) VALUES
              ('Work Experience', '🚗 Car Sales Consultant - 3+ years at Gisande Ltd.\n🔧 Automotive Assistant - Supported construction and maintenance crews.');
            `);
          }
    }

    const initFeaturedCars = () => {
        db.execSync(`
            CREATE TABLE IF NOT EXISTS about_me_featured_cars (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              imagePath TEXT
            );
          `)
        if(db.getAllSync('SELECT * FROM about_me_featured_cars;').length === 0) {
            db.execSync(`
                INSERT INTO about_me_featured_cars (imagePath) VALUES
                ('car1.jpeg');
            `);
            db.execSync(`
                INSERT INTO about_me_featured_cars (imagePath) VALUES
                ('car2.jpeg');
            `);
            db.execSync(`
                INSERT INTO about_me_featured_cars (imagePath) VALUES
                ('car3.jpeg');
            `);
            db.execSync(`
                INSERT INTO about_me_featured_cars (imagePath) VALUES
                ('car4.jpeg');
            `);
        }
    }
    useEffect(() => {
        initAboutMeText();
        const text = db.getAllSync<{header: string, paragraph: string}>('SELECT * FROM about_me_text;');
        setAboutMe(text);
        initFeaturedCars();
        const cars = db.getAllSync<{imagePath: string}>('SELECT * FROM about_me_featured_cars;');
        setFeaturedCars(cars);
      }, []);

      return {
        aboutMe, featuredCars
      }
}