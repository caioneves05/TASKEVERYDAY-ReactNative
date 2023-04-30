import db from "./sqlitedatabase.js";



async function create(obj) {

    await db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT);"
        );
      });
      

    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
        //comando SQL modificável
        tx.executeSql(
            "INSERT INTO tasks (title, description) values (?, ?);",
            [obj.title, obj.description],
            //-----------------------
            (_, { rowsAffected, insertId }) => {
                if (rowsAffected > 0) resolve(insertId);
                else reject("Error inserting obj: " + JSON.stringify(obj)); // insert falhou
                },
                (_, error) => reject(error) // erro interno em tx.executeSql
            );
        });
    });
};

export default create
