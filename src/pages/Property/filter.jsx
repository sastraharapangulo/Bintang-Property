import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import RadioInput from '../../components/RadioInput';
import { Divider, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  .back {
    position: absolute;

    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .filters {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: #ffffff;
    width: 90vw;
    max-width: 700px;
    max-height: 80vh;
    padding: 0 20px;
    border-radius: 20px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
      width: 0px;
      background: transparent; /* make scrollbar transparent */
    }

    .title {
      position: sticky;
      padding-top: 20px;
      background-color: #ffffff;
      top: 0;
      border-bottom: 2px solid #000000;
    }
    .content {
      height: 100vh;
    }
  }

  .radio-filter {
    display: none;

    &:checked + label {
      /* Gaya ketika input radio dipilih */
      background-color: ${({ theme }) => theme.primary[500]};
      color: #ffffff;
    }
  }
  .label {
    border: 1px solid ${({ theme }) => theme.primary[300]};
    padding: 3px 7px;
    margin: 0 5px 5px 0;
    border-radius: 10px !important;
  }
`;

const FilterModal = ({ onClose, onFilter, formData, setFormData }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeNumber = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: parseInt(value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilter();
    // Lakukan aksi yang diinginkan, misalnya mengirim data ke server
    console.log('Form data:', formData);
    onClose();
  };

  const handleReset = () => {
    setFormData({
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
    });
  };

  return (
    <Container>
      <div className="back" onClick={onClose}></div>
      <div className="filters">
        <div className="title d-flex justify-content-between">
          <h2>Filter Properti</h2>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="content mt-1 d-flex flex-column gap-2">
            <div className="tipe-iklan">
              <p className="fw-bold mb-0">Tipe Iklan</p>
              <RadioInput
                className="radio-filter"
                id="dijual"
                name="adType"
                value="dijual"
                checked={formData.adType === 'dijual'}
                onChange={handleChange}
                label="Dijual"
              />
              <RadioInput
                className="radio-filter"
                id="disewa"
                name="adType"
                value="disewa"
                checked={formData.adType === 'disewa'}
                onChange={handleChange}
                label="Disewa"
              />
            </div>

            {formData.adType === 'dijual' ? (
              <div className="kondisi">
                <p className="fw-bold mb-0">Kondisi</p>
                <RadioInput
                  className="radio-filter"
                  id="condition"
                  name="condition"
                  value=""
                  checked={formData.condition === ''}
                  onChange={handleChange}
                  label="Semua"
                />
                <RadioInput
                  className="radio-filter"
                  id="baru"
                  name="condition"
                  value="baru"
                  checked={formData.condition === 'baru'}
                  onChange={handleChange}
                  label="Properti Baru"
                />
                <RadioInput
                  className="radio-filter"
                  id="seken"
                  name="condition"
                  value="seken"
                  checked={formData.condition === 'seken'}
                  onChange={handleChange}
                  label="Properti Seken"
                />
              </div>
            ) : (
              <div className="periode-sewa">
                <p className="fw-bold mb-0">Periode Sewa</p>
                <RadioInput
                  className="radio-filter"
                  id="period"
                  name="period"
                  value=""
                  checked={formData.period === ''}
                  onChange={handleChange}
                  label="Semua"
                />
                <RadioInput
                  className="radio-filter"
                  id="tahun"
                  name="period"
                  value="tahun"
                  checked={formData.period === 'tahun'}
                  onChange={handleChange}
                  label="Pertahun"
                />
                <RadioInput
                  className="radio-filter"
                  id="bulan"
                  name="period"
                  value="bulan"
                  checked={formData.period === 'bulan'}
                  onChange={handleChange}
                  label="Perbulan"
                />
                <RadioInput
                  className="radio-filter"
                  id="hari"
                  name="period"
                  value="hari"
                  checked={formData.period === 'hari'}
                  onChange={handleChange}
                  label="Perhari"
                />
              </div>
            )}

            <div className="tipe-property">
              <p className="fw-bold mb-0">Tipe Property</p>
              <RadioInput
                className="radio-filter"
                id="property"
                name="propertyType"
                value=""
                checked={formData.propertyType === ''}
                onChange={handleChange}
                label="Semua"
              />
              <RadioInput
                className="radio-filter"
                id="perumahan"
                name="propertyType"
                value="perumahan"
                checked={formData.propertyType === 'perumahan'}
                onChange={handleChange}
                label="Perumahan"
              />
              <RadioInput
                className="radio-filter"
                id="rumah"
                name="propertyType"
                value="rumah"
                checked={formData.propertyType === 'rumah'}
                onChange={handleChange}
                label="Rumah"
              />
              <RadioInput
                className="radio-filter"
                id="ruko"
                name="propertyType"
                value="ruko"
                checked={formData.propertyType === 'ruko'}
                onChange={handleChange}
                label="Ruko"
              />
              <RadioInput
                className="radio-filter"
                id="tanah"
                name="propertyType"
                value="tanah"
                checked={formData.propertyType === 'tanah'}
                onChange={handleChange}
                label="Tanah"
              />
            </div>

            <div className="harga">
              <p className="fw-bold mb-0">Harga</p>
              <div className="d-flex">
                <div className="input-group">
                  <span className="input-group-text">Rp</span>
                  <input
                    type="number"
                    name="minPrice"
                    className="form-control"
                    min={0}
                    value={formData.minPrice}
                    onChange={handleChangeNumber}
                  />
                </div>
                <h4>-</h4>
                <div className="input-group">
                  <span className="input-group-text">Rp</span>
                  <input
                    type="number"
                    className="form-control"
                    name="maxPrice"
                    min={formData.minPrice > 0 ? formData.minPrice : 0}
                    value={formData.maxPrice}
                    onChange={handleChangeNumber}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="luas-tanah">
              <p className="fw-bold mb-0">Luas Tanah</p>
              <div className="d-flex">
                <div className="input-group">
                  <input
                    type="number"
                    name="minLT"
                    className="form-control"
                    min={0}
                    value={formData.minLT}
                    onChange={handleChangeNumber}
                  />
                  <span className="input-group-text">m²</span>
                </div>
                <h4>-</h4>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    name="maxLT"
                    min={formData.minLT > 0 ? formData.minLT : 0}
                    value={formData.maxLT}
                    onChange={handleChangeNumber}
                    required
                  />
                  <span className="input-group-text">m²</span>
                </div>
              </div>
            </div>

            <div className="luas-bangunan">
              <p className="fw-bold mb-0">Luas Bangunan</p>
              <div className="d-flex">
                <div className="input-group">
                  <input
                    type="number"
                    name="minLB"
                    className="form-control"
                    min={0}
                    value={formData.minLB}
                    onChange={handleChangeNumber}
                  />
                  <span className="input-group-text">m²</span>
                </div>
                <h4>-</h4>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    name="maxLB"
                    min={formData.minLB > 0 ? formData.minLB : 0}
                    value={formData.maxLB}
                    onChange={handleChangeNumber}
                    required
                  />
                  <span className="input-group-text">m²</span>
                </div>
              </div>
            </div>

            <div className="kamar-tidur">
              <p className="fw-bold mb-0">Kamar Tidur</p>
              <RadioInput
                className="radio-filter"
                id="kamar"
                name="minBedRoom"
                value={0}
                checked={formData.minBedRoom === 0}
                onChange={handleChangeNumber}
                label="Semua"
              />
              <RadioInput
                className="radio-filter"
                id="dua"
                name="minBedRoom"
                value={2}
                checked={formData.minBedRoom === 2}
                onChange={handleChangeNumber}
                label="&ge; 2 kamar"
              />
              <RadioInput
                className="radio-filter"
                id="tiga"
                name="minBedRoom"
                value={3}
                checked={formData.minBedRoom === 3}
                onChange={handleChangeNumber}
                label="&ge; 3 kamar"
              />
              <RadioInput
                className="radio-filter"
                id="empat"
                name="minBedRoom"
                value={4}
                checked={formData.minBedRoom === 4}
                onChange={handleChangeNumber}
                label="&ge; 4 kamar"
              />
            </div>

            <div className="kamar-mandi">
              <p className="fw-bold mb-0">Kamar Mandi</p>
              <RadioInput
                className="radio-filter"
                id="kamarMandi"
                name="minBathRoom"
                value={0}
                checked={formData.minBathRoom === 0}
                onChange={handleChangeNumber}
                label="Semua"
              />
              <RadioInput
                className="radio-filter"
                id="duaKamar"
                name="minBathRoom"
                value={2}
                checked={formData.minBathRoom === 2}
                onChange={handleChangeNumber}
                label="&ge; 2 kamar"
              />
              <RadioInput
                className="radio-filter"
                id="tigaKamar"
                name="minBathRoom"
                value={3}
                checked={formData.minBathRoom === 3}
                onChange={handleChangeNumber}
                label="&ge; 3 kamar"
              />
              <RadioInput
                className="radio-filter"
                id="empatKamar"
                name="minBathRoom"
                value={4}
                checked={formData.minBathRoom === 4}
                onChange={handleChangeNumber}
                label="&ge; 4 kamar"
              />
            </div>
          </div>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Container>
  );
};

export default FilterModal;
