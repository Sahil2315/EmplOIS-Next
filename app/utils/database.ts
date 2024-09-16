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
  let resp = await prisma.logindet.findUnique({
    where: {
      AND: [
        {
          OR: [
            {
              username: entry,
            },
            {
              email: entry,
            },
          ],
        },
        {
          password: pword,
        },
      ],
    },
  });
  console.log(resp);
}
