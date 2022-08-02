import React from 'react'

const DataTables = () => {


  return (
    <div className='p-5'>
      <form class="form-inline d-flex flex-row-reverse form-sm mb-3">
        <input class="form-control form-control-sm mr-3 w-25" type="text" placeholder="Search"
        aria-label="Search" />
      <i class="fas fa-search" aria-hidden="true"></i>
</form>
      <table id="example" className="table table-striped table-bordered" style={{width: "100%"}} >
    <thead>
        <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011-04-25</td>
            <td>$320,800</td>
        </tr>
        <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011-04-25</td>
            <td>$320,800</td>
        </tr>
        <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011-04-25</td>
            <td>$320,800</td>
        </tr>
        </tbody>
        </table>
        </div>
  )
}

export default DataTables