import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import {
  SearchInput,
  Pane,
  Table,
  Icon,
  SideSheet,
  Paragraph,
  Heading,
  Card
} from 'evergreen-ui'
import Highlight from 'react-highlighter'

class App extends Component {
  state = {
    input: '',
    data: [],
    isShown: false,
    content: {},
    token: []
  }

  change = e => {
    this.setState({
      input: e.target.value
    })
  }

  submit = e => {
    e.preventDefault()
    const { input } = this.state
    fetch(`http://localhost:5500/?query=${input}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data.data,
          token: data.token
        })
      })
      .catch(err => console.log(err))
  }
  showContent = value => {
    fetch(`http://localhost:5500/content?file=${value}`)
      .then(res => res.json())
      .then(data => {
        const newdata = data.data
        const content = {
          value,
          data: newdata
        }
        this.setState({
          content,
          isShown: true
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    const { input, data, isShown, content, token } = this.state
    console.log(token)
    const reg = token.join('|').replace(/['"]+/g, '/')
    console.log(reg)
    return (
      <React.Fragment>
        <div className="App">
          <h1 data-shadow="Mr.Lazy">Mr.Lazy</h1>
          <div style={{ marginTop: 25 }}>
            <form onSubmit={this.submit}>
              <SearchInput
                onChange={this.change}
                value={input}
                height={55}
                placeholder="Nhập từ tìm kiếm..."
                style={{
                  fontSize: 16,
                  boxShadow:
                    '0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)'
                }}
                width="100%"
              />
            </form>
            <span
              style={{
                position: 'absolute',
                top: 15,
                right: 20
              }}
            >
              Có {data.length} kết quả
            </span>
          </div>
          <Pane
            style={{
              borderRadius: 2,
              margin: '25px 0',
              backgroundColor: '#ffffff',
              boxShadow:
                '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)'
            }}
          >
            <Table.Body height={240}>
              {data.map((item, i) => (
                <Table.Row
                  key={i}
                  isSelectable
                  onSelect={() => this.showContent(item.file)}
                  // intent={intent}
                >
                  <Table.Cell>
                    <Icon icon="sim-card" color="success" marginRight={10} />
                    {item.file}
                  </Table.Cell>
                  <Table.TextCell isNumber>
                    {item.cosine.toFixed(2)}
                  </Table.TextCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Pane>
        </div>

        {content && (
          <SideSheet
            isShown={isShown}
            onCloseComplete={() => this.setState({ isShown: false })}
            containerProps={{
              display: 'flex',
              flex: '1',
              flexDirection: 'column'
            }}
          >
            <Pane
              zIndex={1}
              flexShrink={0}
              elevation={0}
              backgroundColor="white"
            >
              <Pane padding={16}>
                <Heading size={600}>{content.value}</Heading>
              </Pane>
            </Pane>
            <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
              <Card
                backgroundColor="white"
                elevation={0}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Paragraph style={{ whiteSpace: 'pre-line', padding: 20 }}>
                  <Highlight search={new RegExp(reg)}>{content.data}</Highlight>
                </Paragraph>
              </Card>
            </Pane>
          </SideSheet>
        )}
      </React.Fragment>
    )
  }
}

export default App
