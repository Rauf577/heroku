import path from 'path';
import express from 'express';

class App {
    constructor() {
        this._app = express();
        this._app.use(express.json());
        this._app.use('/', express.static(path.resolve(__dirname, '../public')));

        // this._app.get('/persons', this.onGet);
        // this._app.put('/persons', this.onPut);
        // this._app.post('/persons', this.onPost);
    }

    onGet = (request, response) => {
        const lines = [
            { color: '#333', thickness: 3 }
        ];
        // const {body} = request;
        // const data = this._controller.getPersons();

        response.json(lines);
        response.end();
    }

    // onPut = (request, response) => {
    //     const {body} = request;
    //     this._controller.setPersons(body);
        
    //     response.end();
    // }

    // onPost = (request, response) => {
    //     const {body} = request;
        
    //     this._controller.saveFormat(body);
        
    //     response.end();
    // }

    getApp = () => {
        return this._app;
    }
}

export default App;