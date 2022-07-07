import { useState } from 'react';
import { Table, Button, Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import ExportToExcel from './Export';
import LineChart from './LineChart'

type productsByMinute = {
    products: number,
    timeToEnd: number
}

interface Props {
  data: Array<productsByMinute>,
}

export default function ReportTable({data}:Props){
  const fileName = 'time-report'
  const [isShown, setIsShown] = useState(false)

  const handleClick = () => setIsShown(!isShown)

    return (
      <div>
        <Container className='container'>
          <h2>{`Time to produce: ${data.length - 1} minutes`}</h2>
          <Table
          responsive
          bordered
          >
            <thead>
              <tr>
                <th>
                  Time To End (Minutes)
                </th>
                <th>
                  Products (Number)
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((produceByTime, idx) => 
                <tr key={idx}>
                  <th scope="row">
                    {produceByTime.timeToEnd}
                  </th>
                  <td>
                    {produceByTime.products}
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
          <div className='d-flex justify-content-around mt-3'>
            
          <ExportToExcel csvData={data} fileName={fileName}/>
          <Button
            color="primary"
            className="px-3"
            onClick={handleClick}
          >
            Display 
          </Button>
          </div>

          {
            isShown && <LineChart chartData={data}/>
          }
        </Container>     
      </div>
    );

}