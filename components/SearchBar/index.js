import React from 'react'
import { View, Text } from 'react-native'

const SearchBar = () => {
    state = {
        search: '',
      };
      updateSearch = (search) => {
        this.setState({ search });
      };
        const { search } = this.state;
        
    return (
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
      );
    }

  }

export default SearchBar
