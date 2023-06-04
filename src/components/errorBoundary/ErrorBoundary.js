import { Component } from "react";
import ErrMessage from "../errMessage/ErrMessage";


class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch (error, errorInfo) {
        this.setState ({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrMessage/>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;