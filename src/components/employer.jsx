import { useMemo , useState , useEffect } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




const Employer = () => {

  const datatest = useSelector((state) => state.employeeState.data);
  console.log(datatest);

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName', //access nested data with dot notation
        header: 'First Name',
        size: 100,
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        size: 100,
      },
      {
        accessorKey: 'street', 
        header: 'Street',
        size: 100,
      },

      {
        accessorKey: 'city',
        header: 'City',
        size: 100,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 100,
      },

      {
        accessorKey: 'zipCode',
        header: 'Zip Code',
        size: 100,
      },

      {
        accessorKey: 'department',
        header: 'Department',
        size: 100,
      },

      {
        accessorKey: 'dateOfBirth',
        header: 'Date of Birt',
        size: 100,
      },


      {
        accessorKey: 'startDate',
        header: 'Start Date',
        size: 100,
      },

    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data: datatest, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return (
  <div>
    <h1 className='font-bold text-[x-large] '>Current Employees</h1>
       <MaterialReactTable table={table} />
       <Link to="/">Home</Link>
  </div>
);
};

export default Employer;
