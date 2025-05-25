import React from 'react';

const Home = () => {
    return (
        <div
            style={{
                maxWidth: '900px',
                margin: '60px auto 80px',
                padding: '40px 30px',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: '#222',
            }}
        >
            {/* Welcome Section */}
            <section
                style={{
                    textAlign: 'center',
                    marginBottom: '50px',
                    padding: '30px',
                    borderRadius: '18px',
                    background: 'linear-gradient(135deg, #00B9F2, #7FD8F7)',
                    color: '#fff',
                    boxShadow: '0 15px 40px rgba(0, 185, 242, 0.4)',
                    fontWeight: '600',
                    letterSpacing: '1.5px',
                }}
            >
                <h1
                    style={{
                        fontSize: '3.5rem',
                        marginBottom: '18px',
                        fontWeight: '900',
                        textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                    }}
                >
                    Добредојде на сајтот!
                </h1>
                <p style={{ fontSize: '1.3rem', lineHeight: '1.7', textShadow: '1px 1px 6px rgba(0,0,0,0.2)' }}>
                    Ова е почетната страница. Проектот е создаден со цел да ја поддржи свеста за менталното здравје и да обезбеди практични алатки за подобрување на емоционалната благосостојба.
                </p>
            </section>

            {/* About & Benefits Container */}
            <div
                style={{
                    display: 'flex',
                    gap: '30px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                {/* About Us */}
                <div
                    style={{
                        flex: '1 1 350px',
                        padding: '25px 30px',
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #00B9F2, #CDC1B6)',
                        color: '#fff',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                        textAlign: 'center',
                    }}
                >
                    <h2 style={{ marginBottom: '18px', fontWeight: '700', letterSpacing: '1.2px' }}>За Нас</h2>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.6' }}>
                        Посветен за создавање корисни алатки за учениците. Апликацијата е изработена со цел да се унапреди свесноста за менталното здравје и да се поддржат младите во нивниот развој.
                    </p>
                </div>

                {/* Benefits */}
                <div
                    className="benefits-container"
                >
                    <h2 style={{ marginBottom: '25px', fontWeight: '700', fontSize: '2rem', color: '#00B9F2' }}>
                        Придобивки од користењето на апликацијата
                    </h2>
                    <ul
                        style={{
                            listStyle: 'none',
                            paddingLeft: 0,
                            fontSize: '1.15rem',
                            lineHeight: '2.2',
                            maxWidth: '480px',
                            margin: 'auto',
                            textAlign: 'left',
                        }}
                    >
                        {[
                            'Зголемена свест за сопственото психолошко здравје',
                            'Личен извештај со совети',
                            'Пристап до статистики базирани на реални податоци',
                            'Поддршка преку интерактивни алатки',
                        ].map((item, i) => (
                            <li
                                key={i}
                                style={{
                                    marginBottom: '15px',
                                    position: 'relative',
                                    paddingLeft: '25px',
                                }}
                            >
                <span
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        height: '14px',
                        width: '14px',
                        backgroundColor: '#00B9F2',
                        borderRadius: '50%',
                        display: 'inline-block',
                    }}
                />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
