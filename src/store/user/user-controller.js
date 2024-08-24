import HttpService from "../../service/httpService";

const getUser= async () => {
    const resp = await HttpService.get({
        path: "user/getUserById"
    })
    console.log(resp);
}

export {
    getUser
}