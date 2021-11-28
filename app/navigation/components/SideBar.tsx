import { Box, Text } from '@chakra-ui/layout';
import { Link, Routes } from 'blitz';

const Sidebar = () => {
  return (
    <Box
      as="nav"
      aria-label="Main Navigation"
      pos="sticky"
      sx={{
        overscrollBehavior: 'contain',
      }}
      top="6.5rem"
      w="280px"
      h="calc(100vh - 8.125rem)"
      pr="8"
      pb="6"
      pl="6"
      pt="4"
      overflowY="auto"
      className="sidebar-content"
      flexShrink={0}
      display={{ base: 'none', md: 'block' }}
    >
      <Text fontSize="4xl" fontWeight="bold">
        tessera
      </Text>
      <Link href={Routes.NotesPage()}>
        <Text fontWeight="semibold">Notes</Text>
      </Link>
    </Box>
  );
};

export default Sidebar;
