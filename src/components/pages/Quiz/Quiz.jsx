import React from "react";
import { useParams, Link } from "react-router-dom";
import quizzData from '../../datas/QuizData'

export default function Quiz(){
    const { id } = useParams();
    const nbquest = (Math.floor(Math.random() * 2));
    const response = [quizzData[nbquest].response1, 
                        quizzData[nbquest].response2, 
                        quizzData[nbquest].response3, 
                        quizzData[nbquest].response4, 
                        quizzData[nbquest].response5, 
                        quizzData[nbquest].response6, 
                        quizzData[nbquest].response7, 
                        quizzData[nbquest].response8, 
                        quizzData[nbquest].response9, 
                        quizzData[nbquest].response10]
    const shuffledresponse = response.sort((a, b) => 0.5 - Math.random());



    return(
        <div>

        

        <h2>{quizzData[nbquest].question}</h2>

            {
                shuffledresponse.map(e => {
            return(
                e === quizzData[nbquest].response1 ? <Link to='/response/1'> <p>{e}</p></Link>
                : <Link to='/response/2'><p>{e}</p></Link>
                        

                    )
                })
            }
        


        </div>

    )
    

}