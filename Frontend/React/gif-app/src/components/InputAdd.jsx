import { useInputAdd } from '../hooks/useInputAdd';

export const InputAdd = ({ inputValue, setInputValue }) => {
  const {
    divRef,
    opacity,
    position,
    handleBlur,
    handleChange,
    handleFocus,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove
  } = useInputAdd(setInputValue)

  return (
    <>
      <div className='relative w-full'>
        <input
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={inputValue}
          onChange={handleChange}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          autoComplete='off'
          placeholder='Search Gif'
          type='text'
          name='email'
          className='h-12 w-full cursor-default rounded-md border border-gray-800 bg-gray-950 p-3.5 text-gray-100 transition-colors duration-500 placeholder:select-none  placeholder:text-gray-500 focus:border-[#8678F9] focus:outline-none'
        />

        <input
          ref={divRef}
          disabled
          style={{
            border: '1px solid #8678F9',
            opacity,
            WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
          }}
          aria-hidden='true'
          className='pointer-events-none absolute left-0 top-0 z-10 h-12 w-full cursor-default rounded-md border border-[#8678F9] bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none'
        />
      </div>
    </>
  );
};

