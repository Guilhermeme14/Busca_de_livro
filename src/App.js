import React, { Component } from 'react';
import { procurarLivros } from './api';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = {
    resultados: [],
    query: '',
  };
  

  handleSubmit = async (event) => {
    event.preventDefault();
    const livros = await procurarLivros(this.state.query);
    this.setState({ resultados: livros });
  };
  

  handleInputChange = event => {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="mb-4">Procure um livro</h1>

        <form onSubmit={this.handleSubmit} style={{ marginBottom: '20px' }}>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleInputChange}
            style={{ padding: '10px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#333',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              fontWeight: 'bold',
            }}
          >
            Buscar
          </button>
        </form>
        <table
          style={{
            borderCollapse: 'collapse',
            width: '100%',
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
          }}
        >
          <thead style={{ backgroundColor: '#333' }}>
            <tr>
              <th style={{ padding: '12px', textAlign: 'left', color: '#fff' }}>Título</th>
              <th style={{ padding: '12px', textAlign: 'left', color: '#fff' }}>URL</th>
            </tr>
          </thead>
          <tbody>
            {this.state.resultados.map((livro) => (
              <tr
                key={livro.id}
                style={{
                  borderBottom: '2px solid #ccc',
                  backgroundColor: '#f8f8f8',
                }}
              >
                <td style={{ padding: '12px' }}>{livro.volumeInfo.title}</td>
                <td style={{ padding: '12px' }}>
                  <a
                    href={livro.volumeInfo.previewLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#333', textDecoration: 'none' }}
                  >
                    {livro.volumeInfo.previewLink}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
