import CateData from '../../../datas/QuizData'
export default function CateShow() {

    const listCate = CateData.map(e => {
        if(e.categorie === 1)
        return <div>
        <h3>{e.question}</h3>

            <p>{e.reponse1}</p>
            <p>{e.reponse2}</p>
            <p>{e.reponse3}</p>
            <p>{e.reponse4}</p>
            <p>{e.reponse5}</p>
            <p>{e.reponse6}</p>
            <p>{e.reponse7}</p>
            <p>{e.reponse8}</p>
            <p>{e.reponse9}</p>
            <p>{e.reponse10}</p>
            

        </div>
        return null;
    })
return listCate
}