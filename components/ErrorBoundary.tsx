"use client";

import React from 'react';

type Props = { children: React.ReactNode; fallback?: React.ReactNode };

export default class ErrorBoundary extends React.Component<Props, {hasError: boolean}> {
  constructor(props: Props){
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(){
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any){
    console.error('Error caught in ErrorBoundary:', error, info);
  }

  render(){
    if (this.state.hasError){
      return this.props.fallback ?? <div className="p-4 border rounded text-red-600">Failed to load this section.</div>;
    }
    return this.props.children;
  }
}
