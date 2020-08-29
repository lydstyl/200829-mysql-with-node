const express = require('express')
const mysql = require('mysql')

// Create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql',
})

// Connect
db.connect((err) => {
  if (err) {
    throw err
  }

  console.log('MySql connected')
})

const app = express()

// Create DB
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE nodemysql'

  db.query(sql, (err, result) => {
    if (err) {
      throw err
    }

    console.log(result)
    res.send('Database nodemysql created ...')
  })
})

// Create posts table
app.get('/createpoststable', (req, res) => {
  let sql =
    'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'

  db.query(sql, (err, result) => {
    if (err) {
      throw err
    }

    console.log(result)
    res.send('Posts table created ...')
  })
})

// Insert post 1
app.get('/addpost1', (req, res) => {
  const post = { title: 'Post One', body: 'This is post number one' }

  const sql = 'INSERT INTO posts SET?'

  db.query(sql, post, (err, result) => {
    if (err) {
      throw err
    }

    console.log(result)
    res.send('Post 1 added ...')
  })
})

// Insert post 2
app.get('/addpost2', (req, res) => {
  const post = { title: 'Post Two', body: 'This is post number two' }

  const sql = 'INSERT INTO posts SET?'

  db.query(sql, post, (err, result) => {
    if (err) {
      throw err
    }

    console.log(result)
    res.send('Post 2 added ...')
  })
})

// Select posts
app.get('/getposts', (req, res) => {
  const sql = 'SELECT * FROM posts'

  db.query(sql, (err, result) => {
    if (err) {
      throw err
    }

    console.log(result)

    res.send('Posts fetched ...')
  })
})

// Select single post
app.get('/getpost/:id', (req, res) => {
  const sql = `SELECT * FROM posts WHERE id = ${req.params.id}`

  db.query(sql, (err, result) => {
    if (err) {
      throw err
    }

    console.log('result', result)

    res.send('Post fetched ...')
  })
})

// Update post
app.get('/updatepost/:id', (req, res) => {
  const newTitle = 'Updated title'

  const sql = `UPDATE posts SET title='${newTitle}' WHERE id = ${req.params.id}`

  db.query(sql, (err, result) => {
    if (err) {
      throw err
    }

    console.log('result', result)

    res.send('Post updated ...')
  })
})

// Delete post
app.get('/deletepost/:id', (req, res) => {
  const sql = `DELETE FROM posts WHERE id = ${req.params.id}`

  db.query(sql, (err, result) => {
    if (err) {
      throw err
    }

    console.log('result', result)

    res.send('Post deleted ...')
  })
})

app.listen('3000', () => console.log('Server started on port 3000'))
