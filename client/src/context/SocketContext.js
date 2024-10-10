import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

// Cria o contexto
const SocketContext = createContext();

export const useSocket = () => {
    return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
    const socket = useRef();
    const [isConnected, setIsConnected] = useState(false); // Estado para saber se o socket está conectado

    useEffect(() => {
        // Conecta ao socket quando o componente for montado
        socket.current = io("ws://localhost:8800");
        setIsConnected(true); // Marca como conectado

        return () => {
            // Limpa a conexão do socket quando o componente for desmontado
            socket.current.disconnect();
            setIsConnected(false); // Marca como desconectado
        };
    }, []);

    const value = {
        socket: socket.current,
    };

    return (
        <SocketContext.Provider value={value}>
            {isConnected ? children : null}
        </SocketContext.Provider>
    );
};
