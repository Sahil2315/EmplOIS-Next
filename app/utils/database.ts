import prisma from './prismaclient'

export async function Test(){
    const people = await prisma.person.findMany()
    console.log('hello world')
    return(people)
}
