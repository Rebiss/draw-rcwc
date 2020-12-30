const connectionHandler = (ws, msg) => {
        ws.id = msg.id
        broadcastConnection(ws, msg)
    };

const broadcastConnection = (ws, msg) => {
        ws.clients.forEach(client => {
            if (client.id === msg.id) client.send(JSON.stringify(msg))
        })
    };

export const webSoket = (ws, req) => {
    ws.on('message', (msg) => {
        msg = JSON.parse(msg)
        switch (msg.method) {
            case "connection":
                connectionHandler(ws, msg)
                break
            case "draw":
                broadcastConnection(ws, msg)
                break
        }
    })
}