import {
    Row,
    Col,
    Button
} from 'antd';
import {
    useSelector 
} from 'react-redux';
import ComponentHeader from '../../../../components/ui/ComponentHeader';
import ContentContainer from '../../../../components/ui/ContentContainer';
import TenderPublishListsComponent from '../../../../components/ETender/Published/TenderPublishLists';


const TenderPublishListsPage=()=>{
    const {
        classLists
    }=useSelector((state)=>state.ui)
    
    return(
        <>
            <ComponentHeader
            title={"Tender Publish Lists"}
            description={"Here you can see published tender lists."}
            >
                <Button
                size='small'
                className={`${classLists.globalResetButton?classLists.globalResetButton:''}`}
                icon={<i className="fas fa-window-restore"></i>}
                >
                    Reset
                </Button>
            </ComponentHeader>
            <ContentContainer>
                <TenderPublishListsComponent/>
            </ContentContainer>
        </>
    )
}
export default TenderPublishListsPage;