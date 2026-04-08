const fs = require('fs');
const dotenv = require('dotenv');

if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' });
}

module.exports = {

    // =============================
    // DATABASE
    // =============================
    DATABASE_URL:
        process.env.MONGODB_URI ||
        process.env.DATABASE_URL ||
        "", // ENTER POSTGRES DB URL OR MONGODB PUBLIC URL OR ENTER NOTHING FOR USE FREE SITE

    // =============================
    // BOT CORE SETTINGS
    // =============================
    OWNER_NUMBER:
        process.env.OWNER_NUMBER ||
        "923253617422",
    
    PREFIX: process.env.PREFIX || ".",

    // =============================
    // GLOBAL BRANDING
    // =============================
    BOT_NAME:
        process.env.BOT_NAME ||
        "Rashid",

    OWNER_NAME:
        process.env.OWNER_NAME ||
        "THE-DEVIL",

    CAPTION:
        process.env.CAPTION ||
        "POWERED BY TEAM-BANDAHEALI",

    STATUS_MSG:
        process.env.STATUS_MSG ||
        "Hello From Team-Bandaheali",

    NEWSLETTER_JID:
        process.env.NEWSLETTER_JID ||
        "120363424371541023@newsletter",

    MENU_IMG:
        process.env.MENU_IMG ||
        "https://bandaheali-cdn.koyeb.app/bandaheali/smd.jpg",

    // =============================
    // SITE URL FOR PAIR CMD
    // =============================
    SITE_URL:
        process.env.SITE_URL ||
        "https://smd-mini.vercel.app",

    PORT:
        process.env.PORT ||
        "20014"
};
