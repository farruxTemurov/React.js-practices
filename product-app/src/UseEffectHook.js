import { Component, useState, useEffect } from "react";

function useEffectHook() {
    const [counter, setCount] = useState(0);
    const [isLogin, setIsLogin] = useState(false);

    const onIncrement = () => {
        setCount(prevCounter => prevCounter + 1)
    };

    const onDecrement = () => {
        setCount(prevCounter => prevCounter - 1)
    };

    const onReset = () => {
        setCount(0)
    };

    const onToggleLogin = () => {
        setIsLogin(prevState => !prevState)
    };

    useEffect(() => {
        document.title = `Counter: ${counter}`
    }, [isLogin]);


    return (
        <div className="w-50 mx-auto mb-5">
            <div className="border p-3 mt-5">
                <p className="text-center">{counter}</p>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success" onClick={onIncrement}>+</button>
                    <button className="btn btn-danger mx-2" onClick={onDecrement}>-</button>
                    <button className="btn btn-danger mx-2" onClick={onReset}>Reset</button>
                </div>
                <div className="mt-3 text-center">
                    <button className="btn btn-outline-primary" onClick={onToggleLogin}>
                        {isLogin ? 'Logout' : 'Login'}
                    </button>
                    {isLogin && <p>You are logged in</p>}
                </div>
            </div>
        </div>
    )
}

export default useEffectHook;