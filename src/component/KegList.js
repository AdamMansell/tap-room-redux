import KegController from './KegController'
import ListView from "./ListView";	import ListView from "./ListView";


const onTap = [
  {
    Name: 'Budlight',
    Brand: 'Budweieser',
    Price: '$3',
    AlcoholContent: '5%',
    PintsLeft: 124
  },
  {
    Name: 'Wanderlust',
    Brand: 'Breakside',
    Price: '$5',
    AlcoholContent: '6.2%',
    PintsLeft: 124
  }
]


function KegList () {	
  
  return (
    <React.Fragment>
      <KegController />
      <div id="list-view">
        <ListView
          Kegs={onTap} />
      </div>
    </React.Fragment>
  );


}

export default KegList;