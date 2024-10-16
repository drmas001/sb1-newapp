import axios from 'axios';
import { Patient, MedicalNote } from '../types';

const API_URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api';

export const api = {
  // ... (keep all your existing api methods here)
};