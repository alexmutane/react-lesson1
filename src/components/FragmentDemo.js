import React, { Component } from 'react'

class FragmentDemo extends Component {
  render() {
    return (
      <>
        <h4>Ttile of page</h4>
        <p>some aditional descriptions</p>
      </>
    )
  }
}

export class Frag extends Component {
  render() {
    const items = [
      { id: 1, course: 'Native app' },
      { id: 2, course: 'Web app' },
      { id: 3, course: 'PWA' },
    ];
    //if I need to pass *key in a Fragment, I can't use the shorten <>...</>
    return (
      <>
        <ul>
          {
            items.map(item => (
              <React.Fragment key={item.id}>
                <li>{item.course}</li>
                <small>{item.id} - Uma descrição que acompanha a lista</small>
              </React.Fragment>
            ))
          }
        </ul>
      </>
    )
  }
}

export default FragmentDemo
