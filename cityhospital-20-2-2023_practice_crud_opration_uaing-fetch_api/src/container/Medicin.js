import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import List from '../Component/List/List';



function Medicin(props) {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState();
    const [sortData, setSortData] = useState();
    const [sort, setSort] = useState();
    // const [users, setUsers] = useState([
    //     { id: 1, name: "One" },
    //     { id: 2, name: "Two" },
    //     { id: 3, name: "Three" }
    // ]);
    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medicine"));

        if (localData !== null) {
            setData(localData)
            console.log(setData)
        }
    }, []);

    const handlefilter = (val) => {
        if (val !== '') {
            let fData = data.filter((d) => (
                d.name.toLowerCase().includes(val.toLowerCase()) ||
                d.price.toString().includes(val) ||
                d.quantity.toString().includes(val)
            ))
            setFilterData(fData)

        } else {
            setFilterData()
            sorting(sort, 'yes');
        }
    }

    // const sorting = (val, empty='') => {
    //     let FData = filterData && empty === '' ? filterData : data;

    //     setSort(val);
    //     if (val !== '0') {
    //         let sData = FData.sort((a, b) => {
    //             if (val === 'lh') {
    //                 return a.price - b.price
    //             } else if (val === 'hl') {
    //                 return b.price - a.price
    //             } else if (val === 'az') {
    //                 return a.name.localeCompare(b.name);
    //             } else if (val === 'za') {
    //                 return b.name.localeCompare(a.name);
    //             }
    //         });
    //         setSortData(sData)
    //         console.log(sData);
    //     } else {
    //         setSortData();
    //     }
    // }

    const sorting = (val, empty = '') => {
        let FData = filterData && empty === '' ? filterData : data;
        setSort(val)
        console.log(val)
        if (val !== 0) {
            let sData = FData.sort((a, b) => {
                if (val === "hl") {
                    return b.price - a.price
                } else if (val === "lh") {
                    return a.price - b.price
                } else if (val === 'az') {
                    return a.name.localeCompare(b.name)
                } else if (val === "za") {
                    return b.name.localeCompare(a.name)
                } else if (val === "qh") {
                    return b.quantity - a.quantity
                } else if (val === "ql") {
                    return a.quantity - b.quantity
                } else if (val === 'eh') {
                    return a.expiry > b.expiry ? 1 : -1
                } else if(val === "el"){
                    return b.expiry > a.expiry ? 1 : -1
                }
            })
            console.log(sData)
            setSortData(sData)
        } else {

        }
    }

    // const sorting = (e) => {

    //     const sortDirection = e.target.value;
    //     // console.log(sortDirection);
    //     const copyArray = [...data];
    //     console.log(copyArray);
    //     copyArray.sort((a, b) => {
    //         // return sortDirection === "0" ? a.price - b.price : b.price - a.price;
    //         if (sortDirection === "0") {
    //             return a.price - b.price;
    //         } else if (sortDirection === "1") {
    //             // alert("")
    //             return b.price - a.price;
    //         } else if (sortDirection === "2") {
    //             // alert("2")
    //             // alert("")
    //            let p =  a.name.localeCompare(b.name);
    //            console.log("hii");
    //             // alert("1")
    //             //    if (val === "name") {
    //             //     return a.name.localeCompare(b.name)
    //         }


    //         console.log(sortDirection);
    //     });
    //     setData(copyArray);
    // }

    let finalData = filterData ? filterData : sortData ? sortData : data;

    return (
        <>
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <h2>Medicin</h2>
                        <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                            tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                            ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
                    </div>

                    {/* <input
                        type={'text'}
                        name="search"
                        placeholder='Search....'
                        onChange={(e) => handleFilter(e.target.value)}
                    /> */}
                    <div className="d-flex gap-5 mt-3" >
                        <FormControl fullWidth>
                            {/* <InputLabel id="demo-simple-select-label">Sorting</InputLabel> */}
                            <select defaultValue={0} value={sort} onChange={(e) => sorting(e.target.value)}>
                                <option value="0">--Select Sorting--</option>
                                <option value='hl'>High to Low</option>
                                <option value='lh'>Low to High</option>
                                <option value='az'>A to Z</option>
                                <option value='za'>Z to A</option>
                                <option value='qh'>High to Low quantity</option>
                                <option value='ql'>Low to High quantity</option>
                                <option value='eh'>Low to High Expiry</option>
                                <option value='el'>High to Low Expiry</option>
                            </select>
                        </FormControl>

                        <input
                            type={"text"}
                            name="search"
                            placeholder='Seach...'
                            onChange={(e) => handlefilter(e.target.value)}
                        />

                    </div>
                    {/* {finalData.map((finalData) => (

                        <div key={finalData.price}>
                            {finalData.name} - {finalData.price}
                        </div>
                    ))} */}
                    <List listdata={finalData} />

                </div>
            </section>
        </>
    );
}

export default Medicin;