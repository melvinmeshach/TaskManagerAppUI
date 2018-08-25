export const getCard = (title, description) => {
    return {
            key : createKey(),
            title : title,
            description : description
    }
}
export const createKey = ()=>
{
    let key = ([1e7]+1e3+4e3).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
    return key;
}
export const defaultReducerState = ()=>  {
    let groupId = createKey();
    return {
	cardGroupMap : {
		[groupId] : { 
                key : groupId,
                cardMap : getDefaultCards(),
                name : 'group1'
		    }
	    }
    }
}
export const getDefaultCards = ()=>{

    let cardId1 = createKey();
    let cardId2 = createKey();
    return {
        [cardId1] : {
            key : cardId1,
            title : 'title1',
            description : 'description1'
        },
        [cardId2] : {
            key : cardId2,
            title : 'title2',
            description : 'description2'
        }
    }
}