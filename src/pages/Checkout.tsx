import { useState } from "react"
import { useParams } from "react-router-dom"

export default function Checkout() {
    const { id } = useParams<{ id: string }>()
    const exspedisi = ["jnt","jne","sicepat","anteraja","lion","sap","pos","ide"]
    const [order,setOrder] = useState({
        username:"",
        email:"",
        no_wa:"",
        address:"",
        detail_address:"",
        total_price:0,
        ongkir:0,
        items:[]
    })

    async function handleSubmitOngkir(e: Event) {
        try {

        } catch (err) {

        }
    }

    return (
        <>
        </>
    )
}