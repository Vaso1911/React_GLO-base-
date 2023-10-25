import React from 'react';

export class Link extends React.Component {
  render() {
    const { href, className, content } = this.props;
    return (
      <a href={href} className={className}>{content}</a> 
    );
  }
}