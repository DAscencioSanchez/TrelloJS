require('dotenv').config()

if (!process.env.TOKEN && !process.env.KEY) {
    throw new Error('No hay configuracion con API Key y con Token')
}

