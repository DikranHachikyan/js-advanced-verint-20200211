class CSVReader{
    readColumns(filename,...cols){
        console.log(`read from ${filename} columns:${cols}`);
    }
}

class SQLReader{
    execute(query){
        console.log(`execute ${query}`);
    }
}

class SQLReaderAdapter{
    constructor(reader){
        this.reader = reader;
    }

    readColumns(filename,...cols){
        this.reader.execute(`SELECT ${cols} FROM ${filename}`);
    }
}

(()=>{
    const fileReader = new CSVReader();
    const sqlData = new SQLReaderAdapter( new SQLReader());

    [fileReader,sqlData].forEach((r)=>{
        r.readColumns('employees', 'firstname','lastname','salary');
        console.log('----------------------');
    });
})();