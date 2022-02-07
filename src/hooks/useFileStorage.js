import React, { useEffect, useState } from "react";
import { projectStorage, projectFirestore, timeStamp } from '../firebase/config';
const useFileStorage = (file) => {
    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        console.log('useEffectCalled');
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
          }, (err) => {
            setError(err);
          }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timeStamp();
            await collectionRef.add({ url, createdAt });
            setUrl(url);
          });
    },[file])
    //const storageRef = projectstorage.ref(file.name);

    return {url, progress};
}
export default useFileStorage;
