
import { defineStore } from 'pinia';
import axios from 'axios';

export const useDataStore = defineStore('dataStore', {
  state: () => ({
    data: [],
  }),
  actions: {
    async fetchData() {
      try {
        const response = await axios.get('https://drive.google.com/file/d/1mqj81uSRTb7rMdpSNfywYEZquXeZSK2c/view');
        this.data = response.data;
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    },
  },
});
