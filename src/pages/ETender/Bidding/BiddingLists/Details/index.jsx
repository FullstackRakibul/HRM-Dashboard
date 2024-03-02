import React, { useState } from 'react';
import { 
    useParams 
} from 'react-router-dom';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import ComponentHeader from '../../../../../components/ui/ComponentHeader';
import ContentContainer from '../../../../../components/ui/ContentContainer';
import ResetButton from '../../../../../components/ui/Button/Reset';
import BiddingDetails from '../../../../../components/ETender/Bidding/BiddingLists/Details';
import { convertActualtDateString } from '../../../../../utils/DateConfig';


const BiddingListsDetailsPage=()=>{
    const params=useParams();
    const {
        TenderNo
    }=params;

    const first_part=[
        'SL',
        'Item Name',
        'Grade',
        'Unit',
        'Qty'
    ]
    const last_part=[
        'Last Price',
        'Last Selling Date',
        'Top Price',
        'Rise/Fall',
        'Winner',
        'Earned Value'
    ]

    const [dynamicColumn,setDynamicColumn]=useState([]);
    const [dLen,setDlen]=useState(0);
    const [detailsInfo,setDetailsInfo]=useState({});

    const [datas,setDatas]=useState([]);


    const exportToExcel = () => {
    //     //const worksheet = XLSX.utils.json_to_sheet(data);
    //     const worksheet = XLSX.utils.aoa_to_sheet(data);
    //     const workbook = XLSX.utils.book_new();
    //     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    //    // XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    
    //     // Buffer to store the generated Excel file
    //     const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //     const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    
    //     saveAs(blob, "data.xlsx");
    let headers=[];
    headers=[...first_part];

    let middle_part=[];

    if(dynamicColumn.length){
        dynamicColumn.map((d)=>{
            headers=[...headers,d.title];
        })
    }
    // 
    if(last_part.length){
        last_part.map((d)=>{
            headers=[...headers,d]
        })
    }
    
    const h_len=headers.length;
    const half=parseInt((h_len/2)+1);
    let top_info_arr=[[],[],[]];

    for(let i=0; i<3; i++){
        if(i==0){
            for(let j=0; j<h_len; j++){
                if(j==half){
                    top_info_arr[i][half]='Ha-Meem Group';
                }else{
                    top_info_arr[i][j]='';
                }
            }
        }else if(i==1){
            for(let j=0; j<h_len; j++){
                if(j==half){
                    top_info_arr[i][half]='387,TML Building, Tejgaon industrial Area';
                }else{
                    top_info_arr[i][j]='';
                }
            }
        }
        else if(i==2){
            for(let j=0; j<h_len; j++){
                if(j==0){
                    top_info_arr[i][j]='Tender No : '+TenderNo;
                }
                else if(j==half){
                    top_info_arr[i][half]='Open Date: '+detailsInfo?.OpenDate;
                }else if(j==(h_len-1)){
                    top_info_arr[i][j]='Close Date: '+detailsInfo?.CloseDate;
                }
                else{
                    top_info_arr[i][j]='';
                }
            }
        }
        // else{
        //     for(let j=0; j<h_len; j++){
        //         top_info_arr[i][j]='';
        //     }
        // }
    }
    
    //console.log("Dataa: ",top_info_arr)
    const datasLen=datas.length
    let newDatas=[];

    if(datasLen){
        for(let i=0; i<datasLen; i++){
            newDatas.push([]);
        }
        for(let i=0; i<datasLen; i++){
            let first_part=[];
            first_part.push(parseInt(i+1));
            first_part.push(datas[i].ItemName);
            first_part.push(datas[i].ItemGrade);
            first_part.push(datas[i].ItemUnit);
            first_part.push(datas[i].ItemQuantity);

            let newChildren=[...datas[i].dynamic];

            const d_len=newChildren.length;
            newChildren.map((d)=>{
                first_part.push(d.quantity)
            })

            first_part.push(datas[i].LastPrice);
            first_part.push(convertActualtDateString(datas[i].LastBidDate));
            first_part.push(datas[i].TopPrice);
            first_part.push({ t: 'n', f: `${String.fromCharCode((8+d_len) + 64)}${4+(i+1)}-${String.fromCharCode((6+d_len) + 64)}${4+(i+1)}`});
            first_part.push(datas[i].Winner);
            first_part.push({ t: 'n', f: `${String.fromCharCode(5 + 64)}${4+(i+1)}*${String.fromCharCode((8+d_len) + 64)}${4+(i+1)}`});
            newDatas[i]=first_part;
        }
    }

    const footer_part=[];

    footer_part.push('Total');
    footer_part.push('');
    footer_part.push('');
    footer_part.push('');
    footer_part.push({t: 'n', f: `SUM(E5:E${5+(datasLen-1)})`});

    const dynamic_len=dynamicColumn.length;

    dynamicColumn.map((d)=>{
        footer_part.push('');
    })

    footer_part.push('');
    footer_part.push('');
    footer_part.push('');
    footer_part.push({t: 'n', f: `SUM(${String.fromCharCode((dynamic_len+9) + 64)}5:${String.fromCharCode((dynamic_len+9) + 64)}${5+(datasLen-1)})`});
    footer_part.push('');
    footer_part.push({t: 'n', f: `SUM(${String.fromCharCode((dynamic_len+11) + 64)}5:${String.fromCharCode((dynamic_len+11) + 64)}${5+(datasLen-1)})`});



    let footer_gap=[[],[],[]]
    
    for(let i=0; i<3; i++){
        if(i==0){
            for(let j=0; j<h_len; j++){
                footer_gap[i][j]='';
            }
        }else if(i==1){
            for(let j=0; j<h_len; j++){
                footer_gap[i][j]='';
            }
        }
        else if(i==2){
            for(let j=0; j<h_len; j++){
                footer_gap[i][j]='';
            }
        }
    }

    let sign_area=[[],[],[]]
    
    for(let i=0; i<3; i++){
        if(i==0){
            for(let j=0; j<h_len; j++){
                if(j==0){
                    sign_area[i][j]='Lizna';
                }else if(j==4){
                    sign_area[i][j]='Maksud';
                }else if(j==8){
                    sign_area[i][j]='Mizan';
                }else if(j==13){
                    sign_area[i][j]='Honarable Md Sir';
                }
                
            }
        }else if(i==1){
            for(let j=0; j<h_len; j++){
                sign_area[i][j]='';
            }
        }
        else if(i==2){
            for(let j=0; j<h_len; j++){
                sign_area[i][j]='';
            }
        }
    }

    const data=[
        ...top_info_arr,
        [...headers],
        ...newDatas,
        [...footer_part],
        ...footer_gap,
        ...sign_area
    ]

    
    // const data = [
    //     ['','','','','','','',''],
    //     ['','','ItemName', 'Grade', 'Unit', 'Qty','Price','Total'],
    //     ['','',`Mens Denim Long Pant (v) Some with carpenter & austor approx. 
    //     up to 10% oversize ( more than 44"waist)`, 'A+', 'pcs',200,300,{ t: 'n', f: 'F3*G3' }],
    //     ['','',`Mens Twill Long Pant (v) Some With Austor & Carpenter`, 'A+', 'pcs',250,300,{ t: 'n', f: 'F4*G4' }]
    // ];
  
    const ws = XLSX.utils.aoa_to_sheet(data);

    

    const cellStyle = { alignment: { horizontal: 'center' } };
    ws['H1'].s = cellStyle;
    ws['H2'].s = cellStyle;
    ws['F5'].s = cellStyle;

    console.log("WS: ",ws)
    // for(let i=0; i<3; i++){
    //     if(i==0){
    //         for(let j=0; j<h_len; j++){
    //             if(j==half){
    //                 ws[`H1`].s = { alignment: { horizontal: 'center' } }; 
                   
    //             }
    //         }
    //     }else if(i==1){
    //         for(let j=0; j<h_len; j++){
    //             if(j==half){
    //                 //top_info_arr[i][half]='387,TML Building, Tejgaon industrial Area';
    //             }else{
    //                 //top_info_arr[i][j]='';
    //             }
    //         }
    //     }
    //     else if(i==2){
    //         for(let j=0; j<h_len; j++){
    //             if(j==0){
    //                // top_info_arr[i][j]='Tender No : '+TenderNo;
    //             }
    //             else if(j==half){
    //                 //top_info_arr[i][half]='Open Date: '+detailsInfo?.OpenDate;
    //             }else if(j==(h_len-1)){
    //                 //top_info_arr[i][j]='Close Date: '+detailsInfo?.CloseDate;
    //             }
    //             else{
    //                 //top_info_arr[i][j]='';
    //             }
    //         }
    //     }
    // }

    
    //   ws['!cols'][0] = 
    //     // { width: 10 }, // First empty column
    //     // { width: 10 }, // Second empty column
    //     { width: 30 } // Name column width
    //     // { width: 10 }, // Age column width
    //     // { width: 10 }, // City column width
    //     // { width: 10 },
    //     // { width: 10 },
    //     // { width: 10 } 

    //   ;

  
      

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        //XLSX.writeFile(wb, `${TenderNo}.xlsx`);
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    
        saveAs(blob, `${TenderNo}.xlsx`);
    };

    
    return(
        <>
            <ComponentHeader
            title={"Bidding Details"}
            description={`Here is all bidding details for Tender No : ${TenderNo}`}
            >
                <ResetButton
                onSubmit={()=>{
                    exportToExcel();
                }}
                >
                    Print
                </ResetButton>
            </ComponentHeader>
            <ContentContainer>
                <BiddingDetails 
                TenderNo={TenderNo}
                props={{
                    dLen:dLen,
                    setDlen,
                    dynamicColumn,
                    setDynamicColumn,
                    detailsInfo,
                    setDetailsInfo,
                    datas,
                    setDatas
                }}
                />
            </ContentContainer>
        </>
    )
}
export default BiddingListsDetailsPage;