import { TreeSelect,Row,Col,Spin} from 'antd';
import React, { useState } from 'react';
import Data from './Data.json'
const { SHOW_PARENT } = TreeSelect;
const { TreeNode } = TreeSelect;


const CompanyTree = ({data,onChange,value,size}) => {

  const tProps = {
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    style: {
      width: '100%',
    },
  };

  const bindTree=(data)=>{
    
  }
  const testLoading=(tree)=>{
    //console.log("JJJJ")
  }
  const treeDataDB=data?data:Data;

  const loadingData=<Row>
    <Col span={24} style={{
      textAlign:"center"
    }}>
      <Spin tip="Loading..."/>
    </Col>
  </Row>
  const notFoundData=<Row>
    <Col span={24} style={{
      textAlign:"center"
    }}>
        <h4>Opps ! Data Not Found.</h4>
    </Col>
  </Row>
  return <TreeSelect 
        // maxTagCount={2} 
        labelInValue={true} 
        treeNodeFilterProp='title' 
        size={size?size:"small"}
        {...tProps}
        placeholder="---Select---"
        listHeight={350}
        treeLine={true}
        checkStrictly={true}
        notFoundContent={treeDataDB.length?notFoundData:loadingData}
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
        </TreeSelect>
};
export default CompanyTree;