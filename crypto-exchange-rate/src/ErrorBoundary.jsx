import React from "react";
import { Typography } from "antd";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Caught error: ");
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Typography.Title level={4}>Something went wrong.</Typography.Title>;
    }

    return this.props.children;
  }
}
