import * as React from 'react';
import {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {MenuItem} from "@mui/material";
import {Select} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {ethers} from "ethers";
import {liquidStakingContractABI, liquidStakingContractAddress} from "../AppConstants";
import {filterClaims} from "../Utils/claimUtils";
import {useMoralis} from "react-moralis";
import {Divider} from "antd";
import _ from 'lodash';
import {STK_AVAX_BALANCE} from "../Reducers";

function createData(id, claimAmount, deadline) {
    return {id, claimAmount, deadline};
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0,),
    createData('Ice cream sandwich', 237, 10),
    createData('Eclair', 262, 16.0,),
    createData('Cupcake', 305, 3.7,),
    createData('Gingerbread', 356, 16.0,),
    createData('Frozen yoghurt', 159, 6.0,),
    createData('Ice cream sandwich', 237, 9.0,),
    createData('Eclair', 262, 16.0,),
    createData('Cupcake', 305, 3.7,),
    createData('Gingerbread', 356, 16.0,),
    createData('Frozen yoghurt', 159, 6.0,),
    createData('Ice cream sandwich', 237, 10),
    createData('Eclair', 262, 16.0,),
    createData('Cupcake', 305, 3.7,),
    createData('Gingerbread', 356, 16.0,),
    createData('Frozen yoghurt', 159, 6.0,),
    createData('Ice cream sandwich', 237, 9.0,),
    createData('Eclair', 262, 16.0,),
    createData('Cupcake', 305, 3.7,),
    createData('Gingerbread', 356, 16.0,),
];

const DropDown = (props) => {

    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChange = (e) => {
        // console.log(e.target.value)
        setRowsPerPage(e.target.value)
        props.setRowsPerPage(e.target.value)
    }

    return (
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={rowsPerPage}
            label="Age"
            onChange={handleChange}
        >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>25</MenuItem>
        </Select>
    )
}

const PaginationComponent = (props) => {
    return (
        <div>
            Rows per page: <DropDown setRowsPerPage={props.setRowsPerPage}/>
        </div>
    )
}

export function ClaimTableComponent() {

    const {
        account,
    } = useMoralis();

    const [claims, setClaims] = useState([])

    const xAvaxBalance = useSelector((state) => state[STK_AVAX_BALANCE])

    console.log({account})

    const dispatch = useDispatch()

    const fetch = async () => {
        try {
            const {ethereum} = window
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const liquidStakingContract = new ethers.Contract(liquidStakingContractAddress, liquidStakingContractABI, signer);
            const data = await liquidStakingContract.claims(account);
            setClaims(filterClaims(data))

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        // dispatch(fetchClaimTickets(account))
        fetch()
    }, [xAvaxBalance])

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0)


    const handleChangePage = (e) => {
    }

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(e.target.value)
    }

    console.log({claims})

    if (_.isEmpty(claims)) {
        return (<></>)
    }


    return (
        <>
            <Divider orientation="left" plain style={{color: "white", borderColor: "#333333"}}/>
            <TableContainer component={Paper} sx={{maxHeight: 440, minWidth: "100%"}}>
                <Table stickyHeader={true} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Ticket</TableCell>
                            <TableCell>Claim</TableCell>
                            <TableCell>Deadline</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {claims.map((row) => (
                            <TableRow>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.claimAmount} AVAX</TableCell>
                                <TableCell>{row["dateToClaim"].toString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}


