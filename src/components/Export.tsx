import React from "react";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx'

import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

type productsByMinute = {
    products: number,
    timeToEnd: number
}


interface Props {
    csvData: Array<productsByMinute>,
    fileName: string
}

export default function ExportToExcel({csvData, fileName}:Props) {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToExcel = (csvData:productsByMinute[], fileName:string) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    return (
        <Button color="success" onClick={(e) => exportToExcel(csvData,fileName)}>Download</Button>
    )
} 
