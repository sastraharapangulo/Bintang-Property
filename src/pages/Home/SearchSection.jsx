import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { styled } from 'styled-components';

// const data = [
//   {
//     nama: 'sastra',
//     jabatan: 'ilmu',
//   },
//   {
//     nama: 'sastra2',
//     jabatan: 'komputer',
//   },
//   {
//     nama: 'sastra3',
//     jabatan: 'ilmu',
//   },
//   {
//     nama: 'sastra4',
//     jabatan: 'Kom',
//   },
// ];

// const filterData = (item) => {
//   return item.nama.includes(namas) && item.jabatan === 'jabatans';
// };

const Container = styled.div`
  /* .row {
    border: 1px solid #4e2ab2;
  }
  .col {
    padding: 10px;
  } */
`;

function SearchSection() {
  //   const [tipeIklan, setTipeIklan] = useState('jual');
  //   const [tipeProperty, setTipeProperty] = useState('');
  //   const [minHarga, setMinHarga] = useState('');

  return <Container className="container"></Container>;
}

export default SearchSection;

// <div>
//   {data.filter(filterData).map((item, i) => (
//     <h1 key={i}>{item.nama}</h1>
//   ))}
// </div>
{
  /* <h3>Cari Property</h3>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3 col">
          <h6>Tipe Iklan</h6>
          <FormControl
            sx={{
              m: 1,
              width: '100%',
              minWidth: 120,
              margin: 0,
            }}
          >
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={tipeIklan}
              onChange={(e) => setTipeIklan(e.target.value)}
            >
              <MenuItem value={'jual'}>Dijual</MenuItem>
              <MenuItem value={'sewa'}>Disewa</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-12 col-sm-6 col-md-3 col">
          <h6>Tipe Properti</h6>
          <FormControl
            sx={{
              m: 1,
              width: '100%',
              minWidth: 120,
              margin: 0,
            }}
          >
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={tipeProperty}
              displayEmpty
              onChange={(e) => setTipeProperty(e.target.value)}
            >
              <MenuItem value="">
                <em>Pilih Tipe Properti</em>
              </MenuItem>
              <MenuItem value={'jual'}>Dijual</MenuItem>
              <MenuItem value={'sewa'}>Disewa</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-12 col-sm-6 col-md-3 col">
          <FormControl
            sx={{
              m: 1,
              width: '100%',
              minWidth: 120,
              margin: 0,
            }}
          >
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={tipeIklan}
              onChange={(e) => setTipeIklan(e.target.value)}
            >
              <MenuItem value="">
                <em>Pilih Tipe Property</em>
              </MenuItem>
              <MenuItem value={'jual'}>Dijual</MenuItem>
              <MenuItem value={'sewa'}>Disewa</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-12 col-sm-6 col-md-3 col">
          <FormControl
            sx={{
              m: 1,
              width: '100%',
              minWidth: 120,
              margin: 0,
            }}
          >
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={tipeIklan}
              onChange={(e) => setTipeIklan(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'jual'}>Dijual</MenuItem>
              <MenuItem value={'sewa'}>Disewa</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div> */
}
