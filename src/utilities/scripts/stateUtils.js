const StateUtils = ((setState) => {
    
    const setLoading = (() => {
        setState((prevState) => ({
            ...prevState,
            loading: true,
            fetchCount: prevState.fetchCount + 1,
        }));
    });

    const setSavedData = ((data) => {
        setState((prevState) => ({
            ...prevState,
            savedData: data
        }));
    });

    const setLoadingAndSave = ((boolean, data) => {
        setState((prevState) => ({
            ...prevState,
            loading: boolean,
            savedData: data
        }));
    });

    const setError = ((response) => {
        setState((prevState) => ({
            ...prevState,
            loading: false,
            error: true,
            errorResponse: {
                status: response?.status,
                statusText: response?.statusText,
                message: response?.message,
            }
        }));
    });

    const setCompleted = ((object) => {
        setState((prevState) => ({
            ...prevState,
            error: false,
            errorResponse: null,
            loading: false,
            completed: true,
            fetchCount: 0,
            payload: object || null,
        }))
    });

    const toggleMenu = (() => {
        setState((prevState) => ({
            ...prevState,
            menuView: !prevState.menuView
        }));
    });

    const resetState = (() => {
        setState((prevState) => ({
            ...prevState,
            loading: false,
            completed: false,
            error: false,
            errorResponse: null,
        }));
    });

    const handleTextChange = ((event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    });

    const handleBooleanToggle = ((event) => {
        const { name } = event.target;
        setState((prevState) => ({
            ...prevState,
            [name]: !prevState[name] // Toggle the boolean value for the given 'name'
        }));
    });


    return { setLoading, setSavedData, setLoadingAndSave, setError, setCompleted, resetState, toggleMenu, handleTextChange, handleBooleanToggle }
});

export default StateUtils;