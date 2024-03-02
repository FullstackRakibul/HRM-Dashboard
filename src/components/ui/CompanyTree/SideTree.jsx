import React, { 
  useState 
} from 'react';
import { 
  Tree,
  Row,
  Col,
  Spin,
  Skeleton
} from 'antd';
import { 
  useSelector,
  useDispatch 
} from 'react-redux';
import { 
  handleCommonSearchChange 
} from '../../../Redux/features/search/searchSlice';
import './index.less';
import Data from './Data.json'
const { SHOW_PARENT } = Tree;
const { TreeNode } = Tree;


const SideTree = ({data,onChange,value,size,propsLists}) => {
  const dispatch=useDispatch();;
  const {companyTree}=useSelector((state)=>state.common);
  const {searchState,setSearchState}=propsLists;

  const tProps = {
    value,
    treeCheckable: true,
    showLine:true,
    checkable:true,
    showCheckedStrategy: SHOW_PARENT,
    style: {
      width: '100%',
    },
  };

  const handleChange=(checkedKey,e)=>{
    //console.log("Check Nodes : ",checkedKey.checked)
   // console.log("Node : ",e.node)
   //console.log(checkedKey)

   const treeLists=configTreeLists(checkedKey.checked);
    setSearchState((state)=>{
      return{
        ...state,
        sideTree:treeLists
      }
  })
  //  dispatch(handleCommonSearchChange({
  //   name:'sideTree',
  //   value:treeLists
  //  }))
   //console.log('Search Data : ',treeLists);
  //  const testCondition=addedCondition(treeLists);

  //  console.log("Condition : ",testCondition)

  }

  // const addedCondition=(lists)=>{
  //   const myLists=[...lists];
  //   let condition="AND (";
  //   if(lists.length){
  //     myLists.map((d,index)=>{
  //       if(index===0){
  //         condition+=`(`
  //       }else{
  //         condition+=` OR (`
  //       }
  //       if(d.company){
  //         condition+=`U.CompanyID=${d.company}`;
  //       }
  //       if(d.unit){
  //         if(d.company){
  //           condition+=` AND U.UnitId=${d.unit}`;
  //         }else{
  //           condition+=` U.UnitId=${d.unit}`;
  //         }
  //       }
  //       if(d.department){
  //         if(d.company || d.unit){
  //           condition+=` AND B.DepartmentID=${d.department}`;
  //         }else{
  //           condition+=` B.DepartmentID=${d.department}`;
  //         }
  //       }
  //       if(d.section){
  //         if(d.company || d.unit || d.department){
  //           condition+=` B.SectionID=${d.section}`;
  //         }else{
  //           condition+=` AND B.SectionID=${d.section}`;
  //         }
  //       }
  //       if(d.wing){
  //         if(d.company || d.unit || d.department || d.section){
  //           condition+=` U.WingID=${d.wing}`;
  //         }else{
  //           condition+=` AND U.WingID=${d.wing}`;
  //         }
  //       }
  //       if(d.team){
  //         condition+=` U.CompanyID=${d.company}`;
  //       }
  //       condition+=`)`
  //     })
  //   }
  //   condition+=")"
  //   return condition;
  // }

  const configTreeLists=(lists)=>{
    let configCompanyLists=[];

    if(lists.length){
        lists.map((cData)=>{
            let singleLists=cData;
            let brokenLists=singleLists.split("}");
            let finalLists=[];
            const obj={
                company:"",
                unit:"",
                department:"",
                section:"",
                wing:"",
                team:""
            };
            if(brokenLists.length){
                let len=brokenLists.length;
                brokenLists.splice((len-1),1);
                for(let i=0; i<len-1; i++){
                    let c=brokenLists[i];
                    if(c.charAt(0)=="{"){
                        c = c.substring(1);
                    }
                    finalLists=[...finalLists,c];
                }
                if(finalLists.length){
                    let len2=finalLists.length;
                    for(let i=0; i<len2; i++){
                        switch(i){
                            case 0:
                                obj.company=finalLists[i];
                                break;
                            case 1:
                                obj.unit=finalLists[i];
                                break;
                            case 2:
                                obj.department=finalLists[i];
                                break;
                            case 3:
                                obj.section=finalLists[i];
                                break;
                            case 4:
                                obj.wing=finalLists[i];
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
            configCompanyLists=[...configCompanyLists,obj];
        })
      }
    return configCompanyLists;
  }
  const bindTree=(data)=>{
    
  }
  const testLoading=(tree)=>{
    //console.log("JJJJ")
  }
  const treeDataDB=companyTree?.length?companyTree:[];

  // const loadingData=<Row>
  //   <Col span={24} style={{
  //     textAlign:"center"
  //   }}>
  //     <Spin tip="Loading...">
  //       <div className="content" />
  //     </Spin>
  //   </Col>
  // </Row>
  const loadingData=<Skeleton active={true} />
  const notFoundData=<Row>
    <Col span={24} style={{
      textAlign:"center"
    }}>
        <h4>Opps ! Data Not Found.</h4>
    </Col>
  </Row>
  return (
    companyTree?.length?(
      <Tree 
      // style={{
      //   overflowX:'visible'
      // }}
        // maxTagCount={2} 
        className='sidebar-tree'
        labelInValue={true} 
        treeNodeFilterProp='title' 
        size={size?size:"small"}
        {...tProps}
        placeholder="---Select---"
        listHeight={350}
        treeLine={true}
        checkStrictly={true}
        onCheck={handleChange}
        //notFoundContent={treeDataDB.length?notFoundData:loadingData}
        //virtual={false}
        // treeCheckable={true}
        >
          {
            treeDataDB.length?treeDataDB.map((company,cIndex)=>{
              return(
                <TreeNode title={company.companyName} value={`{${company.companyId}}`} key={`{${company.companyId}}`}>
                  {company.unitDtos.length?company.unitDtos.map((unit,uIndex)=>{
                    return(
                      <TreeNode 
                      title={unit.unitName} 
                      value={`{${company.companyId}}{${unit.unitId}}`} 
                      key={`{${company.companyId}}{${unit.unitId}}`}
                      >
                        {unit.departmentDtos.length?unit.departmentDtos.map((department,dIndex)=>{
                          return(
                            <TreeNode
                            title={department.departmentName} 
                            value={`{${company.companyId}}{${unit.unitId}}{${department.departmentId}}`} 
                            key={`{${company.companyId}}{${unit.unitId}}{${department.departmentId}}`}
                            >
                              {department.sectionDtos.length?department.sectionDtos.map((section,sIndex)=>{
                                return(
                                  <TreeNode 
                                  title={section.sectionName} 
                                  value={`{${company.companyId}}{${unit.unitId}}{${department.departmentId}}{${section.sectionId}}`} 
                                  key={`{${company.companyId}}{${unit.unitId}}{${department.departmentId}}{${section.sectionId}}`}
                                  >
                                    {section.wingDtos.length?section.wingDtos.map((wing,wIndex)=>{
                                      return(
                                        <TreeNode 
                                        title={wing.wingName} 
                                        value={`{${company.companyId}}{${unit.unitId}}{${department.departmentId}}{${section.sectionId}}{${wing.wingId}}`} 
                                        key={`{${company.companyId}}{${unit.unitId}}{${department.departmentId}}{${section.sectionId}}{${wing.wingId}}`}
                                        >
                                          {wing.teamDtos.length?wing.teamDtos.map((team,tIndex)=>{
                                            return(
                                              <TreeNode
                                              title={team.teamName}
                                              value={`{${company.companyId}}{${unit.unitId}}{${department.departmentId}}{${section.sectionId}}{${wing.wingId}}{${team.teamId}}`}
                                              key={`{${company.companyId}}{${unit.unitId}}{${department.departmentId}}{${section.sectionId}}{${wing.wingId}}{${team.teamId}}`}
                                              >
                                              </TreeNode>
                                            )
                                          }):""}
                                        </TreeNode>
                                      )
                                    }):""}
                                  </TreeNode>
                                )
                              }):""}
                            </TreeNode>
                          )
                        }):""}
                      </TreeNode>
                    )
                  }):""}
                </TreeNode>
              )
            }):""
          }
      </Tree>
    ):loadingData
  )
};
export default SideTree;