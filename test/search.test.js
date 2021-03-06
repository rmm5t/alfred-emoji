'use strict'

const test = require('tap').test
const search = require('../src/search')

test('finds "thumbs up"', (t) => {
  t.plan(1)
  const found = search('thumbs up')
  t.ok(Object.keys(found.items).length > 0)
})

test('finds "thu" partial', (t) => {
  t.plan(1)
  const found = search('thu')
  t.ok(Object.keys(found.items).length > 4)
})

test('finds "vomit"', (t) => {
  t.plan(1)
  const found = search('vomit')
  t.ok(Object.keys(found.items).length > 0)
})
