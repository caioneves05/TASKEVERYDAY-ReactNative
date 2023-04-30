import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("db.tasks")

export default db