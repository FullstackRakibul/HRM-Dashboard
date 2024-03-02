// Configure data lists for select input
export const configDataListForSelect=(lists=[],labelField,valueField)=>{
    const myLists=[...lists];
    let returnLists=[];

    if(lists.length && labelField && valueField){
        myLists.map((d)=>{
            const newObj={
                label:d[labelField],
                value:d[valueField],
                key:d[valueField]
            }
            returnLists=[...returnLists,newObj];
        })
    }

    return returnLists;
}

export const getMenuItemDetailsWithPath=(lists,key,path)=>{
    let stack=[]
    stack=stack.concat(lists);
    let res;
    while(stack.length){
        let cur = stack.shift();
        if (cur.children && cur.children.length > 0) {
        stack = cur.children.concat(stack);
        }
        if (path === cur[key]) {
        res = cur;
        }
    }

    return res;
}