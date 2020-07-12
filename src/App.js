import React, {useState, useEffect} from 'react';
import axios from 'axios'

import { Container } from '@material-ui/core'
import Cards from './component/Card'
import Header from './component/Header'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const parser = new DOMParser();

function App() {
  
  const [contents, setContents] = useState([])
  const headerUrl = "https://cors-anywhere.herokuapp.com/"
  const urlList = [
    'https://www.lifehacker.jp/feed/index.xml',
    'https://note.com/masayuki_shindo/rss',
  ]

  const createStyles = makeStyles({
    gridItem: {
      margin: 5,
     },
  })
  const classes = createStyles()
  
  useEffect(() => {
    urlList.map(url => {
      axios.get( headerUrl + url)
      .then(response => {
        const readData = parser.parseFromString(response.data, "text/xml")
        const dataList = readData.getElementsByTagName('channel')[0].getElementsByTagName('item')
        for (let i = 0; i < dataList.length; i++) {
          setContents(contents => [
            ...contents,
            {
              title: dataList[i].getElementsByTagName('title')[0].textContent,
              link: dataList[i].getElementsByTagName('link')[0].textContent,
            }
          ])
        }
      })
    })
  }, [])

  return (
      <Container maxWidth="md">
        <Header/>
        <Grid container>
          {contents.map(item => 
            <Grid key={item.title} item xs={12} className={classes.gridItem}>
              <Cards title={item.title} url={item.link}></Cards>
            </Grid>
            )}
        </Grid>
      </Container>
  );
}

export default App;
