//class component membuat suatu state dengan mudah

import React, { Component } from 'react'

export default class stateProps extends Component {
  state = {
    makanan: "bakso"
  }

  ubahMakanan() {
    this.setState({
      makanan: "nico"
    })
  }

  render() {
    return (
      <div>
        <h2>Makanan : {this.state.makanan}</h2>
        <button
          className="py-2 px-4 mt-2 rounded-md shadow-md bg-indigo-400 hover:shadow-lg text-white"
          onClick={() => this.ubahMakanan()}
        >
          <p className="text-sm">Ubah Makanan</p>
        </button>
      </div>
    )
  }
}
