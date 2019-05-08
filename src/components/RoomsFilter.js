import React, { useContext } from 'react'
import { RoomContext } from '../context';
import Title from './Title';

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    pets,
    breakfast
  } = context;
  // console.log('rooms:', rooms)

  // get unique types
  let types = getUnique(rooms, 'type');
  // console.log('types:', types)
  // add all
  types = ['all', ...types];
  // map to jsx
  types = types.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
  });

  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
  });

  return (
    <section className='filter-container'>
      <Title title='Search rooms' />
      <form className='filter-form'>
        {/* select type */}
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          >
            { types }
          </select>
        </div>
        {/* end select type */}
        {/* guest type */}
        <div className='form-group'>
          <label htmlFor='capacity'>Guests</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={handleChange}
          >
            { people }
          </select>
        </div>
        {/* end select type */}
        {/* room price */}
        <div className='form-group'>
          <label htmlFor='price'>room price ${price}</label>
          <input className='form-control' type='range' name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} />
        </div>
        {/* end room price */}
        {/* size */}
        <div className='form-group'>
          <label htmlFor='size'>room size</label>
          <div className='size-inputs'>
            <input className='size-input' type='number' name='minSize' id='size' value={minSize} onChange={handleChange} />
            <input className='size-input' type='number' name='maxSize' id='size' value={maxSize} onChange={handleChange} />
          </div>
        </div>
        {/* end size */}
        {/* extras */}
        <div className='form-group'>
          <div className='single-extra'>
            <input type='checkbox' name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange} />
            <label htmlFor='breakfast'>breakfast</label>
          </div>
          <div className='single-extra'>
            <input type='checkbox' name='pets' id='pets' checked={pets} onChange={handleChange} />
            <label htmlFor='pets'>pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  )
}

export default RoomsFilter
