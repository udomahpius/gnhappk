import { useCallback, useEffect, useState, useContext } from "react";
import debounce from "lodash.debounce";
import useRequest from "@/api/useRequest";
import { createSaveDraftRequest, createUpdatePostRequest } from "@/api/requestFactory/post";
import { NotificationContext } from "@/context/notification-context";

const DEBOUNCE_SAVE_DELAY_MS = 1000;

export default function useAutosave(
  post,
  ){
  // This UI state mirrors what's in the database.
  const [data, setData] = useState(post);
  const [lastSavedAt, setLastSavedAt] = useState();
  const { requestMaker } = useRequest();
  const { showNotification } = useContext(NotificationContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSave = useCallback(
    debounce(async (newData) => {
      saveData(newData);
    }, DEBOUNCE_SAVE_DELAY_MS),
    []
  );

  const saveData = async (newData) => {
    if(newData.text === undefined || newData.text === null || newData.text === ""){
      newData.text = "";
      if(newData.id === undefined || newData.id === null || newData.id === ""){
        return;
      }
    }
    if(newData.status === "published"){
      return;
    }
    if(newData.id === undefined || newData.id === null || newData.id === ""){
      console.log(newData);
      let req = createSaveDraftRequest(newData);
      req['disableLoading'] = true;
      await requestMaker(req).then(
        (response) => {
          setData({
            id: response.data.id,
            mentions: response.data.mentions,
            text: response.data.text,
            richText: response.data.rich_text,
            image_url: response.data.image_url,
            file_url: response.data.file_url,
            status: response.data.status,
            carousel_title: response.data.carousel_title,
            linked_in_account_id: response.data.linked_in_account_id,
            linked_in_account: response.data.linked_in_account
          });
          setLastSavedAt(response.data.updated_at);
        }
      ).catch((error) => {
        console.error(error);
        let errorContent = error?.response?.data?.errors?.[0] || "Error saving post";
        showNotification({
          title: "Something went wrong",
          content: errorContent,
        }, "error");
      });
      return;
    }else{
      let req = createUpdatePostRequest(newData)
      req['disableLoading'] = true;
      requestMaker(req).then(
        (response) => {
          setLastSavedAt(response.data.updated_at);
        }
      ).catch((error) => {
        console.error(error);
        let errorContent = error?.response?.data?.errors?.[0] || "Error saving post";
        showNotification({
          title: "Something went wrong",
          content: errorContent,
        }, "error");
      });
    }
  };
  // This effect runs only when `data` changes.
  // Effectively achieving the auto-save functionality we wanted.
  useEffect(() => {
    if (data) {
      debouncedSave(data);
    }
  }, [data, debouncedSave]);

  return [data, setData, lastSavedAt, setLastSavedAt];
}
