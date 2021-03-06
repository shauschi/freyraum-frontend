'use strict';
import {POST} from '../HttpUtils';
const baseURL = __API__;

export const updateSettings = preferenceData => POST(`${baseURL}/preferences/`, preferenceData);
