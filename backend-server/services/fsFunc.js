import fs from 'fs/promises'

export async function readJsonFiles(path) {
    try {
        const readTheFile = await fs.readFile(path,"utf-8")
        const getTheFile = JSON.parse(readTheFile)
        return getTheFile
    } catch (error) {
        console.error(error)
    }
}