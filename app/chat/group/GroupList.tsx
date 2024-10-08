import prisma from "@/prisma/client";
import { Flex, Heading } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import Group from "./Group";
import NewGroup from "./NewGroup";

const GroupList = async () => {
  const session = await getServerSession();
  const groups = await prisma.group.findMany({
    where: { member: { some: { userId: session?.user?.email! } } },
    include: { member: true },
  });
  return (
    <Flex direction="column" className="shadow-lg rounded-md">
      <Flex
        className="w-full dark:bg-zinc-800 bg-zinc-200 rounded-t-md py-1 px-2"
        justify="between"
        align={"center"}
      >
        <Heading>Groups</Heading>
        <NewGroup />
      </Flex>
      <Flex
        gap="3"
        className="dark:bg-zinc-900 bg-zinc-100 p-3 rounded-b-md overflow-x-scroll"
      >
        <Group g={groups} user={session?.user?.email!} />
      </Flex>
    </Flex>
  );
};

export default GroupList;
