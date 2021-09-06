import React, { useState } from 'react'

const ButtonClicker = () => {

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className="button-custom">
            <button class="button" onClick={refreshPage}>
                 GET A NEW SUGGESTION
            </button>
        </div>
    );
};

export default ButtonClicker;