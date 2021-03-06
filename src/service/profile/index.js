'use strict';
import {LOGIN, GET, POST, POST_IMAGE, GET_IMAGE} from '../HttpUtils';
const baseURL = __API__;

export const getProfile = id => GET(`${baseURL}/profile/${id}`);

export const getOwnProfile = () => GET(`${baseURL}/profile/own`);

export const getProfilePicture = (id, size) => GET_IMAGE(`${baseURL}/profile/${id}/picture/${size}`);

export const changeProfilePicture = image =>
  POST_IMAGE(`${baseURL}/profile/picture/change`, image);

export const login = LOGIN;

export const createAccount = (createData) => POST(`${baseURL}/profile/create`, createData);

export const getAllUsers = () => GET(`${baseURL}/profile/`);
