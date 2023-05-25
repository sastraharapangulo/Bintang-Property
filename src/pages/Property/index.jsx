import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Card from '../../components/Card';
import { TuneOutlined } from '@mui/icons-material';
import { Box, Divider, MenuItem, Select, Tab } from '@mui/material';
import { Tabs } from 'react-bootstrap';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import FilterModal from './filter';
import RadioInput from '../../components/RadioInput';
import PropertyData from '../../assets/data/Property';

const Container = styled.div`
  .sort-by {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
      width: 0px;
      background: transparent; /* make scrollbar transparent */
    }
  }
  .radio {
    display: none;

    &:checked + label {
      /* Gaya ketika input radio dipilih */
      background-color: #e0e0e0;
      color: ${({ theme }) => theme.primary[500]};
    }
  }
  .label {
    display: inline-block;
    padding: 5px 10px;
    background-color: #ffffff;
    border-radius: 10px 10px 0 0;
    color: #000000;
    cursor: pointer;
  }

  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.primary[500]};
    color: #ffffff;
  }

  .MuiSelect-select {
    padding: 0 5px;
  }
`;

function Property() {
  const [value, setValue] = useState('terbaru');
  const [showModal, setShowModal] = useState(false);
  const [changed, setChanged] = useState([]);
  let data = PropertyData.data;

  const [formData, setFormData] = useState({
    adType: 'dijual',
    period: '',
    propertyType: '',
    condition: '',
    minPrice: 0,
    maxPrice: 0,
    minLT: 0,
    maxLT: 0,
    minLB: 0,
    maxLB: 0,
    minBedRoom: 0,
    minBathRoom: 0,
    // tambahkan input lainnya sesuai kebutuhan
  });

  useEffect(() => {
    if (formData.adType === 'disewa') {
      setFormData((prevData) => ({
        ...prevData,
        condition: '',
      }));
    } else if (formData.adType === 'dijual') {
      setFormData((prevData) => ({
        ...prevData,
        period: '',
      }));
    }
  }, [formData.adType]);

  const onFilter = () => {
    // Logika filter yang sesuai dengan kebutuhan Anda
    const filteredData = Object.entries(formData).filter(([name, value]) => {
      // Contoh: Menyaring variabel yang memiliki nilai lebih dari 0
      return value !== 0 && value !== '';
    });

    // Menyimpan variabel yang telah difilter ke state
    setChanged(filteredData);
  };

  const handleTabChange = (event) => {
    setValue(event.target.value);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="container mt-3 ">
      <div className="searchInput d-flex gap-2">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-danger" type="submit">
          Search
        </button>
      </div>

      <div className="d-flex flex-wrap gap-1 text-muted">
        {changed.map(([name, value]) => (
          <div key={name}>
            <span>
              {name}: {value} |
            </span>
          </div>
        ))}
      </div>

      <div className="filter mt-2 text-center">
        <div className="d-flex gap-2 flex-wrap">
          <button
            type="button"
            className="btn btn-danger align-item-center"
            onClick={handleShowModal}
          >
            <TuneOutlined fontSize="small" />
            Filter
          </button>
          {/* <Select
            value={formData.adType}
            name="adType"
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{}}
          >
            <MenuItem value="dijual">Dijual</MenuItem>
            <MenuItem value="disewa">Disewa</MenuItem>
          </Select> */}
          <div className="sort-by">
            <RadioInput
              className="radio"
              id="terbaru"
              name="tabs"
              value="terbaru"
              checked={value === 'terbaru'}
              onChange={handleTabChange}
              label="Property Terbaru"
            />
            <RadioInput
              className="radio"
              id="tertinggi"
              name="tabs"
              value="tertinggi"
              checked={value === 'tertinggi'}
              onChange={handleTabChange}
              label="Harga Tertinggi"
            />
            <RadioInput
              className="radio"
              id="terendah"
              name="tabs"
              value="terendah"
              checked={value === 'terendah'}
              onChange={handleTabChange}
              label="Harga Terendah"
            />
          </div>
        </div>
      </div>

      {showModal && (
        <FilterModal
          onClose={handleCloseModal}
          formData={formData}
          setFormData={setFormData}
          onFilter={onFilter}
        />
      )}

      <div
        className="d-flex gap-2 flex-wrap justify-content-around "
        style={{ backgroundColor: '#e0e0e0', padding: '20px 10px' }}
      >
        {data.map((item) => (
          <div key={item.id}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Property;
