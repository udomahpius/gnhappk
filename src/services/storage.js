import {createClient} from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY
);

const fileSizeLimitInMB = 200;

export const uploadFile = async (file) => {
  let fileSize = file.size / 1024 / 1024; // in MB
  if (fileSize > fileSizeLimitInMB) {
    throw new Error(`File size should be less than ${fileSizeLimitInMB}MB`);
  }
  let randomFileName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  const fileName = `${Date.now()}-${Date.now()}-${randomFileName}`;
  const { data, error } = await supabase.storage
    .from('posts')
    .upload(`${fileName}`, file, {
      cacheControl: '3600',
      upsert: false,
    })
  if (error) {
    throw new Error("Error uploading file. Please try again.")
  }
  return data
}


export const uploadFeedbackScreenshot = async (file) => {
  const fileName = `${Date.now()}-${Date.now()}`;
  const { data, error } = await supabase.storage
    .from('user_feedbacks')
    .upload(`${fileName}`, file, {
      cacheControl: '3600',
      upsert: false,
    })
  if (error) {
    throw error
  }
  return data
}

export const uploadVoiceNote = async (file) => {
  return new Promise((resolve, reject) => {
    supabase.auth.getUser().then((value) => {
      if(value.data?.user) {
        // folder name is the user id
        let folderName = "notes/" + value.data.user.id;
        const fileName = `${Date.now()}-${Date.now()}`;
        supabase.storage
          .from(folderName)
          .upload(`${fileName}`, file, {
            cacheControl: '3600',
            upsert: false,
          })
          .then(() => {
            // get signed url
            supabase.storage
              .from(folderName)
              .createSignedUrl(`${fileName}`, 60*60*24)
              .then((value) => {
                resolve({
                  signed_url: value.data.signedUrl,
                  file_name: fileName,
                  folder_name: folderName,
                  storage_type: "supabase",
                });
              }).catch((error) => {
                reject(error);
              });
          }
          ).catch((error) => {
            reject(error);
          }
          )
      }
    }).catch((error) => {
      reject(error)
    }
    )
  })
}
