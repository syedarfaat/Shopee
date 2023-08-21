import React from 'react'
import './Search.scss'
import {MdClose} from 'react-icons/md';
import Earbuds from '../../../Assets/products/earbuds-prod-1.webp'
import { useContextProvider } from '../../../utis/context';

export default function Search() {
    const {SetSearchOn}=useContextProvider();
  return (
    <div className='search-modal'>
      <div className='form-field'>
            <input
            type='text'
            autoFocus
            placeholder='SEARCH FOR PRODUCTS'
            ></input>
            <MdClose onClick={()=>SetSearchOn(false)}/>
      </div>
      <div className='search-result-content'>
        <div className="search-results">
            <div className="search-result-item">
                <div className='img-container'>
                    <img src={Earbuds}/>
                    </div>
                    <div className="text">
                        <div className="name">EarBuds first product. two ear buds. one box, three lights and a charger</div>
                        <div className="des">makes sounds using bluet afadfsa; asflsaj;fasf a; alj;safsa  al;dfjas;f  ljasfd;a ooth. place it in your ears and click play to listen to sounds</div>
                    
                </div>
            </div>
            <div className="search-result-item">
            <div className='img-container'>
                <img src={Earbuds}/>
                </div>
                <div className="text">
                    <div className="name">EarBuds first product. two ear buds. one box, three lights and a charger</div>
                    <div className="des">makes sounds using bluet afadfsa; asflsaj;fasf a; alj;safsa  al;dfjas;f  ljasfd;a ooth. place it in your ears and click play to listen to sounds</div>
                
            </div>
        </div>
        <div className="search-result-item">
        <div className='img-container'>
            <img src={Earbuds}/>
            </div>
            <div className="text">
                <div className="name">EarBuds first product. two ear buds. one box, three lights and a charger</div>
                <div className="des">makes sounds using bluet afadfsa; asflsaj;fasf a; alj;safsa  al;dfjas;f  ljasfd;a ooth. place it in your ears and click play to listen to sounds</div>
            
        </div>
    </div>
    <div className="search-result-item">
    <div className='img-container'>
        <img src={Earbuds}/>
        </div>
        <div className="text">
            <div className="name">EarBuds first product. two ear buds. one box, three lights and a charger</div>
            <div className="des">makes sounds using bluet afadfsa; asflsaj;fasf a; alj;safsa  al;dfjas;f  ljasfd;a ooth. place it in your ears and click play to listen to sounds</div>
        
    </div>
</div>
<div className="search-result-item">
<div className='img-container'>
    <img src={Earbuds}/>
    </div>
    <div className="text">
        <div className="name">EarBuds first product. two ear buds. one box, three lights and a charger</div>
        <div className="des">makes sounds using bluet afadfsa; asflsaj;fasf a; alj;safsa  al;dfjas;f  ljasfd;a ooth. place it in your ears and click play to listen to sounds</div>
    
</div>
</div>
<div className="search-result-item">
<div className='img-container'>
    <img src={Earbuds}/>
    </div>
    <div className="text">
        <div className="name">EarBuds first product. two ear buds. one box, three lights and a charger</div>
        <div className="des">makes sounds using bluet afadfsa; asflsaj;fasf a; alj;safsa  al;dfjas;f  ljasfd;a ooth. place it in your ears and click play to listen to sounds</div>
    
</div>
</div>
<div className="search-result-item">
<div className='img-container'>
    <img src={Earbuds}/>
    </div>
    <div className="text">
        <div className="name">EarBuds first product. two ear buds. one box, three lights and a charger</div>
        <div className="des">makes sounds using bluet afadfsa; asflsaj;fasf a; alj;safsa  al;dfjas;f  ljasfd;a ooth. place it in your ears and click play to listen to sounds</div>
    
</div>
</div>
<div className="search-result-item">
<div className='img-container'>
    <img src={Earbuds}/>
    </div>
    <div className="text">
        <div className="name">EarBuds first product. two ear buds. one box, three lights and a charger</div>
        <div className="des">makes sounds using bluet afadfsa; asflsaj;fasf a; alj;safsa  al;dfjas;f  ljasfd;a ooth. place it in your ears and click play to listen to sounds</div>
    
</div>
</div>
<div className="search-result-item">
<div className='img-container'>
    <img src={Earbuds}/>
    </div>
    <div className="text">
        <div className="name">EarBuds first product. two ear buds. one box, three lights and a charger</div>
        <div className="des">makes sounds using bluet afadfsa; asflsaj;fasf a; alj;safsa  al;dfjas;f  ljasfd;a ooth. place it in your ears and click play to listen to sounds</div>
    
</div>
</div>
<div className="search-result-item">
<div className='img-container'>
    <img src={Earbuds}/>
    </div>
    <div className="text">
        <div className="name">EarBuds first product. two ear buds. one box, three lights and a charger</div>
        <div className="des">makes sounds using bluet afadfsa; asflsaj;fasf a; alj;safsa  al;dfjas;f  ljasfd;a ooth. place it in your ears and click play to listen to sounds</div>
    
</div>
</div>

        </div>
      </div>
    </div>
  )
}
