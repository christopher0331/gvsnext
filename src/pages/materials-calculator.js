import React, { useState, useEffect } from 'react';


export default function MaterialCostCalculator() {
    const [itemList, setItemList] = useState([
        { name: 'Steel Post 8’', number: 0, cost: 0, percentIncrease: 0 },
        { name: '4x4x8', number: 0, cost: 0, percentIncrease: 0 },
        { name: '4x4x10', number: 0, cost: 0, percentIncrease: 0 },
        { name: '4x4x7', number: 0, cost: 0, percentIncrease: 0 },
        { name: '2x4x8', number: 0, cost: 0, percentIncrease: 0 },
        { name: '2x4x10', number: 0, cost: 0, percentIncrease: 0 },
        { name: '2x6x8', number: 0, cost: 0, percentIncrease: 0 },
        { name: '2x6x10', number: 0, cost: 0, percentIncrease: 0 },
        { name: '1x6x6', number: 0, cost: 0, percentIncrease: 0 },
        { name: '1x4x6', number: 0, cost: 0, percentIncrease: 0 },
        { name: '1x4x8', number: 0, cost: 0, percentIncrease: 0 },
        { name: '1x6x8', number: 0, cost: 0, percentIncrease: 0 },
        { name: '4x6x6', number: 0, cost: 0, percentIncrease: 0 },
        { name: 'Roofing Sealant ', number: 0, cost: 0, percentIncrease: 0 },
        { name: 'Clear Coat', number: 0, cost: 0, percentIncrease: 0 },
        { name: 'Concrete', number: 0, cost: 0, percentIncrease: 0 },
        { name: 'Misc', number: 0, cost: 0, percentIncrease: 0 },
    ]);

    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        const updatedItemList = itemList.map(item => {
            const storedCost = localStorage.getItem(item.name + " cost");
            const storedPercentIncrease = localStorage.getItem(item.name + " percentIncrease");
            return {
                ...item,
                cost: storedCost ? parseFloat(storedCost) : item.cost,
                percentIncrease: storedPercentIncrease ? parseFloat(storedPercentIncrease) : item.percentIncrease
            };
        });
        setItemList(updatedItemList);
    }, []);

    const handleChange = (index, field, value) => {
        const newItemList = [...itemList];
        newItemList[index][field] = parseFloat(value);
        setItemList(newItemList);
    }

    const handleBlur = (index, field) => {
        localStorage.setItem(itemList[index].name + " " + field, itemList[index][field]);
    }

    const calculateTotalCost = () => {
        let total = 0;
        itemList.forEach(item => {
            let itemCost = item.number * item.cost;
            itemCost += itemCost * item.percentIncrease / 100; // Assuming percentIncrease is a percentage
            total += itemCost;
        });
        setTotalCost(total);
    }

    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Material</th>
                            <th>Number</th>
                            <th>Cost</th>
                            <th>Percent Increase</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemList.map((item, index) => (
                            <tr key={item.name}>
                                <td>{item.name}</td>
                                <td>
                                    <input
                                        type="number"
                                        value={item.number}
                                        onChange={e => handleChange(index, 'number', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={item.cost}
                                        onChange={e => handleChange(index, 'cost', e.target.value)}
                                        onBlur={() => handleBlur(index, 'cost')}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={item.percentIncrease}
                                        onChange={e => handleChange(index, 'percentIncrease', e.target.value)}
                                        onBlur={() => handleBlur(index, 'percentIncrease')}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <button onClick={calculateTotalCost}>Calculate Total Cost</button>
                    <div>Total Cost: ${totalCost.toFixed(2)}</div>
                </div>
            </div>
        </div>
    );
}
