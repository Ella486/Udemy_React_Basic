import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false };
    }
    // 오류 경계 메소드
    // 클래스 컴포넌트를 오류 경계로 만듦.
    componentDidCatch(error) {
        console.log(error);
         this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;