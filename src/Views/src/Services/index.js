import api from './api'
import socket from './socket.io'
import * as storage from './sessionStorage';
import proute from './privateRoute';

export const Api = api
export const Storage = storage
export const io = socket
export const PrivateRoute = proute;