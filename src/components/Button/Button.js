import { Component } from 'react'

class Button extends Component {

  render() {
    return (
      <button type={this.props.type} onClick={this.props.onClick} onSubmit={this.props.onSubmit} className={`border-none hover:shadow-xl bg-slate-500 text-white cursor-pointer rounded-lg p-2 m-2 ${this.props.className}`}>{this.props.children}</button>
    )
  }
}

export default Button
