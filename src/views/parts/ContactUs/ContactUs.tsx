import { useState, useEffect } from 'react';
import "./ContactUs.scss";

interface ContactUsState {
    termsChecked: boolean;
    sendForm: boolean;
    userName: string;
    userEmail: string;
    userMessage: string;
    acceptTerms: boolean;
}


export const ContactUs = () => {

    const [state, setState] = useState<ContactUsState>({
        termsChecked: false,
        sendForm: false,
        userName: "",
        userEmail: "",
        userMessage: "",
        acceptTerms: false
    });

    useEffect(() => {
        if ( state.sendForm ) {
            
            const clearForm = ( clearInputs: boolean = false ) => {
                setState({
                    ...state,
                    sendForm: false,
                    userEmail: clearInputs ? "" : state.userEmail,
                    userName: clearInputs ? "" : state.userName,
                    userMessage: clearInputs ? "" : state.userMessage,
                    acceptTerms: clearInputs ? false : state.acceptTerms,
                });
            }

            const sendRequest = () => {
                console.log("userName: " + state.userName);
                console.log("userEmail: " + state.userEmail);
                console.log("userMessage: " + state.userMessage);
                console.log("acceptTerms: " + state.acceptTerms);
        
                if ( !state.acceptTerms ) {
                    console.warn("Zaakceptuj warunki!");
                    clearForm();
                    return;
                }
        
                if ( state.userName.length === 0 ) {
                    console.warn("Wpisz swoje imię i nazwisko");
                    clearForm();
                    return;
                }
        
                if ( state.userEmail.length === 0 ) {
                    console.warn("Wpisz swój email");
                    clearForm();
                    return;
                }
        
                if ( state.userMessage.length === 0 ) {
                    console.warn("Wpisz wiadomość");
                    clearForm();
                    return;
                }
        
                console.log("Wiadomość została wysłana!");
                clearForm(true);
            }

            sendRequest();
        }
    }, [ state ]);

    return <section className="container-full contact-us" id="contact">
        <div className='container'>
            <h1 className='section-title'>Skontaktuj się z nami!</h1>
            <h3 className='section-subtitle'>Chętnie odpowiemy na wszelkie pytania.</h3>
            
            <div className="contact-us-container">
                
                <div className="two-parts">
                    <div className="part left">
                        <img src="/static/images/teacher-drawing-class.jpg" alt="Contact"/>
                    </div>
                    <div className="part right">
                        <div className="form-title">
                            <h2>Skontaktuj się z nami</h2>
                        </div>
                        <div className="form">
                            <form id="contact-form">
                                <div className="form-group">
                                    {/* <label htmlFor="username" >Imię i nazwisko</label> */}
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={state.userName}
                                        onChange={(e) => setState({...state, userName: e.target.value})}
                                        placeholder="Podaj swoje imię i nazwisko"
                                    />
                                </div>
                                <div className="form-group">
                                    {/* <label htmlFor="email">E-mail</label> */}
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        onChange={(e) => setState({...state, userEmail: e.target.value})}
                                        value={state.userEmail}
                                        placeholder="Podaj swój e-mail"
                                    />
                                </div>
                                <div className="form-group">
                                    {/* <label htmlFor="message" >Wiadomość</label> */}
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder='Wiadomość'
                                        value={state.userMessage}
                                        onChange={(e) => setState({...state, userMessage: e.target.value})}
                                        cols={ 50 }
                                        rows={ 4 }
                                    ></textarea>
                                </div>
                                <div className="form-group vertical">
                                    <input
                                        type="checkbox"
                                        name="terms-of-service"
                                        id="terms-of-service-checkbox"
                                        checked={state.acceptTerms}
                                        onChange={(e) => setState({...state, acceptTerms: e.target.checked })}
                                    />
                                    <span className="checkmark"></span>
                                    <span>Akceptuję <a href="/warunki">Warunki</a></span>
                                </div>
                                <div className="form-group vertical center">
                                    <input 
                                        id="submit-form-button"
                                        type="submit"
                                        value="Wyślij"
                                        disabled={state.sendForm}
                                        onClick={ (e) => {
                                            e.preventDefault();
                                            setState({...state, sendForm: true });
                                        } }
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
