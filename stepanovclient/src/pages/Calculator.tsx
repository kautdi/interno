import Input from '@mui/material/Input';
import Slider from '@mui/material/Slider';
import * as React from 'react';

export default function Calculator() {
    const [value, setValue] = React.useState(30);
    const [roomType, setRoomType] = React.useState<string>("");
    const [selectedNeeds, setSelectedNeeds] = React.useState<string[]>([]);
    const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
    const [selectedManage, setSelectedManage] = React.useState<string[]>([]);
    const [itogSum, setItog] = React.useState<number>(0);
    const [selectedItems, setSelectedItems] = React.useState<{ name: string; quantity: number; price: number }[]>([]);

    const needs = [
        { name: '3D visualization', price: 20000 },
        { name: 'Discounted products', price: 13000 },
        { name: 'Drawings', price: 14000 },
        { name: 'Repair estimate', price: 10000 },
        { name: 'Planning solution', price: 5000 },
        { name: 'Custom-made furniture', price: 11000 },
        { name: 'Gazette (shopping list)', price: 14000 },
    ];

    const options = [
        { name: 'Preliminary drawings before rendering', desc: 'If you plan to begin renovations before the design project is completed, order preliminary drawings.', price: 3000 },
        { name: 'Technical supervision', desc: 'When ordering repairs in Rerooms - free of charge.', price: 20000 },
        { name: 'Authors supervision', desc: '', price: 30000 },
        { name: '3D tour for viewing a design project', desc: '', price: 6000 },
        { name: 'Design project of an additional zone', desc: '', price: 5000 },
        { name: 'Loggia design project', desc: 'When paying for the service, the project time will be increased by 3 days.', price: 3000 },
        { name: 'Design project of a dressing room', desc: 'When paying for the service, the project time will be increased by 3 days', price: 5000 },
    ];

    const manage = [
        { name: 'Smart House', price: 40000 },
        { name: 'Legalization of redevelopment', price: 20000 },
        { name: 'Electrical project', price: 30000 },
        { name: 'Water supply and sewerage project', price: 20000 },
        { name: 'Heating project', price: 10000 },
        { name: 'Air conditioning project', price: 12000 },
    ];

      const projectItems = [
        { name: 'Three planning solutions', price: 2000 },
        { name: 'Two drawing options', price: 2000 },
        { name: 'Two visualization options', price: 2000 }
    ];

    React.useEffect(() => {
        calculateTotalCost();
    }, [value, selectedNeeds, selectedOptions, selectedManage,selectedItems]);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value === '' ? 0 : Number(event.target.value);
        setValue(newValue);
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 200) {
            setValue(200);
        }
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, setFunction: React.Dispatch<React.SetStateAction<string[]>>, selectedItems: string[]) => {
        const { name, checked } = event.target;
        if (checked) {
            setFunction([...selectedItems, name]);
        } else {
            setFunction(selectedItems.filter(item => item !== name));
        }
    };

    const calculateTotalCost = () => {
        // Assuming base cost per square meter
        const baseCost = 9995;

        // Calculate the base total cost
        let totalCost = value * baseCost;

        // Add costs for selected needs, options, and manage items
        selectedNeeds.forEach(need => {
            const item = needs.find(n => n.name === need);
            if (item) totalCost += item.price;
        });

        selectedOptions.forEach(option => {
            const item = options.find(o => o.name === option);
            if (item) totalCost += item.price;
        });

        selectedManage.forEach(manageItem => {
            const item = manage.find(m => m.name === manageItem);
            if (item) totalCost += item.price;
        });

        selectedItems.forEach(item => {
            totalCost += item.price * item.quantity;
        });

        setItog(totalCost);
    };
    const handleCounterChange = (name: string, action: string) => {
        const updatedItems = [...selectedItems];
        const existingItemIndex = updatedItems.findIndex(item => item.name === name);
        
        if (existingItemIndex !== -1) {
            if (action === 'increment') {
                updatedItems[existingItemIndex].quantity++;
            } else {
                updatedItems[existingItemIndex].quantity--;
            }
    
            // Ensure that the price property is set for each item
            const selectedItem = updatedItems[existingItemIndex];
            const matchingProjectItem = projectItems.find(item => item.name === name);
            if (matchingProjectItem) {
                selectedItem.price = matchingProjectItem.price;
            }
    
            if (updatedItems[existingItemIndex].quantity <= 0) {
                // If quantity becomes zero or negative, remove the item from the list
                updatedItems.splice(existingItemIndex, 1);
            }
        } else {
            if (action === 'increment') {
                const matchingProjectItem = projectItems.find(item => item.name === name);
                if (matchingProjectItem) {
                    updatedItems.push({ name, quantity: 1, price: matchingProjectItem.price });
                }
            }
        }
    
        setSelectedItems(updatedItems);
    };
    const getSelectedServices = () => {
        const selectedServices = [
            ...selectedNeeds.map(need => needs.find(n => n.name === need)),
            ...selectedOptions.map(option => options.find(o => o.name === option)),
            ...selectedManage.map(manageItem => manage.find(m => m.name === manageItem)),
            ...selectedItems.map(projectItem => projectItems.find(p => p.name === projectItem.name)), // Corrected parameter name
        ].filter(Boolean);
        
        return selectedServices;
    };


    return (
        <div className="calculator">
            <h1 className="content__head navigation-cart__content-head content__head__headOne">
                Calculator online
            </h1>
            <div className="calculator-block">
                <div className="choice-items">
                    <div className="choice-item">
                        <p className="choice-name choice-item__choice-name">
                            Select room type
                        </p>
                        <select className="choice-selected" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                            <option value="Room">Room</option>
                            <option value="Studio apartment">Studio apartment</option>
                            <option value="1-room apartment">1-room apartment</option>
                            <option value="2-room apartment">2-room apartment</option>
                            <option value="3-room apartment">3-room apartment</option>
                            <option value="4-room apartment">4-room apartment</option>
                            <option value="5-room apartment">5-room apartment</option>
                            <option value="House, townhouse">House, townhouse</option>
                        </select>
                    </div>
                    <div className="choice-item choice-item__slider">
                        <div className="choice-display">
                            <p className="choice-name choice-item__choice-name">
                                Specify the footage of the room (m²)
                            </p>
                            <Input
                                value={value}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 10,
                                    min: 0,
                                    max: 200,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider',
                                }}
                            />
                        </div>
                        <Slider
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                            min={0}
                            max={200}
                        />
                    </div>
                    <div className="choice-block">
                        <h3 className="head choice-block__head">
                            What you will need in a design project
                        </h3>
                        <div className="choice-inputs">
                            {needs.map((need) => (
                                <div className="choice-inputs-item" key={need.name}>
                                    <input
                                        type="checkbox"
                                        className="custom-checkbox"
                                        name={need.name}
                                        onChange={(e) => handleCheckboxChange(e, setSelectedNeeds, selectedNeeds)}
                                    />
                                    <p className="input-text">{need.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="choice-block">
                        <h3 className="head choice-block__head">
                            The manager will clarify the cost of services by phone after ordering:
                        </h3>
                        <div className="choice-inputs">
                            {manage.map((manages) => (
                                <div className="choice-inputs-item" key={manages.name}>
                                    <input
                                        type="checkbox"
                                        className="custom-checkbox"
                                        name={manages.name}
                                        onChange={(e) => handleCheckboxChange(e, setSelectedManage, selectedManage)}
                                    />
                                    <p className="input-text">{manages.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="choice-block">
            <h3 className="head choice-block__head">The project includes</h3>
            <div className="counter-items">
                {projectItems.map((item, index) => (
                    <div className="counter-item" key={index}>
                        <p className="input-text">{item.name}</p>
                        <div className="counter-btns">
                            <button className="btn btn__counter" onClick={() => handleCounterChange(item.name, 'decrement')}>-</button>
                            <p>{selectedItems.find(selectedItem => selectedItem.name === item.name)?.quantity || 0}</p>
                            <button className="btn btn__counter" onClick={() => handleCounterChange(item.name, 'increment')}>+</button>
                        </div>
                        <p className="counter-item__price">{item.price} руб</p>
                    </div>
                ))}
            </div>
           
        </div>
                    <div className="choice-block">
                        <h3 className="head choice-block__head">
                            Additional options
                        </h3>
                        <div className="choice-selections">
                            {options.map((option) => (
                                <div className="choice-selection" key={option.name}>
                                    <input
                                        type="checkbox"
                                        className="custom-checkbox"
                                        name={option.name}
                                        onChange={(e) => handleCheckboxChange(e, setSelectedOptions, selectedOptions)}
                                    />
                                    <div className="text-block">
                                        <div className="head text-block__head">
                                            {option.name}
                                        </div>
                                        <div className="desc text-block__desc">
                                            {option.desc}
                                        </div>
                                    </div>
                                    <p className="price choice-selection__price">{option.price} руб</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="itog-price-block">
                    <div className="itog-price-head">
                        <h3 className="head-text">DESIGN PROJECT COST</h3>
                        <h2 className="price-sum">{itogSum} Руб</h2>
                        <p className="prhead-desc">{value * 9995} ₽ per m²</p>
                        <p className="prhead-desc">The design project will be ready in 35-45 days</p>
                    </div>
                    <div className="itog-price-body">
                        <h3 className="body-text-dop">SelectedItems:</h3>
                        {getSelectedServices().map((service:any) => (
                            <div className="dop-item" key={service.name}>
                                <h2 className="dop-item-text">{service.name}</h2>
                                <p className="dop-item-price">{service.price} ₽</p>
                            </div>
                        ))}
                       
                    </div>
                </div>
            </div>
        </div>
    );
}