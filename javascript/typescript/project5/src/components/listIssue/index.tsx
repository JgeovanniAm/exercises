import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../card';
import { Iissues } from '../../interface';

const ListIssues: React.FC = () => {
    const data_issues: Array<Iissues> = useSelector((state: Array<Iissues>) => state);
    return (
        <div>
            <ul>
                {
                    data_issues.map((item: Iissues, index: number) => (<Card key={index} index={index} item={item} />))
                }
            </ul>
        </div>
    );
}

export default ListIssues;