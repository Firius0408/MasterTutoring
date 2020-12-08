import React from 'react';
import Select from 'react-select';
import { Redirect } from 'react-router-dom';

const options = [
  { value: 'math', label: 'Math' },
  { value: 'history', label: 'History' },
  { value: 'science', label: 'Science' },
];

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: null };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <div>
        {!selectedOption ? 
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
          :
          <Redirect push to={{
            pathname: "/PostList",
            search: selectedOption.value,
            state: { search: selectedOption }
          }}/>
        }
      </div>
    );
  }
}

export default Search;