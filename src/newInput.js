import React from 'react'

function NewInput() {
    return (
        <div className="newData">
            <h4>New Birthdays</h4>
            <form >
                <label>
                    Name:
                    <input type="text" required name="name" />
                </label>
                <br />
                <label>
                    Age:
                    <input type="number" required name="birthday" />
                </label>
                <br />
                <label>
                    Birthday:
                    <input type="text" required name="birthday" />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NewInput