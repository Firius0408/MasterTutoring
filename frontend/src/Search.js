import React, {Component} from 'react'
import Select from 'react-select'
const options = [
  { value: 'math', label: 'Math' },
  { value: 'english', label: 'English' },
  { value: 'science', label: 'Science' },
];
  class Search extends Component {
    state = {
        selectedOption: null,
      };
      handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };
      render() {
        const { selectedOption } = this.state;
     
        return (
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
        );
      }
  }
  export default Search;