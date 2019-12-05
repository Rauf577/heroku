import Server from './Server';

const init = () => {
    const port = process.env.PORT || 3000;
    const server = new Server(port);

    server.init();
}

init();