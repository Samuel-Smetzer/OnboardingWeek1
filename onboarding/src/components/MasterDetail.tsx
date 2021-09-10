import React from 'react';
import { useState } from 'react';
import './MasterDetail.css'

interface Idata {
    name: string;
    data1: string;
    data2: string;
    data3: string;
}

const MasterDetail: React.FC = (props: any) => {

    const [clicked, setClicked] = useState<number>(-1)

    function ListDetail(lists: any) {
        const listTo = lists.list;
        const listItems = listTo.map((listItem: any) =>
            <li style={{ border: '1px solid black' }} onClick={() => setClicked(listItem - 1)}>
                {listItem + 'Click for details'}
            </li>
        );
        return (

            <ul style={{ width: '200px', textAlign: 'left', background: 'tan' }}>{listItems}</ul>
        );
    }

    const dataTest: Idata = {
        name: 'sam',
        data1: 'react',
        data2: 'js',
        data3: 'reactnative'
    }
    const dataTest2: Idata = {
        name: 'trent',
        data1: 'infosys',
        data2: 'java',
        data3: 'backend'
    }
    const dataTest3: Idata = {
        name: 'luke',
        data1: 'js',
        data2: 'angular',
        data3: 'aws'
    }

    const list = [1, 2, 3];
    const testList = [dataTest, dataTest2, dataTest3];

    return (
        <div className='topDiv'>
            <text style={{ marginLeft: '100px' }}>Employee List</text>
            <div className='detailView'>

                <ListDetail list={list}></ListDetail>
                <div className='div'>
                    {clicked != -1 && (
                        <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>Data</td>
                                    <td>Data</td>
                                    <td>Data</td>
                                </tr>
                                <tr>
                                    <td>{testList[clicked].name}</td>
                                    <td>{testList[clicked].data1}</td>
                                    <td>{testList[clicked].data2}</td>
                                    <td>{testList[clicked].data3}</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    )

}

export default MasterDetail