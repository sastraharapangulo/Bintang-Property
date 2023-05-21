import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { styled } from 'styled-components';
import bg from '../../assets/images/img_1.jpg';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 30vh;
  min-height: 350px;
  position: relative;
  background-image: url(${bg});
  background-repeat: repeat-x;
  background-attachment: fixed;
  background-position: bottom;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.primary[500]};
    opacity: 0.4;
  }
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 25px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.9);
    color: #ffffff;
    width: 100%;
    max-width: 500px;
    display: grid;
    align-items: center;
    text-align: center;

    .button {
      text-decoration: none;
      border: 1px solid ${({ theme }) => theme.secondary[500]};
      color: #ffffff;
      padding: 5px;
      height: fit-content;
      border-radius: 5px;
      font-weight: 500;
      &:hover {
        background-color: ${({ theme }) => theme.secondary[500]};
      }
    }

    .MuiButton-outlined {
      color: #ffffff;
    }
  }
`;

function SearchSection() {
  return (
    <Container>
      <div className="container">
        <div className="text">
          <h1 className="lh-1">Cari Property Yang Anda Inginkan Sekarang</h1>
          <p>
            Bintang Property mempunyai banyak sekali pilihan properti untukmu
          </p>
          <Link to="#saya" className="button">
            CARI PROPERTI
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default SearchSection;

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
//   const [tipeIklan, setTipeIklan] = useState('jual');
//   const [tipeProperty, setTipeProperty] = useState('');
//   const [minHarga, setMinHarga] = useState('');
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
