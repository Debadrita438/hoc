import { Component } from 'react';

const withData = (WrappedComponent, dataSource) => {
    class WithData extends Component {
        state = {
            data: []
        }
    
        componentDidMount() {
            fetch(dataSource)
                .then(res => res.json())
                .then(data => this.setState({ data: data.slice(0, 4) }))
        }

        render() {
            return(
                this.state.data.length > 1 ?
                <WrappedComponent data={ this.state.data } { ...this.props } />
                : <h1>Loading... </h1>
            );
        }
    }
    return WithData;
}

export default withData;