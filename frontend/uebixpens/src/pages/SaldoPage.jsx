import React, { useEffect, useState } from 'react';
import BodySaldo from '../components/saldo/BodySaldo'
import CabeceraSaldo from '../components/saldo/CabeceraSaldo'

const SaldoPage = () => {

  const [expendMonth, setExpendMonth] = useState([]);
  const [amountTotalMonth, setAmountTotalMonth] = useState(0);

  const[ingreso, setIngreso] = useState(857.83);
  

  useEffect(() => {
        let url = 'http://localhost:4000/api/gastos/';

        const getTotalExpend = (data) => {
            let dateNow = new Date();
            var firstDay = new Date(dateNow.getFullYear(), dateNow.getMonth(), 1);
            var lastDay = new Date(dateNow.getFullYear(), dateNow.getMonth() + 1, 0);
            let valorTotal = 0;
            data.map(gasto => {
                var dateGasto = new Date(gasto.fecha);
                if (dateGasto > firstDay && dateGasto < lastDay) {
                    valorTotal = valorTotal + gasto.valor;
                }
            })
            setAmountTotalMonth(valorTotal);
        }

        const getData = async (url) => {
            let res = await fetch(url,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
            let data = await res.json();
            setExpendMonth(data);
            getTotalExpend(data);
        }

        getData(url);
  }, []);

  


  return (
    <>
      <CabeceraSaldo />
      <BodySaldo gastoTotal={amountTotalMonth} ingreso={ingreso} />
    </>
  )
}

export default SaldoPage