function AsyncH() {
    let promiseObj = new Promise((resolve, reject) => {
            let rand = Math.ceil(Math.random() * 2);
            if (rand % 2 == 0) {
                resolve();
            } else {
                reject();
            }
        });
        return promiseObj;
    }

    AsyncH().then(() => console.log("success")).catch(() => console.log("rejected"));