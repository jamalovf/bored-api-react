import React from 'react'

const HeaderIntro = ({name, buttonName}) => {

    return (
        <div className="content-header">
            <h3>Data fetched from the {name}. With the {name}, you will never be bored again!</h3>
            <h5>If you dont like the suggested activity, click on the {buttonName} button and the page will be refreshed with a new fun activity</h5>
        </div>
    )
}

export default HeaderIntro
