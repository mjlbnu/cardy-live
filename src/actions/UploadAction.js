import * as UploadApi from '../api/UploadRequest';

export const uploadStatements = (data) => async(dispatch) => {
  dispatch({ type: "UPLOAD_START"})
  try {
    console.log(data);
    const newStatements = await UploadApi.uploadStatements(data);
    dispatch({ type: "UPLOAD_SUCCESS" })
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" })
  }
}