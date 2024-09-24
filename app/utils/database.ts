import prisma from "./prismaclient";

export async function Test() {
  const people = await prisma.employee.findMany();
  return people;
}

export async function empLoginDB({
  entry,
  pword,
}: {
  entry: string;
  pword: string;
}) {
  let resp = await prisma.logindet.findFirst({
    where: {
      AND: [
        {
          username: entry
        },
        {
          password: pword
        },
      ],
    },
    select: {
      empid: true,
      username: true,
      email: true,
      admin: true
    }
  });
  return(resp);
}

export async function completeDetails(empid: string){
  let resp = await prisma.employee.findUnique({
    where: {
      'empid': empid
    }
  })
  return(resp)
}