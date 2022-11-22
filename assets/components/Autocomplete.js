import React from "react";
import styled from "styled-components";


const StyledNoSuggestions = styled.div`
    color: #999;
    padding: 0.5rem;
`

const StyledSuggestions = styled.div`
    border: 1px solid #999;
    list-style: none;
    margin-top: 0;
    max-height: 143px;
    overflow-y: auto;
    padding-left: 0;
    width: calc(300px + 1rem);
    & > li {
        padding: 0.5rem;
    }
`

const Autocomplete = ({ suggestions }) => {

    const init = {
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: "",
    }

    const [suggestionsList, setSuggestions] = React.useState(init);

    const onChange = (e) => {
        const userInput = e.target.value;
        const filteredSuggestions = suggestions.filter(
            suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setSuggestions({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: userInput,
        })
    }

    const onClick = (e) => {
        setSuggestions({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        })
    }

    const onKeyDown = (e) => {
        const {activeSuggestion, filteredSuggestions} = suggestions;

        if(e.keyCode === 13) {
            setSuggestions({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });
        } else if (e.keycode === 38){
            if(activeSuggestion === 0){
                return;
            }
            setSuggestions({activeSuggestion: activeSuggestion - 1});
        } else if (e.keyCode === 40){
            if(activeSuggestion - 1 === filteredSuggestions.length){
                return;
            }
            setSuggestions({activeSuggestion: activeSuggestion + 1});
        }
    }

    const {activeSuggestion, filteredSuggestions, showSuggestions, userInput} = suggestionsList;
    let suggestionsListComponent;
    if(showSuggestions && userInput) {
        if(filteredSuggestions.length) {
            suggestionsListComponent = (
                <StyledSuggestions className="float-end">
                    {filteredSuggestions.map((suggestion, index) => {
                        let className;

                        if(index === activeSuggestion) {
                            className = "suggestion-active";
                        }
                        return (
                            <li className={className} key={suggestion} onClick={onClick} >
                                {suggestion}
                            </li>
                        );
                    })}
                </StyledSuggestions>
            );
        } else {
            suggestionsListComponent = (
                <StyledNoSuggestions className="float-end">
                    <em>Aucune Suggestions Disponible.</em>
                </StyledNoSuggestions>
            )
        }
    }

    return(
        <>
            <input
                type="text"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={userInput}
                className="float-end mt-2"
            />
            {suggestionsListComponent}
        </>
    )

}

export default Autocomplete;
