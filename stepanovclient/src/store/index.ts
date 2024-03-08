import {makeAutoObservable} from "mobx"
import axios from 'axios';

export default class Store {
    isAuth = false;
    isLoading = false;
    static isAuth: boolean;
  
    setAuth(bool:boolean){
        this.isAuth = bool;
    }
    constructor() {
      makeAutoObservable(this);
    }
  
    
  }