import React, { useState } from 'react';
import ButtonNewIssue from '../newIssueButton';
import FormNewIssue from '../newIssueForm';
import Search from '../search';

const Header = () => {
    const [displayForm, setDisplayForm] = useState<boolean | null>(null)
    const methodHandleToogle = (state: boolean) => setDisplayForm(state);
    return (
        <header>
            <Search />
            <ButtonNewIssue funcHandleClick={methodHandleToogle} />
            {
                displayForm && <FormNewIssue />
            }
        </header>
    )
}

export default Header