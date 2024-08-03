const EndRetal = () => {
    return (
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <img
                src="http://localhost:3000/images/aaa.jpg"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                alt="Background Image"
            />
            <div
                style={{
                    position: 'absolute',
                    top: '15%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'red',
                    zIndex: 1,
                }}
            >
                <h1 style={{ fontSize: '5rem' }}>!!!סע לשלום</h1>
            </div>
        </div>
    );
    };
export default EndRetal