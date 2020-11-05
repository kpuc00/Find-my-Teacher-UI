import Axios from 'axios';
import React, { Component } from 'react'
import { FaRegHandScissors } from 'react-icons/fa';
import '../styles/components/map.css';
import ZoomInOutBtns from './Kris/ZoomInOutBtns'

export default class Map extends Component {
    constructor() {
        super()
        this.state = {
            floor: ["BG", "1e", "2e", "3e", "4e"],
            index: 0,
            content: "",
            currentfloor: "BG"
        }
        this.changeFloor = this.changeFloor.bind(this)
    }

    changeFloor() {
        const lenght = this.state.floor.length
        this.setState(
            state => {
                state.index += 1
            }
        )
        if (this.state.index > lenght - 1) {
            this.setState({
                index: 0
            })
        }

        this.setState(
            { currentfloor: this.state.floor[this.state.index] }
        )
        console.log(this.state.index)
        console.log(this.state.floor[this.state.index])
    }
    // componentDidMount() {
    //     const config = {
    //         headers: {
    //             'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjMwWi1QWk15ZURuZDFlTHdsa2Z2NEVBRWhtayIsImtpZCI6IjMwWi1QWk15ZURuZDFlTHdsa2Z2NEVBRWhtayJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE2MDQ1NzE1MDMsIm5iZiI6MTYwNDU2NDMwMywiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiNDIxMzBhNGYtYzc1YS00MzQ1LTkyZWEtNzg1Yjc3MDQ0ZTM0IiwiYXV0aF90aW1lIjoxNjA0NTY0MzAzLCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6Ikk0MjU1ODhAZmhpY3QubmwiLCJuYW1lIjoiSXZhbm92LFJvc3Rpc2xhdiBSLlIuIiwiZW1haWwiOiJyb3N0aXNsYXYuaXZhbm92QHN0dWRlbnQuZm9udHlzLm5sIiwidXJuOm5sLmZoaWN0OnNjaGVkdWxlIjoiY2xhc3N8UzMtQ0IwMiIsImZvbnR5c191cG4iOiI0MjU1ODhAc3R1ZGVudC5mb250eXMubmwiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.QcvQtTd6I2L9VKBbNbenghJXsnMz_DQgFFadARhlL9yg5jNLeBvUCuEGdm5mCxWfC6IwbJxMFLSK1CU7v8JRrMiMS5Da9T-6KKr8id4nR0XftkBiRACKFuvDtcxbjfbqyNfNQTiQfo65X8yKn8VqwJ4Ei9DWDUFWmPtr-0zfgB49jhMNyC8rBIjjKLjcbO4XqQoPoKkApl-YIymlJM6TEaiW2PGy2AF6eEkwBq49X5g1qap2NB1gBROeVN7M1BUJBoMx30i30Pm6OH0xSNG4ApRq0tTNa0mh9Eft7s50VcaKlMJ1NJdMjL2msdqu4mIDfqN4mUnAdE2NOcSGx_stIA',
    //             'Accept': 'image/png'
    //         }
    //     };
    //     Axios.get('https://api.fhict.nl/location/mapimage/EHV/R10/2e', config)
    //         .then(
    //             res => {
    //                 const image = res.data
    //                 console.log(res.data)
    //                 this.setState({
    //                     image: image
    //                 })
    //             },
    //             error => {
    //                 this.setState({
    //                     content:
    //                         (error.response &&
    //                             error.response.data &&
    //                             error.response.data.message) ||
    //                         error.message ||
    //                         error.toString()
    //                 });
    //             }
    //         )
    // }


    render() {
        //console.log(this.state.image)

        return (
            <div>
                <h3>R10</h3>
                <img src={`https://api.fhict.nl/location/mapimage/EHV/R10/${this.state.currentfloor}`} width="100%" alt="floor map" />
                <br /><br /><br />
                <ZoomInOutBtns map={this.changeFloor} />
            </div>
        )
    }
}
