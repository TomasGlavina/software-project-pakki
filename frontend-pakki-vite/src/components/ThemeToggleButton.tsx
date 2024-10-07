import React from 'react';
import { Button, useColorMode } from '@chakra-ui/react';

const ThemeToggleButton: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Button onClick={toggleColorMode}>
            🌙
        </Button>
    );
};

export default ThemeToggleButton;
