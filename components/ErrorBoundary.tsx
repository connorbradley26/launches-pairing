import React from "react"

type Props = {
    children: React.ReactNode
}

type State = {
    hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State>  {
    constructor(props: Props) {
        super(props)

        // Define a state variable to track whether is an error or not
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI

        return { hasError: true }
    }
    componentDidCatch(error: any, errorInfo: any) {
        console.log({ error, errorInfo })
    }
    render() {
        // Check if the error is thrown
        if (this.state.hasError) {
            debugger;
            // You can render any custom fallback UI
            return (
                <div>
                    <h2>Oops, there is an error!</h2>
                    <button
                        type="button"
                        onClick={() => this.setState({ hasError: false })}
                    >
                        Try again?
                    </button>
                </div>
            )
        }

        // Return children components in case of no error

        return this.props.children
    }
}

export default ErrorBoundary