import React from "react";
import MUIDataTable from "mui-datatables";
import { Button, FormControlLabel, Link, Switch } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styledComponents from "styled-components";
import { styled } from "@mui/material/styles";

const AccessButton = styledComponents.div`
    background: rgba(39, 174, 96, 0.3);
    /* Green 2 */
    width: 100%;
    padding: 5px 10px;
    border: 1px solid #27ae60;
    text-align: center;
    box-sizing: border-box;
    border-radius: 20px;
`;
const DeniedButton = styledComponents.div`
    width: 100%;
    padding: 5px 10px;
    text-align: center;
    background: rgba(255, 8, 8, 0.3);
    /* expensive */

    border: 1px solid #ff0808;
    box-sizing: border-box;
    border-radius: 20px;
`;
const TotalDeniedButton = styledComponents.div`
    width: 100%;
    padding: 5px 10px;
    text-align: center;
    background: #F2F2F2;
    /* Gray 4 */
    
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 20px;
`;
const IOSSwitch = styled((props) => (
    <Switch
        focusVisibleClassName='.Mui-focusVisible'
        disableRipple
        {...props}
    />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 2,
        transitionDuration: "300ms",
        "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                backgroundColor:
                    theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
                opacity: 1,
                border: 0,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
            },
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: "#33cf4d",
            border: "6px solid #fff",
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
            color:
                theme.palette.mode === "light"
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        "&.Mui-disabled + .MuiSwitch-track": {
            opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
        },
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 22,
        height: 22,
    },
    "& .MuiSwitch-track": {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
            duration: 500,
        }),
    },
}));
const columns = [
    {
        name: "dropdown",
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
        align: "center",
        width: 40,
        renderCell: (cellValues) => {
            return (
                <>
                    <AddCircleOutlineIcon />
                </>
            );
        },
    },
    {
        name: "Deparment/Role Name",
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
        align: "center",
        width: 240,
    },
    {
        name: "Access Level",
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
        align: "center",
        width: 200,
        renderCell: (cellValues) => {
            return (
                <>
                    {cellValues.formattedValue === true ? (
                        <AccessButton variant='contained' color='primary'>
                            All Access
                        </AccessButton>
                    ) : cellValues.formattedValue === null ? (
                        <TotalDeniedButton variant='contained' color='primary'>
                            No Access
                        </TotalDeniedButton>
                    ) : (
                        <DeniedButton variant='contained' color='primary'>
                            Restricted Access
                        </DeniedButton>
                    )}
                </>
            );
        },
    },
    {
        name: "Summary",
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
        align: "center",
        width: 240,
    },
    {
        name: "Last Updated",
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
        align: "center",
        width: 140,
    },
    {
        name: ".",
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
        align: "center",
        width: 140,
        renderCell: (cellValues) => {
            return (
                <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                />
            );
        },
    },
];

const rows = [
    {
        id: 1,
        "Deparment/Role Name": "Enrolling Students",
        "Access Level": true,
        "No of Members": 4,
        "Last Updated": "1 min ago",
        View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
    },
    {
        id: 2,
        "Deparment/Role Name": "Financial Details",
        "Access Level": null,
        "No of Members": 8,
        "Last Updated": "1 min ago",
        View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
    },
    {
        id: 3,
        "Deparment/Role Name": "Furniture order",
        "Access Level": false,
        "No of Members": 16,
        "Last Updated": "1 min ago",
        View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
    },
    {
        id: 4,
        "Deparment/Role Name": "Technological Equipment",
        "Access Level": false,
        "No of Members": 4,
        "Last Updated": "1 min ago",
        View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
    },
    {
        id: 4,
        "Deparment/Role Name": "Organisational Modification",
        "Access Level": true,
        "No of Members": 1,
        "Last Updated": "1 min ago",
        View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
    },
    {
        id: 4,
        "Deparment/Role Name": "Permissions & Access Control",
        "Access Level": null,
        "No of Members": 1,
        "Last Updated": "1 min ago",
        View: "https://pbs.twimg.com/media/FCpJ6DgUcAMlsEX.jpg",
    },
];
// const Card = () => (
//   <tr>
//     <td className="fullWidth">
//       <h1>
//         lorem ipsum dorel em quol acee, vion, bloolw, wafeo, feiwjfoiew,
//         foiwejifowefjweoi, fewjoewjfowei, fwefwefewfewfewf
//       </h1>
//     </td>
//   </tr>
// );

const TableThree = (props) => {
    const columns = [
        {
            name: "dropdown",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 40,
            renderCell: (cellValues) => {
                return (
                    <>
                        <AddCircleOutlineIcon />
                    </>
                );
            },
        },
        {
            name: "Deparment/Role Name",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 240,
        },
        {
            name: "Access Level",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 200,
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    console.log(value);
                    return (
                        <>
                            {value === true ? (
                                <AccessButton variant='contained' color='primary'>
                                    All Access
                                </AccessButton>
                            ) : value === null ? (
                                <TotalDeniedButton variant='contained' color='primary'>
                                    No Access
                                </TotalDeniedButton>
                            ) : (
                                <DeniedButton variant='contained' color='primary'>
                                    Restricted Access
                                </DeniedButton>
                            )}
                        </>
                    );;
                 
                },
              },
            customRowRender: (cellValues) => {
                return (
                    <>
                        {cellValues.formattedValue === true ? (
                            <AccessButton variant='contained' color='primary'>
                                All Access
                            </AccessButton>
                        ) : cellValues.formattedValue === null ? (
                            <TotalDeniedButton variant='contained' color='primary'>
                                No Access
                            </TotalDeniedButton>
                        ) : (
                            <DeniedButton variant='contained' color='primary'>
                                Restricted Access
                            </DeniedButton>
                        )}
                    </>
                );
            },
        },
        {
            name: "Summary",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 240,
        },
        {
            name: "Last Updated",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 140,
        },
        {
            name: ".",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            align: "center",
            width: 140,
            renderCell: (cellValues) => {
                return (
                    <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    />
                );
            },
        },
    ];
    const data = [
        ["Gabby George", "Business Analyst", "Minneapolis", 30, 100000],
        ["Business Analyst", "Business Consultant", "Dallas", 55, 200000],
        ["Jaden Collins", "Attorney", "Santa Ana", 27, 500000],
        ["Franky Rees", "Business Analyst", "St. Petersburg", 22, 50000],
        ["Aaren Rose", "Business Consultant", "Toledo", 28, 75000],
        ["Blake Duncan", "Business Management Analyst", "San Diego", 65, 94000],
        ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, 210000],
        ["Lane Wilson", "Commercial Specialist", "Omaha", 19, 65000],
        ["Robin Duncan", "Business Analyst", "Los Angeles", 20, 77000],
        ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, 135000],
        ["Harper White", "Attorney", "Pittsburgh", 52, 420000],
        ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, 150000],
        ["Frankie Long", "Industrial Analyst", "Austin", 31, 170000],
        ["Brynn Robbins", "Business Analyst", "Norfolk", 22, 90000],
        ["Justice Mann", "Business Consultant", "Chicago", 24, 133000],
        [
            "Addison Navarro",
            "Business Management Analyst",
            "New York",
            50,
            295000,
        ],
        ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, 200000],
        ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, 400000],
        ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, 110000],
        ["Danny Leon", "Computer Scientist", "Newark", 60, 220000],
        ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, 180000],
        ["Jesse Hall", "Business Analyst", "Baltimore", 44, 99000],
        ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, 90000],
        ["Terry Macdonald", "Commercial Specialist", "Miami", 39, 140000],
        ["Justice Mccarthy", "Attorney", "Tucson", 26, 330000],
        ["Silver Carey", "Computer Scientist", "Memphis", 47, 250000],
        ["Franky Miles", "Industrial Analyst", "Buffalo", 49, 190000],
        ["Glen Nixon", "Corporate Counselor", "Arlington", 44, 80000],
        [
            "Gabby Strickland",
            "Business Process Consultant",
            "Scottsdale",
            26,
            45000,
        ],
        ["Mason Ray", "Computer Scientist", "San Francisco", 39, 142000],
    ];

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    // const rows = [
    //     createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    //     createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    //     createData("Eclair", 262, 16.0, 24, 6.0),
    //     createData("Cupcake", 305, 3.7, 67, 4.3),
    //     createData("Gingerbread", 356, 16.0, 49, 3.9),
    // ];

    const options = {
        filter: true,
        onFilterChange: (changedColumn, filterList) => {
            console.log(changedColumn, filterList);
        },
        selectableRows: "single",
        filterType: "dropdown",
        responsive: "scrollMaxHeight",
        rowsPerPage: 10,
        expandableRows: true,
        renderExpandableRow: (rowData, rowMeta) => {
            console.log(rowData, rowMeta);
            return (
                <React.Fragment>
                    ji
                </React.Fragment>
            );
        },
        page: 1,
    };

    return (
        <MUIDataTable
            data={rows}
            columns={columns}
            options={options}
        />
    );
};

export default TableThree;
