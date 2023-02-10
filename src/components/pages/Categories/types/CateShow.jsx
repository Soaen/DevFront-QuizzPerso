import CateData from '../../../datas/CateData'
import { Link } from 'react-router-dom';

export default function CateShow(){

    const cateList = CateData.map(e => {
        return(
        <div className='cate-container'>
            <Link to={{
                pathname: `/quiz/${e.id}`,
                state: { CateData: e}
            }} >
                <p className='cate-name'>{e.name}</p>
            </Link>
        </div>
        )
    })

    return cateList
}