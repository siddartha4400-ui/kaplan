import axios from 'axios';
import { uploadFiles } from '../../Services/ApiEndPoints';
export const file = {
  uploadFile,
  uploadArrayFileList
};

async function uploadFile(files, customUrl = '', path = ''){
  var result = {};
  const formData = new FormData();
  for (const key of Object.keys(files)) {
    formData.append(`file_${key}`, files[key])
  }
  if(path)
    formData.append('path', path);
  let url = customUrl || uploadFiles;
  await axios.post(url, formData)
      .then(response => {
          result = response.data;
      })
      .catch(error => {
          console.error(error);
      })
      return result;
}

async function uploadArrayFileList(files, customUrl = '', path = '', onlyFileId = 0){
  var result = {};
  const formData = new FormData();
  files.forEach((file, i)=>formData.append('file_' + i, file));
  formData.append('only_file_id', onlyFileId);
  if(path)
  formData.append('path', path);
  let url = customUrl || uploadFiles;
  await axios.post(url, formData)
    .then(response => {
        result = response.data;
    })
    .catch(error => {
        console.error(error);
    })
    return result;
}

