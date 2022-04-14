import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Stack } from '@mui/material';
import React, { ChangeEventHandler } from 'react';

interface SearchProps {
    val: string;
    func: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const SearchBar:React.FC<SearchProps> = ({ val, func }) => {

    return(
        <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            bgcolor="#FFF"
            borderRadius={10}
            paddingX={2}
            paddingY={1}
        >
            <SearchIcon />
            <InputBase
                placeholder='Search...'
                inputProps={{ 'aria-label': 'search ' }}
                type="search"
                value={val}
                onChange={func}
                fullWidth
            />
        </Stack>
    );
};

export default SearchBar;