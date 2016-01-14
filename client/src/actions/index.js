// export const DOCUMENTS_SAVE_REQUEST = 'DOCUMENTS_SAVE_REQUEST';
// export const DOCUMENTS_SAVE_SUCCESS = 'DOCUMENTS_SAVE_SUCCESS';
// export const DOCUMENTS_SAVE_FAILURE = 'DOCUMENTS_SAVE_FAILURE';

// export function createDocuments(docs){
//   return function(dispatch){
//     dispatch(requestSaveDocument(docs));
//     return fetch(`http://localhost:3000/test`)
//             .then(function(response){
//               return response.json();
//             })
//             .then(function(json){
//               dispatch(receiveSaveDocument(docs,json));
//             });
//   }
// }
// function requestSaveDocument(){
//   return {type:DOCUMENTS_SAVE_REQUEST};
// }
// function receiveSaveDocument(){
//   return {type:DOCUMENTS_SAVE_SUCCESS,data:json};
// }


export const DOCUMENTS_CHANGE_TITLE='DOCUMENTS_CHANGE_TITLE';
export const DOCUMENTS_CHANGE_URI='DOCUMENTS_CHANGE_URI';

export function changeDocumentsTitle(title){
	return {
		type:DOCUMENTS_CHANGE_TITLE,
		title:title
	};
}

export function changeDocumentsUri(uri){
	return {
		type:DOCUMENTS_CHANGE_URI,
		uri:uri
	};
}