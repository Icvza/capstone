



import { useState, useEffect } from 'react';
import PlaceCard from '../components/PlaceCard';
import iconImages from '../components/iconImages';
import Image from 'next/image';



// getServerSideProps - Next.js feature that allow someone to make a fetch request on the server before the page is loaded on the client side. 

export async function getServerSideProps() {

  const res = await fetch(`http://localhost:3000/api/getPlaces`);
  const placeDetails = await res.json();

  return {
    props: { place: placeDetails },
  };
}




export default function PlannerPage({ place }: any) {


  // DATA - what is being displayed on page. 
  const [data, setData] = useState(place);


  // ---------------------------------------------- SEARCH-BAR------------------------------------------------------
  // SEARCH-BAR: STATE 
  const [searchInput, setSearchInput] = useState("");
  // const [searchInput, setSearchInput] = useState([]);

  // SEARCH-BAR: STATE UPDATE FUNCTION 
  const handleChange = ({ target: { name, value } }: any) => {

    let searchInput = value.toLowerCase();
    setSearchInput(searchInput);

  }

  // SEARCH-BAR: Form submission w/ condition: 
  //    If SEARCH-BAR state is empty (i.e. no value was typed in or was deleted.) return all the places.
  //    Else fetch the /api/places/filter/[filter] endpoint that executes a query with SEARCH-BAR state attached.  
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (searchInput === "") {

      const res = await fetch(`http://localhost:3000/api/getPlaces`);
      const filteredPlaces = await res.json();

      setData(filteredPlaces);


    } else {

      const res = await fetch(`http://localhost:3000/api/filter/${searchInput}`);
      const filteredPlaces = await res.json();

      setData(filteredPlaces);
      setClickedIcon("")
    }

  };


  // ---------------------------------------------- BUTTONS: SORT------------------------------------------------------


  // SORT-BUTTON: STATE (for drop down menu) 
  const [isVisible, setIsVisible] = useState(false);

  // SORT-BUTTON: STATE (for sort type i.e. ascending or descending)
  const [isAscending, setIsAscending] = useState(true);

  // SORT-BUTTON: This code changes what is displayed on the button on client side. 
  let displayName = ""

  if (isAscending === true) {

    displayName = "A-Z";

  } else {

    displayName = "Z-A";

  }

  // SORT-BUTTON: onClick function to toggle visibility by updating state boolean. State begins in 'false' thus not visible. 
  //    If state is 'false', display on the drop-down menu div is set to 'hidden'. If state is 'true', it changes to an empty string which is read as 'block'. 
  const toggleVisible = () => {
    setIsVisible(!isVisible);
  }

  // SORT-BUTTON: useEffect activated when drop-down menu is visible. Adds eventListener to hide drop-down menu when it detects a click outside of the component. 
  //    event.target.closest(".flex") will look at DOM tree and go up until it finds something that wont match something in the class name, in this case, "flex"
  useEffect(() => {
    if (isVisible) {
      const handleClickOutside = (event: any) => {
        if (!event.target.closest(".flex")) {
          setIsVisible(false);
        }
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isVisible]);



  // ---------------------------------------------- BUTTONS: ICONS------------------------------------------------------

  // ICON-BUTTONS: STATE (for scaling down icon when selected)
  const [clickedIcon, setClickedIcon] = useState("");

  // ICON-BUTTONS: fetch request filtering for the category selected. Same endpoint as the searchInput FORM submission. 
  const iconSort = async ({ iconFilterValue }: any) => {

    console.log(`icon filter: ${iconFilterValue}`)

    // When iconSort is executed, STATE changes and display changes for the icon. 
    setClickedIcon(iconFilterValue);

    const res = await fetch(`http://localhost:3000/api/filter/${iconFilterValue}`);
    const filteredPlaces = await res.json();

    setData(filteredPlaces);


  }


  // ---------------------------------------------- BUTTONS: DELETE ICONS------------------------------------------------------

  // DELETE-BUTTON: Same endpoint as the getServerSideProps function. Returns all places and resets Icon images if any. 
  const deleteFiltersHandler = async () => {

    console.log(`deleting filters / returning all places`);

    setClickedIcon("")
    setSearchInput("");

    const res = await fetch(`http://localhost:3000/api/getPlaces`);
    const filteredPlaces = await res.json();

    setData(filteredPlaces);
    setIsAscending(true);

  }


  // ---------------------------------------------- BUTTONS: MORE FILTERS------------------------------------------------------

  //MORE_FILTERS-BUTTON: STATE (toggles the modal opening and closing. Begins in 'false'.)
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  //This function toggles alternating boolean values for the state 'showMoreFilters'. 
  const showMoreFiltersHandler = () => {

    setShowMoreFilters(!showMoreFilters);

  }

  // MORE_FILTERS-BUTTON: same as SORT-BUTTON Drop-down menu. Toggles visibility of the modal. 
  useEffect(() => {
    if (showMoreFilters) {
      const handleClickOutside = (event: any) => {
        if (!event.target.closest(".flex")) {
          setShowMoreFilters(false);
        }
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [showMoreFilters]);






  // ----------------------------------------------------- RETURN -----------------------------------------------------------
  return (
    <div>
      {/* PARENT CONTAINER ----- FILTER COMPONENT */}
      <div className="p-8 pb-12 pt-56 bg-cover w-full h-fit bg-[url('../public/benjamin-lizardo-d-OoxMOAIgU-unsplash.jpg')]">

        {/* <div className='w-full flex flex-row md:flex-col lg:flex-col text-center text-6xl'>
          <p className='text-white'>Platéalo</p>
          <h1 className='text-white'>Explora Puerto Rico</h1>
        </div> */}

        {/* --------------------------------------------------------- TOP BOX - Form, Sort Button and DeleteFilters Button -------------------------------------------------*/}
        {/* TOP BOX CONTAINER */}
        <div className="flex flex-col justify-center items-center h-40 p-4 pl-12 pr-12 sm:items-center sm:flex-col sm:justify-center md:flex-col md:justify-center lg:justify-between lg:flex-row">

          {/* FORM */}
          <div className='flex flex-row justify-evenly items-center gap-5 border-solid border-black border-2 rounded-lg'>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="Name"
                placeholder={`Busca por nombre o pueblo`}
                value={searchInput}
                onChange={handleChange}
                className='h-20 w-80 text-black rounded-lg'
              />
            </form>
          </div>

          {/* BUTTONS */}
          <div className='flex flex-row justify-evenly items-end h-20 w-100 gap-8'>

            <div>

              {/* BUTTONS: SORT */}
              <button onClick={toggleVisible} className='h-10 w-40 m-30 rounded-lg text-base bg-white hover:bg-gray-200 flex flex-row justify-center items-center text-center border-solid border-black border-2'>{`Ordena por: ${displayName}`}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="-mr-1 ml-2 h-5 w-5">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>

              {/* BUTTONS: SORT - DROP-DOWN MENU */}
              <div className={`flex flex-col ${isVisible ? '' : 'hidden'}`} >
                <div className="absolute top-39 right-30 bg-white p-4 flex flex-col w-40 bg-wwhite">
                  {/* BUTTONS: SORT ALPHABETICALLY */}
                  <button value='DESC' className='hover:bg-gray-200 rounded-lg' onClick={() => setIsAscending(true)}>Nombre A-Z</button>
                  {/* BUTTONS: SORT REVERSE */}
                  <button value='ASC' className='hover:bg-gray-200 rounded-lg' onClick={() => setIsAscending(false)}>Nombre Z-A</button>
                </div>
              </div>

            </div>

            {/* BUTTONS: DELETE ICONS */}
            <button className='h-10 w-40 m-30 rounded-lg bg-white hover:bg-gray-200 font-bold border-solid border-black border-2' onClick={deleteFiltersHandler}>Borrar Filtros</button>

          </div>

        </div>


        {/* --------------------------------------------------------- BOTTOM BOX- ICONS, MoreFIlters Button and MAP Button -------------------------------------------------*/}
        {/* BOTTOM BOX CONTAINER */}
        <div className="p-3 flex flex-col gap-8 justify-between w-auto items-center h-auto p-6 pl-12 pr-12 bg-white rounded-lg sm:flex-col md:flex-col lg:flex-row">

          {/* ICONS */}
          <div className='flex flex-wrap flex-row md:flex-nowrap justify-center items-center gap-5 '>


            {iconImages.map((icon) => (

              <div key={icon.iconFilterValue} className={`w-2/5 border-solid hover:cursor-pointer hover:shadow-xl hover:scale(1.2 : 1)`} onClick={(): any => iconSort({ iconFilterValue: icon.iconFilterValue })}>
                <Image src={icon.url} alt={icon.iconFilterValue} style={{ transform: `scale(${clickedIcon === icon.iconFilterValue ? 0.8 : 1})`, border: `${clickedIcon === icon.iconFilterValue ? 'solid black' : 'none'}` }} />
              </div>

            ))}


          </div>


          {/* BUTTONS */}
          <div className='flex flex-row justify-center items-center h-20 w-100 gap-4 sm:flex-row md:flex-row lg:gap-8 lg:border-l-4 border-grey pl-4'>

            {/* BUTTONS: MORE FILTERS */}
            <button className='h-10 w-40 m-30 rounded-lg border-solid border-black border-2 hover:bg-gray-200' onClick={() => showMoreFiltersHandler()}>Más Filtros:</button>

            {/* BUTTONS: MAP */}
            <button className='h-10 w-40 m-30 rounded-lg border-solid border-black border-2 hover:bg-gray-200'>Ver Mapa</button>
          </div>

        </div>

      </div>

      {/*  MORE FILTERS POP-UP WINDOW */}
      {
        showMoreFilters ?
          <div className='flex justify-center items-center'>
            <div className='bg-white h-2/4 w-6/12 flex flex-col flex justify-center items-center absolute top-48 right-50'>
              <div>Coming Soon!</div>
            </div>
          </div>
          : null
      }

      {/* MAIN RETURN */}
      {/* CONTENT PASSED IN THROUGH THE 'data' STATE ARE SORTED AND THEN MAPPED ONTO SCREEN. */}
      <div className='flex flex-wrap w-screen p-8'>
        {
          data.sort((a: any, b: any) => {
            if (isAscending === true) {
              if (a.nombre < b.nombre) {
                return -1;
              }
              if (a.nombre > b.nombre) {
                return 1;
              }
              return 0;
            } else {
              if (a.nombre > b.nombre) {
                return -1;
              }
              if (a.nombre < b.nombre) {
                return 1;
              }
              return 0;
            }
          }).map((p: any) => (
            <PlaceCard
              key={p.id}
              id={p.id}
              nombre={p.nombre}
              card_img={p.card_img}
            />
          ))
        }
      </div>


    </div >
  )
}





